import React from 'react';
import MyCardHeader from './CardHeader/MyCardHeader';
import MyCardContent from './CardContent/MyCardContent';
import MyCardFooter from './CardFooter/MyCardFooter';
import { Card } from '@mui/material';


function MyCard(props) {

    return (

        <Card>
            <MyCardHeader card={props}/>
            <MyCardContent card={props} />
            <MyCardFooter card={props}/>
        </Card>

    );

}

export default MyCard;
