import React from 'react';
import { CardHeader, Avatar } from '@mui/material';


function MyCardHeader(props) {
    let data = props.card.card

    return (
        <>
            <CardHeader
                avatar={
                    <Avatar
                        src={data.author.avatar}
                        sx={{ width: 56, height: 56 }}
                    />
                }
                title={data.title}
                subheader={data.author.name}

            />
        </>
    );
}

export default MyCardHeader;
