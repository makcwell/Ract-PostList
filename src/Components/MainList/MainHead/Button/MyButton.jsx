import { Grid, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { Button } from '@mui/material';
import { LocalStorageContext } from '../../../../App';
import apiPosts from '../../../../API/PostsApi';


function MyButton(props) {
    const { token = '' } = useContext(LocalStorageContext);

    return (
        <div>
            <Grid container spacing={2} alignItems='center' justifyContent='space-between'>
                <Grid item>
                    <Typography variant="body1">Реактивно добавляй и удаляй посты это React - и точка!</Typography>
                </Grid>
                {token &&
                    <Grid item>
                        <Button variant="contained"
                            onClick={() => {
                                alert('Кликнул добавить пост');
                            }}
                        >Добавить пост</Button>

                        {/* проверка получения постов */}
                        {/* <Button variant="contained"
                            onClick={() => clickPost()}
                        >Все посты</Button> */}

                    </Grid>
                }




            </Grid>

        </div>
    );
}

// const clickPost = async () => {
//     await apiPosts.getAllPosts()
//         .then((dataPosts) => console.log('Запрос постов group-10>>', dataPosts))

// }

export default MyButton;
