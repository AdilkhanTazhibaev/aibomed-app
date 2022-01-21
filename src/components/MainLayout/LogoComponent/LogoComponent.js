import React from 'react';
import {Grid} from "@mui/material";
import Logo from '../../../assets/images/logo-icon.svg'
import {MainName} from "../../Auth/MainName";
function LogoComponent() {
    return (
        <>
            <Grid container alignItems={'center'}>
                <img src={Logo} alt={'logoMain'}/>

                <MainName style={{ fontSize: "15px", marginLeft: '10px' }}> aibomed</MainName>
            </Grid>
        </>
    );
}

export default LogoComponent;