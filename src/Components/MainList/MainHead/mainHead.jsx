import React from 'react';
import { Typography } from '@mui/material';
import s from './mainHead.module.css';
import MyButton from './Button/MyButton';


function MainHead({ handleRepeatReq }) {

    return (
        <div className={s.mainHeadWrapper} >
            {/* сюда добавить Breadcrumb */}
            <Typography variant="h5" component="h1" mb={2}>Добро пожаловать на мою страницу</Typography>
            <MyButton />
        </div>
    );
}

export default MainHead;
