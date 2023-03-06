import {Grid} from '@mui/material';
import React, {useEffect, useState} from 'react';
import MyCard from './Card/myCard';
import {getAllPosts} from '../../../API/PostsApi'

// const cards = [1, 2, 3, 4, 5, 6, 7]

function PostList(props) {
    const [cards, setCards] = useState([])

    useEffect(() => {
            let cardData = async () => {
                let data = await getAllPosts()
                setCards(data)
            }
            cardData()
        },[]
    )


    return (
        <Grid container spacing={{xs: 2, sm: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
            {cards.map((item) =>
                <Grid  xs={12} sm={4} md={4}>
                    <MyCard key={item.id} card={item}  />
                </Grid>
            )}
        </Grid>
    );
}




export default PostList;
