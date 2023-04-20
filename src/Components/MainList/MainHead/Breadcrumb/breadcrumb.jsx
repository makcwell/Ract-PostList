import React from 'react';
import {Breadcrumbs} from "@mui/material";
import {Link} from "react-router-dom";


export default function BasicBreadcrumbs() {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link to={'/'}>Все посты</Link>
            <Link to={'/mypostlist'}>Мои посты</Link>
        </Breadcrumbs>
    )
}