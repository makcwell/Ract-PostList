import { useEffect, useContext, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import { getUserInfo } from '../../../../API/AuthApi';
import CardMedia from '@mui/material/CardMedia';
import { LocalStorageContext } from "../../../../App";
import { useForm } from "react-hook-form";

const DetailUserInfo = ({ open, onClose, onClick }) => {
    const { userInfData, setUserInfData } = useContext(LocalStorageContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [userForm, setUserForm] = useState('')
    const [avatar, setAvatar] = useState('')

    const onSubmit = (data) => {
        if (userInfData.avatar !== data.avatar) {
            const { about, name, ...avatarData } = data
            console.log(avatarData)
            setAvatar(avatarData)
        }
        if (userInfData.about !== data.about || userInfData.name !== data.name) {
            const { avatar, ...userInfo } = data
            setUserForm(userInfo)
        }
    }

    useEffect(() => {
        getUserInfo()
            .then((userData) => {
                setUserInfData(userData)
            })
            .catch(err => console.log(err))
    }, [setUserInfData])


    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Информация о пользователе</DialogTitle>
            <DialogContent>
                {userInfData !== '' ?
                    (<>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <CardMedia
                                component="img"
                                height="160"
                                image={userInfData.avatar}
                                alt="user avatar"
                            />
                            <TextField
                                margin="dense"
                                id="email"
                                label="Электронная почта"
                                type="email"
                                fullWidth
                                variant="standard"
                                value={userInfData.email}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                margin="dense"
                                id="name"
                                label="ФИО"
                                type="text"
                                fullWidth
                                defaultValue={userInfData.name}
                                {...register('name')}
                            />
                            <TextField
                                id="about"
                                margin="dense"
                                label="Информация о вас"
                                multiline
                                fullWidth
                                rows={4}
                                defaultValue={userInfData.about}
                                {...register('about')}
                            />
                            <TextField
                                margin="dense"
                                id="avatarLink"
                                label="Ссылка на аватар"
                                type="text"
                                multiline
                                fullWidth
                                rows={3}
                                defaultValue={userInfData.avatar}
                                {...register('avatar')}
                            />
                            <DialogActions>
                                <Button type='submit'>Изменить</Button>
                                <Button onClick={onClick}>Закрыть</Button>
                            </DialogActions>
                        </form>
                    </>) : (
                        <CircularProgress />)}
            </DialogContent>
        </Dialog >
    );
}

export default DetailUserInfo