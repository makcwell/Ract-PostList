import { Chip, Avatar, Grid, Typography, Box } from '@mui/material';
import '@fontsource/babylonica';


function Creators() {
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
                            avatar={<Avatar src={'https://avatars.githubusercontent.com/u/71286606?v=4'} sx={{ width: "30px" }} />}
                            component="a"
                            label="Эрнест Алиев"
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
                            label="Макс Алексеев"
                            variant="outlined"
                            href="https://github.com/makcwell"
                            clickable
                            sx={{ width: '100%' }}
                        />
                    </Grid>
                    <Grid item xs={6} md={3} >
                        <Chip
                            avatar={<Avatar src={'https://avatars.githubusercontent.com/u/80468263?v=4'} />}
                            component="a"
                            label="Алексей Жуйков"
                            variant="outlined"
                            href="https://github.com/aleksei-zhuikov"
                            clickable
                            sx={{ width: '100%' }}
                        />
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Chip
                            avatar={<Avatar src={'https://avatars.githubusercontent.com/u/115191188?v=4'} />}
                            component="a"
                            label="Анатолий Крат"
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
