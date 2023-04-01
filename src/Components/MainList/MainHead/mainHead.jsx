import React from 'react';
import { Typography } from '@mui/material';
import s from './mainHead.module.css';
import MyButton from './Button/MyButton';
import BasicBreadcrumbs from "./Breadcrumb/breadcrumb";


function MainHead({ handleRepeatReq }) {

    return (
        <div className={s.mainHeadWrapper} >
            <BasicBreadcrumbs/>
            <Typography variant="h5" component="h1" mb={2}>Добро пожаловать на мою страницу</Typography>
            <MyButton />
        </div>
    );
}

export default MainHead;
