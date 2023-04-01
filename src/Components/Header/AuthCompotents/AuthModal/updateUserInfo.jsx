import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import Confetti from 'react-confetti'

const ResultUpdateInfo = ({ openForm, setNeedUpd, needUpd, setUpdateFlag, updateFlag, setOpenForm }) => {
    // console.log(needUpd)
    const handleClose = () => {
        if (needUpd === false) {
            setUpdateFlag(false)
            // console.log(`Это тут не выполняется`)
        } else {
            setUpdateFlag(!updateFlag)
            // console.log(`Это тут`)
        }
        setNeedUpd(!needUpd)
        setOpenForm(!openForm)
    }
    return (
        <>
            <Dialog open={openForm} onClose={handleClose}>
                <DialogTitle sx={{ textAlign: 'center' }}>Обновление данных о пользователе</DialogTitle>
                <DialogContent>
                    <Typography sx={{ textAlign: 'center' }}>{needUpd === false ? 'Нет данных для обновления!' : 'Данные успешно обновлены!'}</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Ок</Button>
                </DialogActions>
                {(needUpd && openForm) && <Confetti numberOfPieces={150} />}
            </Dialog>

        </>
    );
}

export default ResultUpdateInfo