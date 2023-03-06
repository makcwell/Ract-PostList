import React from 'react';
import {CardMedia, Typography, CardContent} from '@mui/material';
import {Stack} from '@mui/system';
import Chip from '@mui/material/Chip';


function MyCardContent(props) {

    let data = props.card.card
    return (
        <>
            <CardMedia
                // component="img"
                // height="194"
                sx={{height: 400, width: '100%'}}
                image={data.image}
                title={data.title}
                alt="Star wars"
            />
            <CardContent>
                <Typography mt={2}
                            variant="h5"
                            component="h5"
                > {data.title}
                </Typography>
                <Typography mt={2}
                            variant="body1">
                    {data.text}
                </Typography>
                {/* <Typography mt={2} variant="body2" component="div">
                    <span> меч </span>
                    <span> воин </span>
                </Typography> */}
                <Stack mt={2} direction="row" spacing={1}>
                    <Chip label="воин" size="small"/>
                    <Chip label="war stars" size="small"/>
                </Stack>


            </CardContent>
        </>
    );
}

export default MyCardContent;

