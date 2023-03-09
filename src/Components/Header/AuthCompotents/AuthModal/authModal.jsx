
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useContext, useState } from "react";
import { setAuthData } from '../../../../API/AuthApi'
import { LocalStorageContext } from "../../../../App";



const FormDialog = () => {
    const [open, setOpen] = useState(false);
    const [inputPassword, setInputPassword] = useState('');
    const [inputMail, setInputMail] = useState('')

    const { setToken } = useContext(LocalStorageContext)
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {

        setOpen(false);
    };

    const handleEntry = async () => {
        const token = await setAuthData(inputMail, inputPassword)
        setOpen(false);
        setToken(token)

    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Авторизация
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ textAlign: 'center' }}>Авторизация</DialogTitle>
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
                    <Button onClick={handleEntry}>Подтвердить</Button>
                    <Button onClick={handleClose}>Отмена</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default FormDialog;