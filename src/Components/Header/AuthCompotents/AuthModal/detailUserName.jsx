import { useEffect, useContext, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import { getUserInfo, changeUserInfo, changeUserAvatar } from '../../../../API/AuthApi';
import CardMedia from '@mui/material/CardMedia';
import { LocalStorageContext } from "../../../../App";
import { useForm } from "react-hook-form";
import ResultUpdateInfo from './updateUserInfo';




const DetailUserInfo = ({ open, onClose, onClick }) => {
    const { setUserInfData } = useContext(LocalStorageContext)
    const { register, handleSubmit, watch, reset, formState: { isLoading, defaultValues } } = useForm({
        defaultValues: async () =>
            await getUserInfo()
    });
    const [openForm, setOpenForm] = useState(false)
    const [needUpdate, setNeedUpdate] = useState(true)
    const watchAvatar = watch('avatar')


    const onSubmit = (data) => {

        const { about, name, avatar } = data
        if (defaultValues.avatar !== data.avatar) {
            changeUserAvatar({ avatar })
        }
        if (defaultValues.about !== data.about || defaultValues.name !== data.name) {
            changeUserInfo({ about, name })
        }
        if (JSON.stringify(defaultValues) === JSON.stringify(data)) {
            setNeedUpdate(false)
        }

        setOpenForm(!openForm)
        reset(data)
    }


    useEffect(() => {
        setUserInfData(defaultValues)
    }, [defaultValues, setUserInfData])


    return (
        <>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle sx={{ textAlign: 'center' }}>Информация о пользователе</DialogTitle>
                <DialogContent>
                    {!isLoading ?
                        (<>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <CardMedia
                                    id='avatar'
                                    component="img"
                                    height="300"
                                    image={watchAvatar}
                                    alt="user avatar"
                                />
                                <TextField
                                    margin="dense"
                                    id="email"
                                    label="Электронная почта"
                                    type="email"
                                    fullWidth
                                    variant="standard"
                                    // defaultValue={userInfData.email}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    {...register('email')}
                                />
                                <TextField
                                    margin="dense"
                                    id="name"
                                    label="ФИО"
                                    type="text"
                                    fullWidth
                                    // defaultValue={userInfData.name}
                                    {...register('name')}
                                />
                                <TextField
                                    id="about"
                                    margin="dense"
                                    label="Информация о вас"
                                    multiline
                                    fullWidth
                                    rows={4}
                                    // defaultValue={userInfData.about}
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
                                    // defaultValue={userInfData.avatar}
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
            <ResultUpdateInfo openForm={openForm} setOpenForm={setOpenForm} needUpdate={needUpdate} setNeedUpdate={setNeedUpdate} />

        </>
    );
}

export default DetailUserInfo