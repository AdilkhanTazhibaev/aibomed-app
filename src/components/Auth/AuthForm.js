import React from 'react';
import {Box, Button, FormGroup, Paper, Typography} from "@mui/material";
import Logo from '../../assets/images/logo-icon.svg'
import {useForm} from "react-hook-form";
import {Input} from "./Input/Input";
import {MainName} from "./MainName";
import {useDispatch, useSelector} from "react-redux";
import {loginActionsRequest} from "../../redux/actions/authActions/auth-actions";
function AuthForm({classes}) {
    const dispatch = useDispatch()
    const {register, handleSubmit, formState:{isValid, errors}} = useForm({
        mode: "onBlur"
    })
    const onSubmit = (authData) =>{
        dispatch(loginActionsRequest(authData))
    }

    return (
        <>
            <Paper className={classes.authForm}>
                <Box className={classes.boxForm}>
                    <img width={"35%"} src={Logo} alt={'logo'}/>
                    <MainName variant={"h5"} className={classes.typographyTitle}>Aibomed</MainName>
                    <Typography className={classes.typographySpan}>
                        Система операционно-учетного
                        <br/> управления клиникой
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormGroup   className={classes.formGroup}>
                                <Input {...register('email', {
                                    required: true,
                                })} type="email" name={"email"} label={"Email*"} error={errors.email ? true : false}/>
                                <Input {...register('password',{
                                    required: true,
                                })}  type="password" name={"password"} label={"Password*"}  error={errors.password ? true : false}/>
                                <Button type="submit" disabled={!isValid}  className={classes.btn}>Войти</Button>
                        </FormGroup>
                    </form>
                </Box>

            </Paper>
        </>
    );
}

export default AuthForm;