import React, { useState } from 'react';
import { Chip, Avatar, Grid, Typography } from '@mui/material';
import '@fontsource/babylonica';
import { Box } from '@mui/system';
import p from '../Creators/PussInBots.jpeg'

function Creators(props) {
    return (
        <>
            <Box>
                <Grid
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    container spacing={1} sx={{ pt: 2 }}>
                    <Grid item xs={12} sx={{
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
                    <Grid item xs={3}>
                        <Chip
                            avatar={<Avatar src={p} />}
                            component="a"
                            label="Terrein"
                            variant="outlined"
                            href="https://github.com/Terrein"
                            clickable
                            sx={{ width: '100%' }}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Chip
                            avatar={<Avatar src={p} />}
                            component="a"
                            label="makcwell"
                            variant="outlined"
                            href="https://github.com/makcwell"
                            clickable
                            sx={{ width: '100%' }}
                        />
                    </Grid>
                    <Grid item xs={3} >
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
                    <Grid item xs={3}>
                        <Chip
                            avatar={<Avatar src={p} />}
                            component="a"
                            label="KratAN-itOfficial"
                            variant="outlined"
                            href="https://github.com/KratAN-itOfficial"
                            clickable
                            sx={{ width: '100%' }} s
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Creators;
