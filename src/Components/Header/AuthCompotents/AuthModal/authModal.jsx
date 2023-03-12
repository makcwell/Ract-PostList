import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useEffect, useState} from "react";
import {setAuthData} from '../../../../API/AuthApi'
import Modal from '../../../Header/RegModal'
import RegistrationForm from '../../../Header/RegForm'

const FormDialog = () => {
    const [open, setOpen] = React.useState(false);
    const [inputPassword, setInputPassword] = useState('');
    const [inputMail, setInputMail] = useState('')


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {

        setOpen(false);
    };

    const handleEntry = () => {
        setAuthData(inputMail, inputPassword)
        setOpen(false);
    };

    // объявляем хук для модала
    const [modalActive, setModalActive] = useState(true)

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


    {/* кнопка Регистрации 90323 */}
  <div>
    <Modal active={modalActive} setActive={setModalActive}>
      <RegistrationForm />
    </Modal>

    <button onClick={() => setModalActive(true)}>Зарегистрировать новый аккаунт</button>
  </div>
    {/* кнопка Регистрации 90323 */}

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleEntry}>Подтвердить</Button>
                    <Button onClick={handleClose}>Отмена</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default FormDialog;