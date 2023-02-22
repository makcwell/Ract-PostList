import React, {useContext, useEffect, useState} from 'react';
import UserMenu from "../UserMenu/userMenu";
import FormDialog from "../AuthModal/authModal";
import {LocalStorageContext} from "../../../../App";

function RenderUserMenu(props) {
    const { token = '' } = useContext(LocalStorageContext)


    console.log('token>>>',token)
    if (token) {

        return (
            <>
                <UserMenu/>
            </>
        )
    }return(
        <>
            <FormDialog/>
        </>
    )


}


export default RenderUserMenu;