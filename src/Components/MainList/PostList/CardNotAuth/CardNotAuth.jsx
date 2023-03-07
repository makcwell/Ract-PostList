import React from 'react';
import { Typography, Grid } from '@mui/material';
import s from './cardNotAuth.module.css'
import FormDialog from '../../../Header/AuthCompotents/AuthModal/authModal';


export function CardNotAuth(props) {
    return (
        <div className={s.wrapper}>
            <Grid container
                spacing={2}
                flexDirection='column'
                alignItems='center'
            // justifyContent='space-between'
            >
                <Grid item>
                    <Typography
                        variant="h5"
                    >Привет! И добро пожаловать!
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography
                        variant="body1"
                    >
                        <p>Упс... но тебя нет в списках. Наверное тебя забыли пригласить на вечеринку</p>
                        <p>Давай это исправим! Нажимай на кнопку авторизоваться и присоединяйся!</p>
                        <p>У  тебя сразу появятся способности: смотреть и добавлять посты, ставить лайки и комментрировать</p>
                    </Typography>
                </Grid>

                <Grid item>
                    <FormDialog />
                </Grid>
            </Grid>

        </div>
    );
}
