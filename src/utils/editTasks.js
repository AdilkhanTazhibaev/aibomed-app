import {baseURL, userAxios} from "../services/axiosSettings";
import {editTaskSuccess, editTaskRequest, editTaskFail} from "../redux/actions/tasks-actions";

export const editTask = (uuid,data, dispatch) =>{
    dispatch(editTaskRequest())
    return userAxios.put(`${baseURL}/tasks/${uuid}/`, data).then((response)=>{
        dispatch(editTaskSuccess())
    }).catch(error=>{
        dispatch(editTaskFail())
    })
}

export const editTaskGet = async (uuid) => {
    return await userAxios.get(`${baseURL}/tasks/${uuid}`)
}
