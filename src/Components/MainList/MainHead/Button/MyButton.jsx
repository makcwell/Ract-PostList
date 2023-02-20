import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Button } from '@mui/material';

function MyButton(props) {
    return (
        <div>
            <Grid container spacing={2} alignItems='center' justifyContent='space-between'>
                <Grid item>
                    <Typography variant="body1">Реактивно добавляй и удаляй посты это React - и точка!</Typography>
                </Grid>
                <Grid item>
                    <Button variant="contained"
                        onClick={() => {
                            alert('Кликнул добавить пост');
                        }}
                    >Добавить пост</Button>
                </Grid>

            </Grid>

        </div>
    );
}

export default MyButton;
