import { Grid } from '@mui/material';
import React from 'react';
import MyCard from './Card/myCard';
import { useEffect, useState } from 'react';
import apiPosts from '../../../API/PostsApi';


function PostList(props) {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        apiPosts.getAllPosts()
            .then((dataPosts) => {
                setCards(dataPosts)
            })

    }, [])
    console.log('setState cards >>', cards)


    return (
        <Grid container spacing={{ xs: 2, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {cards.map((card, key) => (

                <Grid item key={key} xs={12} sm={4} md={4}>
                    <MyCard card={card} />
                </Grid>


            ))}
        </Grid>
    );
}

export default PostList;
