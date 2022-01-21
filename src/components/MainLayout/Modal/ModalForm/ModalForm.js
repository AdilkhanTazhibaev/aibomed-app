import * as React from 'react';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import SubmitForm from "./SubmitForm";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import {useSelector} from "react-redux";
import Loading from "../../../../Loading/Loading";
import AlertMessage from "../../../Alert";

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



export default function ModalFrom({createOpen, handleClose}) {
    const {isCreated,isCreating, isFailed} = useSelector(state=>state.tasks)


    return (
        <div>
            <AlertMessage isCreating={isCreated} isFailed={isFailed}/>
            <Modal
                open={createOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container justifyContent="space-between">
                        <Typography variant="h4">Новая задача</Typography>

                        <IconButton onClick={()=>{
                            handleClose()
                        }} >
                            <CloseIcon/>
                        </IconButton>
                    </Grid>
                    <br/>
                    <hr/>
                    <br/>
                    {isCreating ? (<Loading/>):<SubmitForm/>}
                </Box>
            </Modal>
        </div>
    );
}