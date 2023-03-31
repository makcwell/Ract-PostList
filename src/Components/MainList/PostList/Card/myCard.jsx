import React from 'react';
import s from './myCard.module.css';
import { CardMedia, Typography, CardContent, Chip, CardHeader, Avatar, Card } from '@mui/material';
import { Stack } from '@mui/system';
import { useNavigate } from "react-router-dom";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function MyCard({ card }) {

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

        // <Grid item xs="12" sm="4" md="4">
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
                        sx={{ width: 56, height: 56 }}
                    />
                }
                title={card.author.name}
                subheader={card.author.about}

            />
            <div onClick={handleIntoCardClick}>
                {/* Фото карточки */}
                <CardMedia className={s.pointer}
                    // component="img"
                    // height="194"
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
                                variant="body1">
                        {card.text}
                    </Typography>
                    {/* <Typography mt={2} variant="body2" component="div">
                    <span> меч </span>
                    <span> воин </span>
                </Typography> */}

                </CardContent>
            </div>

            {/* Хештеги карточки */}
            <CardContent>
                <Stack mt={0} direction="row" flexWrap='wrap' spacing={1}>
                    {card.tags.map((item) =>
                        <Chip sx={{ marginBottom: '5px' }} label={item} key={item} size="small" color="success" />
                    )}
                </Stack>
            </CardContent>

            {/* Подвал карточки (лайки, комменты, дата добавления поста) */}
            <CardContent
                sx={{
                    display: 'flex',
                    flex: '1'
                }}
            >
                <div className={s.cardFooter__wrapper}>
                    <div className={s.cardFooter__favorite}>
                        <div className={s.boxSvg}>
                            {/* <Like /> */}
                            <FavoriteBorderIcon />
                            {card.likes.length}
                        </div>
                        {card.comments.length !== 0 &&
                            <div className={s.boxComm}>
                                {/* <Comment /> */}
                                <ChatBubbleOutlineIcon />
                                {card.comments.length}
                            </div>
                        }
                    </div>
                    <div className={s.cardFooter__date}>{createdPost}</div>
                </div>

            </CardContent>
        </Card>
        // {/* </Grid> */ }

    );

}

export default MyCard;