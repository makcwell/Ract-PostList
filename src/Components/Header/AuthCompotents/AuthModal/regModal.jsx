
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, useCallback, useContext } from "react";
import { useForm } from "react-hook-form";
import { getRegistrationUser } from '../../../../API/AuthApi';
import { Typography } from '@mui/material';
import ServerAnswerForm from './serverAnswer';
import { LocalStorageContext } from "../../../../App";
import { InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { EMAIL_PATTERN, PASSWORD_PATTERN, USER_AGREEMENT } from '../../../../constants/constants';

const RegistrationForm = ({ setRender }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [open, setOpen] = useState(false);
    const [type, setType] = useState(false);
    const [openAnswer, setOpenAnswer] = useState(false)
    const { setMessage, message } = useContext(LocalStorageContext)

    const onSubmit = useCallback(async (data) => {
        const answer = await getRegistrationUser({ ...data, group: "group-10" })
        setMessage(answer)
        setOpenAnswer(!openAnswer);
    }, [openAnswer, setMessage]);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleOpenAnswerForm = () => {
        setOpenAnswer(!openAnswer);
        setRender(message.message && true)
    };
    const handleClickShowPassword = () => {
        setType(!type)
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
        setType(!type)
    };
    return (
        <>
            <Button onClick={handleClick}>
                Регистрация
            </Button>
            <Dialog open={open} onClose={handleClick}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogTitle sx={{ textAlign: 'center' }}>Регистрация</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="mail"
                            label="Почта"
                            type="email"
                            fullWidth
                            variant="outlined"
                            error={!!errors.email}
                            helperText={errors?.email?.message}
                            {...register('email', EMAIL_PATTERN)}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="pass"
                            label="Пароль"
                            type={type ? "text" : "password"}
                            fullWidth
                            variant="outlined"
                            error={!!errors.password}
                            helperText={errors?.password?.message}
                            {...register('password', PASSWORD_PATTERN)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {type ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                        <Typography>{USER_AGREEMENT}</Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button type="submit">Подтвердить</Button>
                        <Button onClick={handleClick}>Отмена</Button>
                    </DialogActions>
                </form>
            </Dialog>
            <ServerAnswerForm openAnswer={openAnswer} onClick={handleOpenAnswerForm} onClose={handleOpenAnswerForm} />
        </>
    );
}
export default RegistrationForm;