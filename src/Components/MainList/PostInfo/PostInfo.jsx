import React from 'react';
import {useParams} from "react-router-dom";
import {Box, Container, CardMedia, Typography, Avatar} from "@mui/material";

function PostInfo({cards}) {
    const params = useParams()
    const prodId = params.id
    const post = cards.find(item => item._id === prodId)

    console.log('POSTINFO>>>',post)
    return (
        <>
            <Container  maxWidth="lg" sx={{
                display: "flex",
                minheight: '600px',
                backgroundColor: 'white',
                borderRadius: '20px',
                padding: '24px',
            }}>
                <Box sx={{maxWidth: '576px'}}>

                    <CardMedia
                        component="img"
                        alt="green iguana"
                        // height="250"
                        image={post.image}
                        sx={{borderRadius: '15px'}}
                    />
                    <Typography variant={'h4'}>{post.title}</Typography>
                    <Typography>{post.text}</Typography>

                </Box>
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


            </Container>
        </>
    );
}

export default PostInfo;