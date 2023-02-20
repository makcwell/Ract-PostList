import { Grid } from '@mui/material';
import React from 'react';
import MyCard from './Card/myCard';


<<<<<<< HEAD
const cards = [1, 2, 3, 4, 5]
=======
const cards = [1, 2, 3, 4, 5, 6, 7]
>>>>>>> maddev

function PostList(props) {
    return (
        <Grid container spacing={{ xs: 2, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {cards.map((card) => (

                <Grid item key={card} xs={12} sm={4} md={4}>
                    <MyCard />
                </Grid>

            ))}
        </Grid>
    );
}

export default PostList;
