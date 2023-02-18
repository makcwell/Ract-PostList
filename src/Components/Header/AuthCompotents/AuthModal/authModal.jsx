import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from "react";



export default function FormDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEntry = () => {
        setOpen(false);
        localStorage.setItem('Email',inputMail)
        localStorage.setItem('Password',inputPassword)
        console.log(inputPassword, inputMail, logInData) // Данные инпутов для апи. Удалить временные запросы!!!
        logInData.email = inputMail
        logInData.password = inputPassword
    };
    let logInData = {}; // Данные инпутов для апи. Удалить временные запросы!!!

    const [inputPassword, setInputPassword] = useState('');
    const [inputMail, setInputMail] = useState('')

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Авторизация
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{textAlign: 'center'}}>Авторизация</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="mail"
                        label="Почта"
                        type="email"
                        fullWidth
                        variant="outlined"
                        onChange={(event) => setInputMail(event.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="pass"
                        label="Пароль"
                        type="password"
                        fullWidth
                        variant="outlined"
                        onChange={(event) => setInputPassword(event.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleEntry} >Подтвердить</Button>
                    <Button onClick={handleClose}>Отмена</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}