import { Grid, Typography } from '@mui/material';
import { useState, useContext } from 'react';
import { Button } from '@mui/material';
import { PostAddForm } from '../PostAddForm/postAddForm';
import { LocalStorageContext } from "../../../../App";

function MyButton(props) {
    const [openDialog, setOpenDialog] = useState(false);
    const { token } = useContext(LocalStorageContext)
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
                    {token &&
                        <>
                            <Button variant="contained"
                                onClick={handleClick}
                            >Добавить пост</Button>
                            <PostAddForm openDialog={openDialog} onClose={handleClick} onClick={handleClick} />
                        </>}
                </Grid>
            </Grid>
        </div >
    );
}


export default MyButton;
