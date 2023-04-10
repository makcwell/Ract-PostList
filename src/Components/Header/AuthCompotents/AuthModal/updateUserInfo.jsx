import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import Confetti from 'react-confetti'

import s from './auth.module.css'

const ResultUpdateInfo = ({ openForm, needUpdate, setOpenForm }) => {
    const handleClose = () => {
        setOpenForm(!openForm)
    }
    return (
        <>
            <Dialog open={openForm} onClose={handleClose}>
                <DialogTitle sx={{ textAlign: 'center' }}>Обновление данных о пользователе</DialogTitle>
                <DialogContent>
                    <Typography sx={{ textAlign: 'center' }}>{needUpdate ? 'Нет данных для обновления!' : 'Данные успешно обновлены!'}</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Ок</Button>
                </DialogActions>
                {(!needUpdate && openForm) && <Confetti className={s.confettiWrapperStyled} width={400} height={200} numberOfPieces={150} />}
            </Dialog>

        </>
    );
}

export default ResultUpdateInfo