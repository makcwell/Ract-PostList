import React, { useContext } from 'react';
import UserMenu from "../UserMenu/userMenu";
import FormDialog from "../AuthModal/authModal";
import { LocalStorageContext } from "../../../../App";
import RegistrationForm from '../AuthModal/regModal';

function RenderUserMenu(props) {
    const { token = '' } = useContext(LocalStorageContext)


    console.log('token>>>', token)
    if (token) {

        return (
            <>
                <UserMenu />
            </>
        )
    } return (
        <>
            <RegistrationForm />
            <FormDialog />
        </>
    )


}


export default RenderUserMenu;