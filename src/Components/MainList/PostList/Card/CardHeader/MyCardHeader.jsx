import React from 'react';
import { CardHeader, Avatar } from '@mui/material';


function MyCardHeader(props) {
    return (
        <>
            <CardHeader
                avatar={
                    <Avatar
                        src="https://avatarko.ru/img/kartinka/33/Star_Wars_Darth_Vader_32632.jpg"
                        sx={{ width: 56, height: 56 }}
                    />
                }
                title="Little Warrior"
                subheader="Crazy monkey"

            />
        </>
    );
}

export default MyCardHeader;
