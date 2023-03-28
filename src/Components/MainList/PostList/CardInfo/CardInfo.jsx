import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Avatar, Button, CardContent, CardHeader, CardMedia, Chip } from '@mui/material';
import s from '../CardInfo/card-info.module.css'
import { Stack } from '@mui/system';
import { useEffect } from 'react';
import apiPosts from '../../../../API/PostsApi';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'white' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // backgroundColor: 'yellow',
    boxShadow: 'none',
    // border: '2px solid #000',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'justify',
}));

export function CardInfo({ cards }) {
    // console.log('from cardInfo >>', cards)

    const [showFormComment, setShowFormComment] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const params = useParams()
    const cardId = params.id
    const post = cards.find((item) => item._id === cardId)

    const navigate = useNavigate()


    const sendCommentPost = (data) => {
        // e.preventDefault()
        console.log('data from textarea >>', data)

        setShowFormComment(false)
        console.log('clicked on FORM BUTTON ADD Comment >>')
    }

    // открываем и закрываем форму комментариев
    const openFormComment = () => {
        setShowFormComment((state) => !showFormComment)
    }

    const handleBtnBack = () => {
        navigate(-1)
    }


    // Для формата даты
    const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }
    let whenCreatedPost = new Date(post.created_at).toLocaleString('ru', options).slice(0, -3);

    return (
        <Box sx={{ flexGrow: 1 }}
            backgroundColor='white'
            padding={2}>

            {/* Кнопка назад */}
            <div className={s.btnBackWrapper}>
                <Button onClick={handleBtnBack} variant='outlined' size='small'>
                    {'<'} Назад
                </Button>
            </div>


            <Grid container spacing={2}>

                {/* фото поста */}
                <Grid item xs={12} md={6} lg={6}>
                    <Item>
                        <CardMedia
                            component="img"
                            sx={{
                                maxHeight: '400px',
                                width: '100%',

                            }}
                            image={post.image}
                            title="фото"
                            alt="фото"

                        />
                    </Item>
                </Grid>

                {/* Инфо пользователя / Лайки / Теги */}
                <Grid item xs={12} md={6} lg={6} >
                    <Item>
                        <div className={s.userInfoWrapper}>
                            <CardHeader
                                // sx={{ backgroundColor: 'tomato' }}

                                avatar={
                                    <Avatar sx={{
                                        // display: 'flex',
                                        backgroundColor: 'teal',
                                        width: 56, height: 56,
                                    }}
                                        src={post.author.avatar}
                                    />

                                }

                                title={post.author.name}
                                subheader={whenCreatedPost}
                            />
                        </div>

                        {/* Раздел лайков хештегов */}
                        <CardContent
                            sx={{
                                paddingTop: '0',
                                // backgroundColor: 'pink',
                            }}
                        >
                            <div className={s.cardFooter__wrapper}>
                                <div className={s.cardFooter__favorite}>

                                    {/* Лайки карточки */}
                                    <div className={s.boxSvg}>
                                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21c.211 0 .514-.137.735-.265C18.405 17.205 22 13.098 22 8.922 22 5.45 19.553 3 16.29 3c-1.863 0-3.374.863-4.29 2.186C11.104 3.873 9.573 3 7.71 3 4.447 3 2 5.451 2 8.922c0 4.176 3.595 8.284 9.275 11.813.211.128.514.265.725.265Zm0-1.657c-.04 0-.11-.049-.201-.117C7.579 16.5 3.62 12.569 3.62 8.921c0-2.608 1.732-4.344 4.069-4.344 1.893 0 2.98 1.147 3.625 2.128.272.392.443.5.685.5.242 0 .393-.118.685-.5.695-.96 1.742-2.128 3.625-2.128 2.337 0 4.069 1.736 4.069 4.344 0 3.647-3.958 7.578-8.168 10.303-.1.07-.17.118-.211.118Z" fill="#7B8E98"></path>
                                            <path clip-rule="evenodd" d="M12 19.343c-.04 0-.11-.049-.201-.117C7.579 16.5 3.62 12.569 3.62 8.921c0-2.608 1.732-4.344 4.069-4.344 1.893 0 2.98 1.148 3.625 2.128.272.392.443.5.685.5.242 0 .393-.118.685-.5.695-.96 1.742-2.128 3.625-2.128 2.337 0 4.069 1.736 4.069 4.344 0 3.647-3.958 7.578-8.168 10.303-.1.07-.17.118-.211.118Z"></path>
                                        </svg>
                                        {post.likes.length}
                                    </div>

                                    {/* Хештеги карточки */}
                                    <Stack mt={2}
                                        direction="row"
                                        flexWrap='wrap'
                                        // backgroundColor='tomato'
                                        spacing={1}>

                                        {post.tags.map((tag) =>
                                            <Chip sx={{ marginBottom: '5px' }} label={tag} key={tag} size="small" color="success" />
                                        )}

                                    </Stack>
                                </div>

                            </div>

                        </CardContent>
                    </Item>

                </Grid>

                {/* название  поста */}
                <Grid item xs={12}>
                    <Item sx={{ fontSize: '1rem' }}>
                        <span><b>Название поста:</b></span>
                        <span className={s.postDescription}>{post.title}</span>
                    </Item>
                </Grid>

                {/* Описание поста */}
                <Grid item xs={12}>
                    <Item sx={{ fontSize: '1rem' }}>
                        <span><b>Описание поста:</b> </span>
                        <span className={s.postDescription}>{post.text}</span>
                    </Item>
                </Grid>

                {/* Кнопка добавления комментариев */}
                <Grid item>
                    <Button variant="contained"
                        // onClick={() => setShowFormComment(true)}
                        onClick={openFormComment}
                    >{showFormComment ? 'Скрыть комментарий' : 'Добавить комментарий'}
                    </Button>

                </Grid>

                {/* Форма добавления комментариев */}
                <Grid item xs={12}>
                    {showFormComment &&
                        <Item>
                            <form className={s.formComment} onSubmit={handleSubmit(sendCommentPost)}>
                                <h2>Оставьте ваш комментарий</h2>
                                <textarea
                                    {...register('comment', {
                                        required: {
                                            value: true,
                                            message: 'Комментарий не может быть пустым',
                                        }
                                    })}
                                    type='text'
                                    placeholder='...напишите ваш комментарий'
                                />
                                {errors?.comment && <span className={s.errorComment}>{errors.comment?.message}</span>}

                                <Button sx={{ maxWidth: '200px', marginBottom: '2rem' }} size="large" type='submit' variant="contained" color="success">
                                    Добавить
                                </Button>
                            </form>
                        </Item>
                    }
                </Grid>

                {/* Комментарии */}
                <Grid item xs={12}>
                    <Item sx={{ maxHeight: '450px', overflow: 'hidden', overflowY: 'scroll', border: '1px solid #ccc' }}>

                        {post.comments.length !== 0 ?

                            (post.comments.map((comment, i) =>

                                <div className={s.commentWrapper} key={i}>
                                    <div className={s.userInfoComment}>
                                        <CardHeader
                                            sx={{
                                                // fontSize: '9px'
                                                // backgroundColor: 'tomato'
                                            }}

                                            avatar={
                                                <Avatar sx={{
                                                    // display: 'flex',
                                                    backgroundColor: 'teal',
                                                    width: 32, height: 32,

                                                }}
                                                    src={post.author.avatar}
                                                />

                                            }

                                            title={post.author.name}
                                            subheader={whenCreatedPost}
                                        />
                                    </div>

                                    <div className={s.commentText} >
                                        {comment.text}
                                    </div>
                                </div>

                            )) : <div>Комментариев еще нет, добавь их первым !</div>}

                    </Item>
                </Grid>

            </Grid>
        </Box >
    );
}