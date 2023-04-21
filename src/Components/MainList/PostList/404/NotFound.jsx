import React from 'react';
import {CardMedia} from "@mui/material";
import NotFoundImg from '../../../Img/404.png'
export default function NotFound() {
    return (
        <CardMedia image={NotFoundImg} sx={{ height: 640 }}/>
    );
}

