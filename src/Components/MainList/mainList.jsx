// import { Grid } from '@mui/material';
import React from 'react';
import s from './mainList.module.css'
function MainList(props) {
    return (
        <div className={s.mainList}>
            {props.children}
        </div>



    );
}

export default MainList;

