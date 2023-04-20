import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import s from './page404.module.css'

export function Page404() {

    // Кнопка назад
    const navigate = useNavigate()
    const handleBtnBack = () => {
        navigate(-1)
    }

    return (
        <Box sx={{ flexGrow: 1, borderRadius: '10px', boxShadow: '0px 5px 10px 2px rgba(17, 18, 19, 0.5)' }}
            backgroundColor='white'
            padding={2}>

            {/* Кнопка назад */}
            <div className={s.btnBackWrapper}>
                <Button onClick={handleBtnBack} variant='outlined' size='small'
                    sx={{ boxShadow: '0px 2px 3px 1px rgba(17, 18, 19, 0.5)' }}>Назад</Button>
            </div>
            <div className={s.wrapperNotFound}>
                <div className={s.notFound__main}>
                    <div className={s.notFound__Title}>404</div>
                    <div className={s.notFound__Subtitle} >Страница не найдена</div>
                </div>
                <div className={s.notFound__Text} >Возможно, запрашиваемая страница временно недоступна или удалена</div>
                <Button onClick={() => navigate('/')} variant="contained" color="primary">На главную</Button>
            </div>
        </Box>
    )
}