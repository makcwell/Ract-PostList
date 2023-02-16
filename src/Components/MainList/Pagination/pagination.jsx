import React from 'react';
import { Stack, Pagination } from '@mui/material';

function ElementPagination(props) {
    return (
        <>
            <Stack spacing={2} sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: '25px',
                mb: '5px'
            }}>
                <Pagination count={10} variant="string" size='large' fontSize='20px' />
            </Stack>
        </>
    );
}

export default ElementPagination;
