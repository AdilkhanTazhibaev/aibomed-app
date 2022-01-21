import React from 'react';
import TextField from '@mui/material/TextField';
import {useStyles} from "./styles";
import DateFieldHoc from "./DateFieldHOC/DateFieldHOC";
import {baseURL, userAxios} from "../../../../services/axiosSettings";
import {useQuery} from "react-query";
import {setTaskActions, setTaskDoneActions} from "../../../../redux/actions/tasks-actions";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "@mui/material";

const useQueryDone = () => {
    return useQuery()
}


function DataField() {
    const dispatch = useDispatch()
    const {paginationLimit, paginationOffset} = useSelector(state=>state.layout)
    const [createdAtAfter, setCreatedAtAfter] = React.useState('');
    const [createdAtBefore, setCreatedAtBefore] = React.useState('')
    const [name, setName] = React.useState('')
    const classes = useStyles()


    const {data, isLoading} = useQuery(['tasks', name, createdAtAfter, createdAtBefore,paginationOffset, paginationLimit], ()=>{
        return userAxios.get(`${baseURL}/tasks/?search=${name}&created_at_after=${createdAtAfter}&created_at_before=${createdAtBefore}&limit=${paginationLimit}&offset=${paginationOffset}`)
    })
    dispatch(setTaskActions(data?.data, isLoading))


    const dataDone = useQuery(['done', createdAtAfter, createdAtBefore,paginationOffset, paginationLimit], ()=>{
        return userAxios.get(`${baseURL}/tasks/?status=DONE&created_at_after=${createdAtAfter}&created_at_before=${createdAtBefore}&limit=${paginationLimit}&offset=${paginationOffset}`)
    })
    dispatch(setTaskDoneActions(dataDone?.data?.data, dataDone?.isLoading))


    const clearState = () =>{
        setCreatedAtAfter('')
        setCreatedAtBefore('')
        setName('')

    }

    return (
        <>
            <TextField  style={{padding: 0}} value={name} onChange={(e)=>{
                setName(e.target.value);
            }} className={classes.dateField} name="name" placeholder={"Поиск по наименование"}/>
            <DateFieldHoc>
                <div style={{display: 'flex', gap: 5 }}>
                    <TextField
                        className={classes.dateField}
                        id="datetime-local"
                        type="datetime-local"
                        value={createdAtAfter}
                        sx={{ width: 250 }}
                        onChange={(e)=>{
                            setCreatedAtAfter(e.target.value)
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}/>
                    <TextField
                        className={classes.dateField}
                        onChange={(e)=>{

                            setCreatedAtBefore(e.target.value)
                        }}
                        name="plan_end_at"
                        value={createdAtBefore}
                        id="datetime-local"
                        type="datetime-local"
                        sx={{ width: 250 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>

            </DateFieldHoc>
            <Button onClick={clearState} style={{ padding:'0 15px'}} variant="outlined">Сбросить</Button>

        </>
    );
}

export default DataField;



