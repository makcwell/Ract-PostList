import { Grid } from '@mui/material';
import MyCard from './Card/myCard';




export function PostList({ cards = [] }) {

    return (
        <Grid container spacing={{ xs: 2, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

            {cards?.map((card, key) => (

                <Grid item key={key} xs={12} sm={4} md={4}>
                    <MyCard card={card} />
                </Grid>


            ))}
        </Grid>
    );
}
