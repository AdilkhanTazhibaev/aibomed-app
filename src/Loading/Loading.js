import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from "@mui/material/Typography";

export default function Loading() {
    return (
        <Box sx={{ width: '100%', textAlign: 'center'}}>

            <Typography variant={'h5'} >Загрузка</Typography>
            <br/>
            <LinearProgress />
        </Box>
    );
}