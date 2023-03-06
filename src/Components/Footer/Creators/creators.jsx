import React, { useState } from 'react';
import { Chip, Avatar, Grid, Typography, Box } from '@mui/material';
import '@fontsource/babylonica';
import p from '../Creators/PussInBots.jpeg'


function Creators(props) {
    return (
        <>
            <Box>
                <Grid
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    container spacing={{ xs: 1, md: 2 }} sx={{ pt: 2 }}>
                    <Grid item xs={12} md={12} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <Typography
                            sx={{
                                fontSize: 35,
                                fontWeight: 'bold',
                                fontFamily: 'Babylonica',
                                pb: 1
                            }} variant='h6'>
                            Creators team
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Chip
                            avatar={<Avatar src={'https://avatars.githubusercontent.com/u/71286606?s=400&u=e43bf01745d3e4e715effbe97c0b6a5d104e4408&v=4'} sx={{ width: "30px" }} />}
                            component="a"
                            label="Terrein"
                            variant="outlined"
                            href="https://github.com/Terrein"
                            clickable
                            sx={{ width: '100%' }}
                        />
                    </Grid>
                    <Grid item xs={6} md={3} >
                        <Chip
                            avatar={<Avatar src={'https://avatars.githubusercontent.com/u/106441725?v=4'} />}
                            component="a"
                            label="makcwell"
                            variant="outlined"
                            href="https://github.com/makcwell"
                            clickable
                            sx={{ width: '100%' }}
                        />
                    </Grid>
                    <Grid item xs={6} md={3} >
                        <Chip
                            avatar={<Avatar src={p} />}
                            component="a"
                            label="madDeveloper"
                            variant="outlined"
                            href="https://github.com/aleksei-zhuikov"
                            clickable
                            sx={{ width: '100%' }}
                        />
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Chip
                            avatar={<Avatar src={p} />}
                            component="a"
                            label="KratAN-itOfficial"
                            variant="outlined"
                            href="https://github.com/KratAN-itOfficial"
                            clickable
                            sx={{ width: '100%' }}
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Creators;
