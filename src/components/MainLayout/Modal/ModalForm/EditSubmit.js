import React, {useState} from 'react';
import {Button, FormGroup, Grid} from "@mui/material";
import {Input} from "../../../Auth/Input/Input";
import {useForm} from "react-hook-form";
import {useStyles} from "../../../../pages/AuthPage/styles";
import DateFieldHoc from "../../Content/DataPicker/DateFieldHOC/DateFieldHOC";
import TextField from "@mui/material/TextField";
import {useDispatch, useSelector} from "react-redux";
import {editTask} from "../../../../utils/editTasks";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Loading from "../../../../Loading/Loading";
import {closeModal} from "../../../../redux/actions/layuout-action";
import {useQuery} from "react-query";
import {baseURL, userAxios} from "../../../../services/axiosSettings";
import MenuForm from "../MenuForm";
import {doneTask} from "../../../../utils/doneTasks";
import AlertMessage from "../../../Alert";
import LockIcon from '@mui/icons-material/Lock';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "90%",
    height: "90%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function EditSubmitForm({ classes,setError, register, handleSubmit, onSubmit, handleChange, formState, editData, handleDoneSubmit, isEditing, isEdited,isFailedEdit, isDoneLoading, isDoneLoaded, isFailedDone} ) {

    const [value, setValue] = useState({
        name: editData.data.name,
        text: editData.data.text,
        plan_end_at: editData.data.plan_end_at
    })

    const {enabledBtn} = useSelector(state=> state.layout)



    return(
        <>{isEditing ? (<Loading/> )  : <form onSubmit={handleSubmit(onSubmit)}>
            <AlertMessage isFailed={formState.errors.name ? true: false } isCreated={isEdited} isFailedEdit={isFailedEdit} isDoneLoading={isDoneLoading} isDoneLoaded={isDoneLoaded} isFailedDone={isFailedDone}/>
            <FormGroup className={classes.formGroup}>
            <Input className={classes.modalTextField} {...register('name', {
            required: 'Не правильно введенны данные',
        })} type="text" onChange={(e)=>{
            setValue({...value, [e.target.name]:e.target.value})
        }} name={"name"} value={value.name}
            InputProps={{readOnly: !enabledBtn, disableUnderline: true, endAdornment: !enabledBtn&&<LockIcon/>}} error={formState.errors.name ? true: false }  />
            <Input {...register('text',{
            required: 'Не правильно введенны данные',
        })}  type="text" name={"text"} onChange={(e)=>{
            setValue({...value, [e.target.name]:e.target.value})
        }} value={value.text}  error={formState.errors.text ? true: false }  className={classes.modalTextField}  id="filled-multiline-static"
            multiline
            InputProps={{readOnly: !enabledBtn, disableUnderline: true, endAdornment: !enabledBtn&&<LockIcon/>}}
            rows={4}/>
            <DateFieldHoc>
            <TextField
        {...register('plan_end_at', {
            required: true,
        })}
            onChange={(e)=>{
            setValue({...value, [e.target.name]: e.target.value})
        }}
            className={classes.dateField}
            onChange={handleChange}
            id="datetime-local"
            type="datetime-local"
            name="plan_end_at"
            defaultValue={new Date(editData?.data.plan_end_at)}
            className={classes.modalTextField}
            InputProps={{readOnly: !enabledBtn, disableUnderline: true,  endAdornment: !enabledBtn&&<LockIcon/>}}
            InputLabelProps={{
            shrink: true,
        }}
            />

            </DateFieldHoc>

            </FormGroup>
            <div style={{position: 'absolute', bottom:10, width: '90%'}}>
            <hr/>
            <div style={{display: 'flex', justifyContent:"space-between"}}>
            <div style={{ width: '90%'}}>
            <input {...register('assignee')}  type="hidden" value={"04d869f0-9b74-48e3-8021-4454396bc920"} name={"assignee"}/>
            <Button style={{ background: "#f1f1f1", width: '15%', marginTop: 5, marginRight: 10}} color="primary" type="submit" disabled={!enabledBtn}>Сохранить</Button>
            <Button style={{ background: "green", width: '15%', marginTop: 5, color: '#fff'}} onClick={handleDoneSubmit}  >Завершить</Button>
            </div>
            <MenuForm/>
            </div>

            </div>
            </form>
        }</>
      )
}


function EditForm() {

    const dispatch = useDispatch()
    const {open, uuidTask} = useSelector(state=>state.layout)
    const {isEdited,isEditing, isFailedEdit, isDoneLoading, isDoneLoaded, isFailedDone} = useSelector(state=>state.tasks)
    const classes = useStyles()

    const {register, handleSubmit, formState, setError} = useForm({
        mode: "onBlur"
    })
    const [value, setValue] = React.useState(null);
    const handleChange = (newValue) => {
        setValue(newValue);
    };
    const handleClose = () =>{
        dispatch(closeModal())
    }

    const {data, isLoading} = useQuery(['edit', uuidTask],  async ()=>{
        if(uuidTask){
            return  await userAxios.get(`${baseURL}/tasks/${uuidTask}`)
        }

    })

    const handleDoneSubmit = () => {
        doneTask(uuidTask, {
            status: 'DONE'
        },dispatch)
    }

    const onSubmit = (data) =>{
        editTask(uuidTask,data,dispatch)
    }
    return (
        <>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container justifyContent="space-between">
                        <Typography variant="h4">Редактировать</Typography>

                        <IconButton onClick={()=>{
                            handleClose()
                        }} >
                            <CloseIcon/>
                        </IconButton>
                    </Grid>
                    <br/>
                    <hr/>
                    <br/>
                    {isLoading ? (<Loading/>):<EditSubmitForm
                        isEdited={isEdited}
                        isEditing={isEditing}
                        setError={setError}
                        editData={data}
                        isFailedEdit={isFailedEdit}
                        isDoneLoading={isDoneLoading} isDoneLoaded={isDoneLoaded} isFailedDone={isFailedDone}
                        classes={classes} register={register}
                        handleDoneSubmit={handleDoneSubmit}
                        handleSubmit={handleSubmit} onSubmit={onSubmit} handleChange={handleChange} formState={formState}
                    />}
                </Box>
            </Modal>





        </>
    );
}

export default EditForm;