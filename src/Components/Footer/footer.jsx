import React from 'react';
import { Typography, Container } from '@mui/material';
import Follow from './Follow/follow';
import Logo from '../Header/Logo/logo';
import s from './footer.module.css'
function Footer(props) {
    return (
        <>
            <Container sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Logo />
                <Follow />
            </Container>
        </>
    );
}

export default Footer;
