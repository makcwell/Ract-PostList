import React from 'react';
import s from './myCard.module.css';
import {CardMedia, Typography, CardContent, Chip, CardHeader, Avatar, Card, Box} from '@mui/material';
import {Stack} from '@mui/system';
import {useNavigate} from "react-router-dom";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorder';

function MyCard({card}) {

    const handleIntoCardClick = () => {
        navigate(`/post/${card._id}`)
    }

    const navigate = useNavigate()

    const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }

    const createdPost = new Date(card.created_at).toLocaleString('ru', options).slice(0, -3)

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

            {/*/!* Хештеги карточки *!/ //TODO: Решить вопрос с рендером пустого массива с тэгами*/}
            <CardContent>
                <Stack mt={0}
                       flexGrow='1'
                       direction="row"
                       flexWrap='wrap'
                       spacing={1}
                >
                    {card.tags.length > 0 && card.tags.map((item, index) =>
                        <Chip sx={{marginBottom: '5px', maxWidth: '100px'}} label={item} key={index} title={item}
                              size="small" color="success"/>
                    )}
                </Stack>
            </CardContent>

            {/* Подвал карточки (лайки, комменты, дата добавления поста) */}
            <CardContent sx={{display: 'flex', flex: '1'}}>
                <div className={s.cardFooter__wrapper}>
                    <div className={s.cardFooter__favorite}>
                        <Box className={s.boxSvg}>
                            {/* <Like /> */}
                            <Box className={s.boxLike}>
                                <FavoriteBorderOutlinedIcon className={s.iconLike} fontSize={'medium'}/>
                                {card.likes.length > 0 && <Typography>{card.likes.length}</Typography>}
                            </Box>
                        </Box>
                        {/* <Comment /> */}
                        <Box className={s.boxComm}>
                            <Box className={s.boxComment}>
                                <ChatBubbleOutlineIcon fontSize={'medium'}/>
                                {card.comments.length > 0 &&
                                    <Typography>{card.comments.length}</Typography>}
                            </Box>
                        </Box>
                    </div>
                    <div className={s.cardFooter__date}>{createdPost}</div>
                </div>

            </CardContent>
        </Card>
    );

}

export default MyCard;