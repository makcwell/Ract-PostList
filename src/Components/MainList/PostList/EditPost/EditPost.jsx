import React from 'react';
import { Box, Button, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getPostById, setPost } from "../../../../API/PostsApi";
import s from './EditPost.module.css'
import { REQUIRED_PATTERN } from '../../../../constants/constants';


export function EditPost() {

    const params = useParams()
    const postId = params.id
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors, isDirty } } = useForm({
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
    const handleNavigate = () => {
        navigate(-1)
    }

    return (
        <Box className={s.mainBox}>
            <Button sx={{ m: '20px' }} className={s.btnBack} variant={"outlined"} onClick={handleNavigate} >Назад</Button>
            <Box className={s.formBox}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        focused
                        margin="dense"
                        label="Изображение"
                        type="text"
                        fullWidth
                        variant="outlined"
                        error={!!errors.image}
                        helperText={errors?.image?.message}
                        {...register('image', REQUIRED_PATTERN)}
                    />
                    <TextField
                        focused
                        margin="dense"
                        label="Тэги"
                        type="text"
                        fullWidth
                        variant="outlined"
                        error={!!errors.tags}
                        helperText={errors?.tags?.message}
                        {...register('tags', REQUIRED_PATTERN)}
                    />
                    <TextField
                        focused
                        margin="dense"
                        label="Название"
                        type="text"
                        fullWidth
                        variant="outlined"
                        error={!!errors.title}
                        helperText={errors?.title?.message}
                        {...register('title', REQUIRED_PATTERN)}
                    />
                    <TextField
                        focused
                        margin="dense"
                        label="Описание"
                        type="text"
                        fullWidth
                        variant="outlined"
                        error={!!errors.text}
                        helperText={errors?.text?.message}
                        {...register('text', REQUIRED_PATTERN)}
                    />
                    <Button disabled={!isDirty} type="submit" fullWidth size="large" color="success" variant={'contained'} sx={{ boxShadow: '0px 2px 3px 1px rgba(17, 18, 19, 0.5)', }}>Подтвердить</Button>
                </form>
            </Box>
        </Box>
    );
}

