
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useContext, useState } from "react";
import { setAuthData } from '../../../../API/AuthApi'
import { LocalStorageContext } from "../../../../App";
import RegistrationForm from './regModal';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { InputAdornment, IconButton } from '@mui/material';


const FormDialog = () => {
    const [open, setOpen] = useState(false);
    const [inputPassword, setInputPassword] = useState('');
    const [inputMail, setInputMail] = useState('')
    const [render, setRender] = useState(true)
    const [type, setType] = useState(false);
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

    const handleClickShowPassword = () => {
        setType(!type)
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
        setType(!type)
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
                        type={type ? "text" : "password"}
                        fullWidth
                        variant="outlined"
                        onChange={(event) => setInputPassword(event.target.value)}
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
                </DialogContent>
                <DialogActions>
                    {render && <RegistrationForm setRender={setRender} />}
                    <Button onClick={handleEntry}>Подтвердить</Button>
                    <Button onClick={handleClose}>Отмена</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default FormDialog;