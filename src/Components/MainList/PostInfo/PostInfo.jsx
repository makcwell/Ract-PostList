import React from 'react';
import {useParams} from "react-router-dom";
import {Box, Container, CardMedia, Typography, Avatar, Grid} from "@mui/material";

function PostInfo({cards}) {
    const params = useParams()
    const prodId = params.id
    const post = cards.find(item => item._id === prodId)

    console.log('POSTINFO>>>',post)
    return (
        <>
            <Container  fixed sx={{
                display: "flex",
                minHeight: '600px',
                backgroundColor: 'white',
                borderRadius: '20px',
                padding: '24px',
            }}>

                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <CardMedia
                            component="img"
                            alt="foto"
                            image={post.image}
                            sx={{borderRadius: '15px'}}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant={'h4'}>{post.title}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>{post.text}</Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={4}>
                    <Box sx={{maxWidth: '576px'}}>

                        <Box sx={{display: "flex", alignItems: 'center', justifyContent: 'space-around', width: '576px'}}>
                            <Box>
                                <Typography>Автор: {post.author.name}</Typography>
                                <br/>
                                <Typography>Прфессия: {post.author.about}</Typography>
                            </Box>
                            <Avatar src={post.author.avatar} sx={{width: 56, height: 56}} alt="Remy Sharp"/>


                        </Box>

                    </Box>
                </Grid>


            </Container>
        </>
    );
}

export default PostInfo;