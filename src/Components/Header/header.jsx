import React from 'react';
import s from './header.module.css'
import Logo from "./Logo/logo";
import CurrentUser from "./CurrentUser/currentUser";


function Header(props) {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <Logo/>
                <CurrentUser/>
            </div>
        </header>
    );
}

export default Header;