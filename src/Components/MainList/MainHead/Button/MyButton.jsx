import { Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { Button } from '@mui/material';
import { PostAddForm } from '../PostAddForm/postAddForm';


function MyButton(props) {
    const [openDialog, setOpenDialog] = useState(false);

    const handleClick = () => {
        setOpenDialog(!openDialog);
    };
    return (
        <div>
            <Grid container spacing={2} alignItems='center' justifyContent='space-between'>
                <Grid item>
                    <Typography variant="body1">Реактивно добавляй и удаляй посты это React - и точка!</Typography>
                </Grid>
                <Grid item>
                    <Button variant="contained"
                        onClick={handleClick}
                    >Добавить пост</Button>
                    <PostAddForm openDialog={openDialog} onClose={handleClick} onClick={handleClick} />
                </Grid>
            </Grid>
        </div >
    );
}

export default MyButton;
