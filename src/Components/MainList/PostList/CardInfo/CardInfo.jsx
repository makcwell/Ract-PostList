import { useContext, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Paper, Avatar, Button, CardContent, CardHeader, CardMedia, Chip, Grid } from '@mui/material';
import s from '../CardInfo/card-info.module.css'
import { Stack } from '@mui/system';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import { FavoriteBorder, Favorite } from '@mui/icons-material';
import { isLiked } from '../../../../utils/utils';
import { LocalStorageContext } from "../../../../App";

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

    const { handleSetLike, userInfData } = useContext(LocalStorageContext)
    const [showFormComment, setShowFormComment] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const params = useParams()
    const cardId = params.id
    const post = cards.find((item) => item._id === cardId)
    const like = isLiked(post, userInfData)

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
    const handleLike = () => {
        handleSetLike(post);
    }

    // Для формата даты
    const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }
    let whenCreatedPost = new Date(post?.created_at).toLocaleString('ru', options).slice(0, -3);

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
                                boxShadow: '0px 5px 10px 2px rgba(17, 18, 19, 0.5)',

                            }}
                            image={post?.image}
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
                                        src={post?.author.avatar}
                                    />

                                }

                                title={post?.author.name}
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
                                        {/* <Like /> */}
                                        {like ? <Favorite onClick={handleLike} /> : <FavoriteBorder onClick={handleLike} />}
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

                                        {post?.tags.map((tag) =>

                                            <Chip sx={{ marginBottom: '5px', maxWidth: '100px' }} label={tag} key={tag} size="small" color="success" />

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
                        <span className={s.postDescription}>{post?.title}</span>
                    </Item>
                </Grid>

                {/* Описание поста */}
                <Grid item xs={12}>
                    <Item sx={{ fontSize: '1rem' }}>
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

                                <Button sx={{ maxWidth: '200px', marginBottom: '2rem' }} size="large" type='submit' variant="contained" color="success" endIcon={<SendIcon />}>
                                    Добавить
                                </Button>
                            </form>
                        </Item>
                    }
                </Grid>

                {/* Комментарии */}
                <Grid item xs={12}>
                    <Item sx={{ maxHeight: '450px', overflow: 'hidden', overflowY: 'scroll', border: '1px solid #ccc' }}>

                        {post?.comments.length !== 0 ?

                            (post?.comments.map((comment, i) =>

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
                                                    src={post?.author.avatar}
                                                />

                                            }

                                            title={post?.author.name}
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