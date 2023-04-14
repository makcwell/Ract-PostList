import * as React from 'react';
import {styled} from '@mui/material/styles';
import {Box, Paper, Avatar, Button, CardContent, CardHeader, CardMedia, Chip, Grid} from '@mui/material';
import s from '../CardInfo/card-info.module.css'
import {Stack} from '@mui/system';
import {useContext, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useParams, useNavigate} from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {addComment, delComment, delPost, getAllComments, getPostById} from "../../../../API/PostsApi";
import {LocalStorageContext} from "../../../../App";


const Item = styled(Paper)(({theme}) => ({
    // backgroundColor: theme.palette.mode === 'white' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
    // backgroundColor: 'yellow',
    boxShadow: 'none',
    // border: '2px solid #000',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'justify',
}));


export function CardInfo() {
    const {userInfData, handleFirstRender} = useContext(LocalStorageContext)
    const [showFormComment, setShowFormComment] = useState(false)
    const {register, handleSubmit, resetField, formState: {errors}} = useForm()
    const [post, setPost] = useState(null)
    const [comments, setComment] = useState([])
    const params = useParams()
    const postId = params.id
    const navigate = useNavigate()


    useEffect(() => {
        async function fetchData() {
            const res = await getPostById(postId)
            await setPost(res)
            const comData = await getAllComments(postId)
            await setComment(comData)
        }

        fetchData()

    }, [postId])

    // Добавить комментарий
    const sendCommentPost = async (data) => {
        const res = await addComment(data, postId)
        await setPost(res)
        const comData = await getAllComments(postId)
        await setComment(comData)
        resetField('text')
        setShowFormComment(false)
    }

    // Открываем и закрываем форму комментариев
    const openFormComment = () => {
        setShowFormComment((state) => !showFormComment)
    }

    // Кнопка назад
    const handleBtnBack = () => {
        navigate(-1)
    }

    // Удалить комментарий
    const handleDeleteComment = async (commentId) => {
        const res = await delComment(postId, commentId)
        await setPost(res)
        const comData = await getAllComments(postId)
        await setComment(comData)
    }


    // Удалить пост
    // TODO: Если после удаления вернемся по истории на главную, пост висит на странице. Исправил добавлением handleFirstRender из контекста
    const handleDeletePost = async () => {
        await delPost(postId)
        await navigate(-1)
        await handleFirstRender()
    }

    // Для формата даты
    const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }


    return (
        <Box sx={{flexGrow: 1, borderRadius:'10px', boxShadow: '0px 5px 10px 2px rgba(17, 18, 19, 0.5)'}}
             backgroundColor='white'
             padding={2}>

            {/* Кнопка назад */}
            <div className={s.btnBackWrapper}>
                <Button onClick={handleBtnBack} variant='outlined' size='small' sx={{boxShadow: '0px 2px 3px 1px rgba(17, 18, 19, 0.5)'}}>Назад</Button>
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
                                boxShadow: '0px 5px 10px 2px rgba(17, 18, 19, 0.5)',
                                borderRadius: '10px'
                            }}
                            image={post?.image}
                            title="фото"
                            alt="фото"

                        />
                    </Item>
                </Grid>

                {/* Инфо пользователя / Лайки / Теги */}
                <Grid item xs={12} md={6} lg={6}>
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
                                            src={post?.author.avatar}
                                    />

                                }

                                title={post?.author.name}
                                subheader={new Date(post?.created_at).toLocaleString('ru', options).slice(0, -3)}
                            />
                            {userInfData._id === post?.author._id &&
                                <Item>
                                    <Button variant={'text'} onClick={() => navigate('edit')}>Редактировать</Button>
                                    <Button variant={'text'} color={'error'} onClick={handleDeletePost}>Удалить</Button>
                                </Item>

                            }


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
                                        {/* <Like /> */}
                                        <FavoriteBorderIcon fontSize={'large'}/>
                                        {post?.likes.length}
                                    </div>

                                    {/* Хештеги карточки */}
                                    <Stack mt={2}
                                           flexGrow='1'
                                           direction="row"
                                           flexWrap='wrap'
                                        // backgroundColor='tomato'
                                           spacing={1}
                                    >

                                        {post?.tags.map((tag, index) =>

                                            <Chip sx={{marginBottom: '5px', maxWidth: '100px'}} label={tag} key={index}
                                                  size="small" color="success"/>
                                        )}

                                    </Stack>
                                </div>

                            </div>

                        </CardContent>
                    </Item>

                </Grid>

                {/* название  поста */}
                <Grid item xs={12}>
                    <Item sx={{fontSize: '1rem'}}>
                        <span><b>Название поста:</b></span>
                        <span className={s.postDescription}>{post?.title}</span>
                    </Item>
                </Grid>

                {/* Описание поста */}
                <Grid item xs={12}>
                    <Item sx={{fontSize: '1rem'}}>
                        <span><b>Описание поста:</b> </span>
                        <span className={s.postDescription}>{post?.text}</span>
                    </Item>
                </Grid>

                {/* Кнопка открытия / закрытия формы добавления комментария */}
                <Grid item>
                    <Button variant="contained"
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
                                    {...register('text', {
                                        required: {
                                            value: true,
                                            message: 'Комментарий не может быть пустым',
                                        }
                                    })}
                                    placeholder='...напишите ваш комментарий'
                                />
                                {errors?.comment && <span className={s.errorComment}>{errors.comment?.message}</span>}

                                <Button sx={{maxWidth: '200px', marginBottom: '2rem'}} size="large" type='submit'
                                        variant="contained" color="success" endIcon={<SendIcon/>}>
                                    Добавить
                                </Button>
                            </form>
                        </Item>
                    }
                </Grid>

                {/*/!* Комментарии *!/*/}
                <Grid item xs={12}>
                    <Item sx={{maxHeight: '450px', overflow: 'hidden', overflowY: 'auto', border: '1px solid #ccc',  borderRadius: '10px'}}>

                        {comments?.length !== 0 ?

                            (comments.map((comment, i) =>

                                <div className={s.commentWrapper} key={i}>
                                    <div className={s.userInfoComment}>
                                        <CardHeader
                                            avatar={
                                                <Avatar
                                                    sx={{
                                                        backgroundColor: 'teal',
                                                        width: 32,
                                                        height: 32,
                                                    }}
                                                    src={comment.author.avatar}

                                                />
                                            }
                                            sx={{
                                                border: '1px solid #ccc',
                                                borderRadius: '30px',
                                                backgroundColor: 'lightgray'
                                            }}
                                            title={comment.author.name}
                                            subheader={new Date(comment.created_at).toLocaleString('ru', options).slice(0, -3)}
                                        />
                                        <div className={s.commentText}>
                                            {comment.text}
                                        </div>
                                    </div>


                                    {userInfData._id === comment.author._id &&
                                        <HighlightOffIcon cursor={'pointer'} color={'error'} onClick={() => {
                                            handleDeleteComment(comment._id)
                                        }}/>
                                    }
                                </div>
                            )) : <div>Комментариев еще нет, добавь их первым !</div>}

                    </Item>
                </Grid>

            </Grid>
        </Box>
    );
}