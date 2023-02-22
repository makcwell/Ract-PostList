import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../Img/logo.svg'
import '@fontsource/babylonica';
import FormDialog from "./AuthCompotents/AuthModal/authModal";


function ResponsiveAppBar() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleLogOut = () => {
        localStorage.clear()
    }


    return (
        <AppBar position="static" sx={{ backgroundColor: '#fff' }}>
            <Container>
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex' }}>
                        {/*Логотип*/}
                        <img src={Logo} style={{ width: '32px' }} alt={'Ooops'} />

                        {/*Название*/}
                        <Typography
                            variant="h3"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                ml: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'babylonica',
                                fontWeight: 700,
                                letterSpacing: '.4rem',
                                color: '#1890ff',
                                textDecoration: 'none',
                            }}
                        >
                            React posts
                        </Typography>
                    </Box>

                    {/*// Аватар + меню пользователя + Форма авторизации*/}
                    <Box sx={{ display: 'flex' }}>

                        {localStorage.token || localStorage.email || localStorage.password
                            ?
                            <Box>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp"
                                            src="https://nationaltoday.com/wp-content/uploads/2020/05/Yoda.jpg" />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {/*// MenuItem потом вынести в отдельную компоненту!*/}

                                    <MenuItem key={'Профиль'} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{'Профиль'}</Typography>
                                    </MenuItem>
                                    <MenuItem key={'Добавить пост'} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{'Добавить пост'}</Typography>
                                    </MenuItem>
                                    <MenuItem key={'Выйти'} onClick={handleLogOut}>
                                        <Typography textAlign="center">{'Выйти'}</Typography>
                                    </MenuItem>
                                </Menu>
                            </Box>
                            :
                            <Box>
                                <FormDialog />
                            </Box>
                        }

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

    )
}

export default ResponsiveAppBar;