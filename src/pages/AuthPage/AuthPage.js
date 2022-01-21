import React from 'react';
import AuthForm from "../../components/Auth/AuthForm";
import {useStyles} from "./styles";
import {Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {setRoutePath} from "../../redux/actions/layuout-action";
import Loading from "../../Loading/Loading";
function AuthPage() {
    const classes = useStyles()
    const {isAuthenticated, isLoading} = useSelector(state => state.auth);
    const isAuth = localStorage.getItem('isAuthenticated')
    const dispatch = useDispatch()
    if(isAuth){
        dispatch(setRoutePath('task'))
    }
    return (
        <>{
            !isAuth?
                <Grid className={classes.layout} container justifyContent={'center'} alignItems={"center"} height={"100vh"}>
                <Grid item> <AuthForm classes={classes}/></Grid>
            </Grid>: (
                <Navigate to="/tasks"/>
            )
        }



        </>
    );
}

export default AuthPage;