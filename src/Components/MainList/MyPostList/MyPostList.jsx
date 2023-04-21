import {Grid, Typography} from '@mui/material';
import MyCard from "../PostList/Card/myCard";
import {useContext, useEffect} from "react";
import {getAllPosts} from '../../../API/PostsApi'
import {LocalStorageContext} from "../../../App";


export function MyPostList() {

    const {userInfData, myPosts, setMyPosts} = useContext(LocalStorageContext)


    useEffect(() => {
        async function Posts() {
            const cards = await getAllPosts()
            const idSort = cards.filter((el) => el.author?._id === userInfData?._id)
            setMyPosts(idSort)
        }

        void Posts()
    }, [userInfData, setMyPosts])

    return (
        <Grid container spacing={{xs: 2, sm: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
            {!!myPosts.length ? myPosts.map((card, index) => (
                <Grid item key={index} xs={12} sm={4} md={4}>
                    <MyCard card={card}/>
                </Grid>
            )) : <Typography variant='h2'>У вас еще нет постов</Typography>}
        </Grid>
    );
}