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

const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'white' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // backgroundColor: 'yellow',
    boxShadow: 'none',
    border: '2px solid #000',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'justify',
}));


// const post_id = '6418eeb3aa3971218395591e';
const post_id = '640b1eff4ee419975fbd2fdb';
// const post_id = '641efdadaa397121839d2b20';



export function CardInfo() {

    const [postInfo, setPostInfo] = useState({})
    const [showFormComment, setShowFormComment] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur" })


    useEffect(() => {
        apiPosts.getPostById(post_id)
            .then((data) => setPostInfo(data))
    }, [])



    const sendCommentPost = (e) => {
        e.preventDefault()
        setShowFormComment(false)
        console.log('clicked on FORM BUTTON ADD Comment >>')
    }

    const openFormComment = () => {
        setShowFormComment((state) => !showFormComment)
    }

    const hendleBtnBack = () => {
        console.log('Clicked on Btb Back')
    }

    const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }

    let whenCreatedPost = new Date(postInfo.created_at).toLocaleString('ru', options)

    return (
        <Box sx={{ flexGrow: 1 }}
            backgroundColor='white'
            padding={2}>

            {/* Кнопка назад */}
            <div className={s.btnBackWrapper}>
                <Button onClick={hendleBtnBack} variant='outlined' size='small'>
                    {'<'} Назад
                </Button>
            </div>


            <Grid container spacing={2}>

                <Grid item xs={12} md={6} lg={6}>
                    <Item>
                        <CardMedia
                            component="img"
                            // height="194"
                            sx={{
                                // display: 'flex',
                                // height: 350,
                                width: '100%',
                                // float: 'left',

                            }}
                            image={postInfo.image}
                            title="фото"
                            alt="фото"

                        />
                    </Item>
                </Grid>

                <Grid item xs={12} md={6} lg={6} >
                    <Item>
                        <div className={s.userInfoWrapper}>
                            <CardHeader
                                sx={{

                                    // backgroundColor: 'tomato'
                                }}

                                avatar={
                                    <Avatar sx={{
                                        // display: 'flex',
                                        backgroundColor: 'teal',
                                        width: 56, height: 56,
                                    }}
                                        src={postInfo?.author?.avatar}
                                    />

                                }

                                title={postInfo?.author?.name}
                                // subheader={postInfo.created_at}
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
                                        {postInfo?.likes?.length}
                                    </div>

                                    {/* Хештеги карточки */}
                                    <Stack mt={2}
                                        direction="row"
                                        flexWrap='wrap'
                                        // backgroundColor='tomato'
                                        spacing={1}>

                                        {postInfo?.tags?.map((tag) =>
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
                        <span className={s.postDescription}>{postInfo.title}</span>
                    </Item>
                </Grid>

                {/* Описание поста */}
                <Grid item xs={12}>
                    <Item sx={{ fontSize: '1rem' }}>
                        <span><b>Описание поста:</b> </span>
                        <span className={s.postDescription}>{postInfo.text}</span>
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
                            <form submitForm={handleSubmit(sendCommentPost)}>
                                <div>Оставьте ваш комментарий</div>
                                <textarea
                                    {...register('comment', { required: true })}
                                />
                                <Button type='submit' variant="contained" color="success">
                                    Добавить
                                </Button>


                            </form>
                        </Item>
                    }
                </Grid>

                {/* Комментарии */}
                <Grid item xs={12}>
                    <Item sx={{ maxHeight: '450px', overflow: 'hidden', overflowY: 'scroll' }}>

                        {postInfo.comments?.map((comment, i) =>

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
                                                src={postInfo.author.avatar}
                                            />
                                            // {postInfo.author.avatar}
                                        }

                                        title={postInfo.author.name}
                                        subheader={whenCreatedPost}
                                    />
                                </div>

                                <div className={s.commentText} >
                                    {comment.text}
                                </div>
                            </div>

                        )}

                    </Item>
                </Grid>


            </Grid>
        </Box >
    );
}