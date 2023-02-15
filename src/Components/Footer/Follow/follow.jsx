import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Typography, Grid } from '@mui/material';
import { Telegram, Instagram, WhatsApp } from '@mui/icons-material';
import '@fontsource/babylonica';
import { Box } from '@mui/system';

function Follow(props) {
    const [value, setValue] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <>
            <Box>
                <Grid
                    direction="column"
                    alignItems="center"
                    alignContent="center"
                    container spacing={1}>
                    <Grid item xs={6}>
                        <Typography sx={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            fontFamily: 'Babylonica',
                            pt: 2
                        }} variant='h6'
                        >Follow Us</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <BottomNavigation
                            showLabels
                            value={value}
                            onChange={handleChange}
                        >
                            <BottomNavigationAction label="Telegram" icon={<Telegram />} />
                            <BottomNavigationAction label="Instagram" icon={<Instagram />} />
                            <BottomNavigationAction label="WhatsApp" icon={<WhatsApp />} />
                        </BottomNavigation>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Follow;
