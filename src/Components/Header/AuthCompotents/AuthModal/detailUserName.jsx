import { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import CardMedia from '@mui/material/CardMedia';
import { LocalStorageContext } from "../../../../App";
import { USER_PATTERN } from '../../../../constants/constants';
import { getUserInfo, changeUserInfo, changeUserAvatar } from '../../../../API/AuthApi';
import ResultUpdateInfo from './updateUserInfo';


const DetailUserInfo = ({ open, onClose, onClick }) => {
    const { setUserInfData, handleFirstRender } = useContext(LocalStorageContext)
    const { register, handleSubmit, reset, formState: { isLoading, errors, defaultValues }, getValues } = useForm({
        defaultValues: async () => {
            const userDefaultValues = await getUserInfo()
            setUserInfData(userDefaultValues)
            return userDefaultValues
        }
    });
    const [openForm, setOpenForm] = useState(false)
    const [needUpdate, setNeedUpdate] = useState(false)
    const getAvatar = getValues('avatar')

    const onSubmit = (data) => {
        const { about, name, avatar } = data
        if (defaultValues.avatar !== data.avatar) {
            changeUserAvatar({ avatar })
            reset(data)
        }
        if (defaultValues.about !== data.about || defaultValues.name !== data.name) {
            changeUserInfo({ about, name })
            reset(data)
        }
        setOpenForm(!openForm)
        setUserInfData(data)
        setNeedUpdate(JSON.stringify(defaultValues) === JSON.stringify(getValues()))
        handleFirstRender()
    }

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
                                    image={getAvatar}
                                    alt="user avatar"
                                />
                                <TextField
                                    margin="dense"
                                    id="email"
                                    label="Электронная почта"
                                    type="email"
                                    fullWidth
                                    variant="standard"
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
                                    error={!!errors.name}
                                    helperText={errors?.name?.message}
                                    {...register('name', USER_PATTERN)}
                                />
                                <TextField
                                    id="about"
                                    margin="dense"
                                    label="Информация о вас"
                                    multiline
                                    fullWidth
                                    rows={4}
                                    error={!!errors.about}
                                    helperText={errors?.about?.message}
                                    {...register('about', USER_PATTERN)}
                                />
                                <TextField
                                    margin="dense"
                                    id="avatarLink"
                                    label="Ссылка на аватар"
                                    type="text"
                                    multiline
                                    fullWidth
                                    rows={3}
                                    error={!!errors.avatar}
                                    helperText={errors?.avatar?.message}
                                    {...register('avatar', USER_PATTERN)}
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
            <ResultUpdateInfo
                openForm={openForm}
                setOpenForm={setOpenForm}
                needUpdate={needUpdate}
            />

        </>
    );
}

export default DetailUserInfo