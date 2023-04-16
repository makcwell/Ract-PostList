import React from 'react';
import {Box, Button, TextField} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {getPostById, setPost} from "../../../../API/PostsApi";
import s from './EditPost.module.css'


export function EditPost() {

    const params = useParams()
    const postId = params.id
    const navigate = useNavigate()
    const {register, handleSubmit, formState: {isDirty}} = useForm({
        defaultValues: async () => await getPostById(postId)
    })

    const onSubmit = async (data) => {
        const tag = data.tags.toString()
        const postData = {
            "image": data.image,
            "tags": tag.split(' ').join('').split(','),
            "title": data.title,
            "text": data.text
        }
        await setPost(postData, postId)
        navigate(-1)
    }


    return (
        <Box className={s.mainBox}>
            <Button className={s.btnBack} variant={"outlined"} onClick={() => navigate(-1)} >Назад</Button>
            <Box className={s.formBox}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        focused
                        margin="dense"
                        label="Изображение"
                        type="text"
                        fullWidth
                        variant="outlined"
                        {...register('image')}
                    />
                    <TextField
                        focused
                        margin="dense"
                        label="Тэги"
                        type="text"
                        fullWidth
                        variant="outlined"
                        {...register('tags')}
                    />
                    <TextField
                        focused
                        margin="dense"
                        label="Название"
                        type="text"
                        fullWidth
                        variant="outlined"
                        {...register('title')}
                    />
                    <TextField
                        focused
                        margin="dense"
                        label="Описание"
                        type="text"
                        fullWidth
                        variant="outlined"
                        {...register('text')}
                    />
                    <Button disabled={!isDirty} type="submit" fullWidth size="large" color="success" variant={'contained'} sx={{boxShadow: '0px 2px 3px 1px rgba(17, 18, 19, 0.5)'}}>Подтвердить</Button>
                </form>
            </Box>
        </Box>
    );
}

