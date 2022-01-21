import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {makeStyles} from "@mui/styles";
import {initialState} from "../redux/actions/tasks-actions";
import {useDispatch} from "react-redux";

const clasess = makeStyles(()=>({
    paper:{
        '& .MuiPaper-root ':{
            position: 'absolute !important',
            marginLeft: 'auto !important',
            marginRight: 'auto !important',
            left: '0 !important',
            right: '0 !important',
            textAlign: 'center !important',
            zIndex: '9999 !important',
            top: '-120px !important',
            width: '50%'
        }
    }

}))

export default function AlertMessage({isCreated, isFailed, isEdited,isFailedEdit, isDoneLoaded, isFailedDone}) {
    const dispatch = useDispatch()
    setTimeout(()=>{
        if(isCreated || isEdited || isDoneLoaded){
            dispatch(initialState())
        }

    }, 5000)


    return (
        <Stack className={clasess} spacing={2}>
            {isEdited && <Alert severity={"success"}>Задача успешна изменена</Alert>}
            {isDoneLoaded && <Alert severity={"success"}>Задача успешна завершена</Alert>}
            {isCreated &&<Alert severity={"success"}>Задача успешна завершена</Alert>}
            {isFailed || isFailedEdit ||isFailedDone ? <Alert severity={"error"}>Что-то пошло не так</Alert>: null}

        </Stack>
    );
}