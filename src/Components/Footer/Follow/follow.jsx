import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Typography } from '@mui/material';
import { Telegram, Instagram, WhatsApp } from '@mui/icons-material';
import { Box } from '@mui/system';
import s from './follow.module.css'

function Follow(props) {
    const [value, setValue] = useState('resents')
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <Typography variant='h6'>Follow Us</Typography>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={handleChange}
                >
                    <BottomNavigationAction label="Telegram" icon={<Telegram />} />
                    <BottomNavigationAction label="Instagram" icon={<Instagram />} />
                    <BottomNavigationAction label="WhatsApp" icon={<WhatsApp />} />
                </BottomNavigation>
            </Box>
        </>
    );
}

export default Follow;
