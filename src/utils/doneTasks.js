import {baseURL, userAxios} from "../services/axiosSettings";
import {doneTaskFail, doneTaskSuccess, doneTaskRequest} from "../redux/actions/tasks-actions";

export const doneTask = async (uuid, data, dispatch) =>{
    dispatch(doneTaskRequest())
    return await userAxios.post(`${baseURL}/tasks/${uuid}/done/`, data).then((response)=>{
        dispatch(doneTaskSuccess())
    }).catch(error=>{
        dispatch(doneTaskFail())
    })
}


