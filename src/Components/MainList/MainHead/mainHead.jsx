import React from 'react';
import {Typography} from '@mui/material';
import Box from '@mui/material/Box'
import MyButton from './Button/MyButton';


function MainHead(props) {
    return (
        <Box
        sx={{
            padding: 4,
            backgroundColor: '#fff',
            marginBottom: 4,
            borderRadius: 2,

        }}

        >

            {/* сюда добавить Breadcrumb */}
            <Typography variant="h5" component="h1" mb={2}>Добро пожаловать на мою страницу</Typography>
            <MyButton/>

        </Box>
    );
}

export default MainHead;
