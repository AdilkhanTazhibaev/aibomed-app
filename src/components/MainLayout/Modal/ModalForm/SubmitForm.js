import React from 'react';
import {Button, FormGroup} from "@mui/material";
import {Input} from "../../../Auth/Input/Input";
import {useForm} from "react-hook-form";
import {useStyles} from "../../../../pages/AuthPage/styles";
import DateFieldHoc from "../../Content/DataPicker/DateFieldHOC/DateFieldHOC";
import TextField from "@mui/material/TextField";
import {createTask} from "../../../../utils/createTasks";
import {useDispatch, useSelector} from "react-redux";
import AlertMessage from "../../../Alert";
import Loading from "../../../../Loading/Loading";

function SubmitForm() {
    const {isCreated,isLoading, isFailed} = useSelector(state=>state.tasks)
    const classes = useStyles()
    const dispatch = useDispatch()
    const {register, handleSubmit, formState:{isValid}} = useForm({
        mode: "onBlur"
    })
    const [value, setValue] = React.useState(null);
    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const onSubmit = (data)=>{
        createTask(data,dispatch)
    }


    return (
        <>
            <AlertMessage isCreated={isCreated} isLoading={isLoading} isFailed={isFailed}/>
            {isLoading ? (<Loading/>):
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup className={classes.formGroup}>
                        <Input className={classes.modalTextField} {...register('name', {
                            required: true,
                        })} type="text" name={"name"} label={"Наименование"} fullWidth/>
                        <Input {...register('text',{
                            required: true,
                        })}  type="text" name={"text"} className={classes.modalTextField} label={"Описание"} id="filled-multiline-static"
                               multiline
                               fullWidth
                               rows={4}/>
                        <DateFieldHoc>
                            <TextField
                                {...register('plan_end_at',{
                                    required: true,
                                })}
                                fullWidth
                                className={classes.dateField}
                                onChange={handleChange}
                                id="datetime-local"
                                type="datetime-local"
                                defaultValue={value}
                                className={classes.modalTextField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                        </DateFieldHoc>

                    </FormGroup>

                    <div style={{position: 'absolute', bottom:10, width: '90%'}}>
                        <hr/>
                        <input {...register('assignee')}  type="hidden" value={"04d869f0-9b74-48e3-8021-4454396bc920"} name={"assignee"}/>
                        <Button style={{ background: "#f1f1f1", width: '20%', marginTop: 5}} color="primary" type="submit" disabled={!isValid}>Создать</Button>
                    </div>
                </form>}



        </>
    );
}

export default SubmitForm;