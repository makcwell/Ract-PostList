
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

const RegistrationForm = ({ setRender }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [open, setOpen] = useState(false);
    const [type, setType] = useState(false);
    const [openAnswer, setOpenAnswer] = useState(false)
    const { setMessage, message } = useContext(LocalStorageContext)

    const onSubmit = useCallback(async (data) => {
        const answer = await getRegistrationUser({ ...data, group: "group-10" })
        console.log(answer)
        setMessage(answer)
        setOpenAnswer(!openAnswer);
    }, [openAnswer, setMessage]);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleOpenAnswerForm = () => {
        setOpenAnswer(!openAnswer);
        setRender(message.message ? true : false)
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
                            {...register('email', {
                                required: {
                                    value: true,
                                    message: 'Обязатель поле для ввода'
                                },
                                pattern: {
                                    message: 'Email в формате expamle@example.com',
                                    value: /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                                }
                            })}
                        />
                        {errors?.email && <span style={{ color: "red" }}>{errors.email?.message}</span>}
                        <TextField
                            autoFocus
                            margin="dense"
                            id="pass"
                            label="Пароль"
                            type={type ? "text" : "password"}
                            fullWidth
                            variant="outlined"
                            {...register('password', {
                                required: {
                                    value: true,
                                    message: 'Обязатель поле для ввода'
                                },
                                pattern: {
                                    message: 'Пароль должен содержать минимум 8 символов, одну букву латинского алфавита и одну цифру',
                                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                }
                            })}
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
                        {errors?.password && <span style={{ color: "red" }}>{errors.password?.message}</span>}
                        <Typography>Регистрируясь на сайте, вы соглашаетесь с нашими Правилами и Политикой конфиденциальности и соглашаетесь на информационную рассылку.</Typography>
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