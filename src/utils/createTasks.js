import {baseURL, userAxios} from "../services/axiosSettings";
import {creatingTasksFail, creatingTasksRequest, creatingTasksSuccess} from "../redux/actions/tasks-actions";

export const createTask = (data, dispatch) =>{
    dispatch(creatingTasksRequest())
    return userAxios.post(`${baseURL}/tasks/`, data).then((response)=>{
        dispatch(creatingTasksSuccess())
    }).catch(error=>{
        dispatch(creatingTasksFail())
    })
}

