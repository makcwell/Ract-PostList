import { Children } from 'react';
import React from 'react';
import MyCardHeader from './CardHeader/MyCardHeader';
import MyCardContent from './CardContent/MyCardContent';
import MyCardFooter from './CardFooter/MyCardFooter';
import s from './myCard.module.css';
import { autocompleteClasses, Card, Grid } from '@mui/material';


function MyCard(props) {
    return (

        // <Grid item xs="12" sm="4" md="4">
        <Card className={s.card} >
            <MyCardHeader />
            <MyCardContent />
            <MyCardFooter />
        </Card>
        // {/* </Grid> */ }

    );

}

export default MyCard;
