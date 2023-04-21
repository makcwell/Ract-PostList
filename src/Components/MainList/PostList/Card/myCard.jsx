import {useContext} from 'react';
import s from './myCard.module.css';
import {CardMedia, Typography, CardContent, Chip, CardHeader, Avatar, Card, Box} from '@mui/material';
import {Stack} from '@mui/system';
import {LocalStorageContext} from "../../../../App";
import {useNavigate} from "react-router-dom";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import {FavoriteBorderOutlined, Favorite} from '@mui/icons-material';
import {isLiked} from '../../../../utils/utils';

export default function MyCard({card}) {
    const {handleSetLike, userInfData, handleSetLikePost} = useContext(LocalStorageContext)
    const like = isLiked(card, userInfData)
    const handleIntoCardClick = () => {
        navigate(`/post/${card["_id"]}`)
    }

    const navigate = useNavigate()

    const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }

    const handleLike = () => {
        handleSetLike(card);
        handleSetLikePost(card)
    }

    const createdPost = new Date(card?.created_at).toLocaleString('ru', options).slice(0, -3)

    return (

        <Card className={s.cardShadow}
              sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
              }}
        >

            {/* Автор карточки */}
            <CardHeader
                sx={{
                    display: 'flex'
                }}
                avatar={
                    <Avatar
                        src={card.author.avatar}
                        sx={{width: 56, height: 56}}
                    />
                }
                title={card.author.name}
                subheader={card.author.about}
            />
            <div onClick={handleIntoCardClick}>

                {/* Фото карточки */}
                <CardMedia className={s.pointer}
                           sx={{
                               height: '300px',
                               width: '100%',
                               display: 'flex',

                           }}
                           image={card.image}
                           title={card.title}
                           alt={`фото ${card.title}`}
                />

                {/* Заголовок карточки */}
                <CardContent className={s.pointer}
                             sx={{
                                 display: 'flex',
                                 flexDirection: 'column'
                             }}>
                    <Typography mt={2}
                                variant="h5"
                                component="h5"
                    > {card.title}
                    </Typography>

                    {/* Описание(текст) карточки */}
                    <Typography mt={2}
                                variant="body1"
                                noWrap={true}>
                        {card.text}
                    </Typography>

                </CardContent>
            </div>

            {/*/!* Хештеги карточки *!/*/}
            <CardContent>
                <Stack mt={0}
                       flexGrow='1'
                       direction="row"
                       flexWrap='wrap'
                       spacing={1}
                >

                    {card.tags.length > 0 && card.tags[0] !== '' ? card.tags.map((item, index) =>
                        <Chip sx={{marginBottom: '5px', maxWidth: '100px'}} label={item} key={index} title={item}
                              size="small" color="success"/>
                    ) : <span></span>}

                </Stack>
            </CardContent>

            {/* Подвал карточки (лайки, комменты, дата добавления поста) */}
            <CardContent sx={{display: 'flex', flex: '1'}}>
                <Box className={s.cardFooter__wrapper}>
                    <Box className={s.cardFooter__favorite}>
                        {/* <Like /> */}
                        <Box className={s.boxSvg}>
                            <Box className={s.boxLike} onClick={handleLike}>
                                {like ? <Favorite className={s.iconLike}/> :
                                    <FavoriteBorderOutlined className={s.iconNotLike} fontSize={'medium'}/>}
                                {card?.likes?.length > 0 && <Typography>{card?.likes?.length}</Typography>}
                            </Box>
                        </Box>
                        {/* <Comment /> */}
                        <Box className={s.boxComm}>
                            <Box className={s.boxComment}>
                                <ChatBubbleOutlineIcon fontSize={'medium'}/>
                                {card?.comments?.length > 0 &&
                                    <Typography>{card?.comments?.length}</Typography>}
                            </Box>
                        </Box>
                    </Box>
                    <div className={s.cardFooter__date}>{createdPost}</div>
                </Box>
            </CardContent>
        </Card>
    );
}