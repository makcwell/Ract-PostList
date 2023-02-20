import React from 'react';
import { Typography, Container, Grid } from '@mui/material';
import Follow from './Follow/follow';
import Creators from './Creators/creators';

import s from './footer.module.css'
function Footer(props) {
    return (
        <>
            <Container sx={{ mb: '25px' }}>
                <Grid
                    direction="row"
                    alignItems="center"
                    container spacing={{ xs: 1, md: 2 }}>
                    <Grid item xs={12} md={6}>
                        <Creators />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Follow />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Footer;
