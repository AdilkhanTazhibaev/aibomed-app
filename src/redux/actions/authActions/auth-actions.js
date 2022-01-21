import {SET_USER_TOKEN_SUCCESS, USER_TOKEN_FIAL} from "../../reducers/auth/types";
import {userAxios} from "../../../services/axiosSettings";




export const loginActionsRequest = (form) => (dispatch) =>{
    userAxios.post('/users/token/', form).then((response)=>{
        dispatch({type:SET_USER_TOKEN_SUCCESS, payload:response.data})
    }).catch((error) =>{

        dispatch({type: USER_TOKEN_FIAL, payload:error.response})
    })

}

