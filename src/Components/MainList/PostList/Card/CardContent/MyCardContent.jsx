import React from 'react';
import { CardMedia, Typography, CardContent } from '@mui/material';
import { Stack } from '@mui/system';
import Chip from '@mui/material/Chip';
import s from './MyCardContent.module.css';


function MyCardContent(props) {

    const handleClick = () => {
        alert('You clicked the Chip.')
    }

    return (
        <>
            <CardMedia className={s.pointer}
                // component="img"
                // height="194"
                sx={{ height: 400, width: '100%' }}
                image="https://mobimg.b-cdn.net/v3/fetch/42/42a5eee21662a1a116ce8173d0dd9d2b.jpeg"
                title="The Lone Warrior"
                alt="Star wars"
            />
            <CardContent className={s.pointer}>
                <Typography mt={2}
                    variant="h5"
                    component="h5"
                > Зачем ему два меча
                </Typography>
                <Typography mt={2}
                    variant="body1">
                    Световой меч — визитная карточка «Звёздных войн». Элегантное оружие цивилизованной эпохи — в отличие от мечей-бензопил из Warhammer 40,000, превращающих поле боя в космический мясокомбинат.
                </Typography>
                {/* <Typography mt={2} variant="body2" component="div">
                    <span> меч </span>
                    <span> воин </span>
                </Typography> */}
                <Stack mt={2} direction="row" spacing={1}>
                    <Chip label="воин" size="small" onClick={handleClick} />
                    <Chip label="war stars" size="small" onClick={handleClick} />
                </Stack>


            </CardContent>
        </>
    );
}

export default MyCardContent;

