import {
    CREATE_TASK_FAIL, CREATE_TASK_FAIL_DONE,
    CREATE_TASK_REQUEST,
    CREATE_TASK_REQUEST_DONE,
    CREATE_TASK_SUCCESS,
    CREATE_TASK_SUCCESS_DONE,
    DONE_TASKS_FAIL,
    DONE_TASKS_REQUEST,
    DONE_TASKS_SUCCESS,
    EDIT_TASK_FAIL,
    EDIT_TASK_REQUEST,
    EDIT_TASK_SUCCESS,
    INITIAL_STATE,
    SET_TASK,
    SET_TASK_DONE
} from "./types";


const initialState = {
    tasks: [],
    doneTask: [],
    isLoading: false,
    isCreating: false,
    isCreated: true,
    isFailed: false,
    errorMessage: null,
    isEditing: false,
    isEdited: false,
    isFailedEdit:false,
    isDoneLoading: false,
    isDoneLoaded: false,
    isFailedDone: false
}


const reducer = (state= initialState, action)=>{
    switch (action.type) {
        case SET_TASK:
            return {
                ...state,
                tasks: action.payload.tasks,
                isLoading: action.payload.isLoading
            }
        case CREATE_TASK_REQUEST:
        return {
            ...state,
            isCreating: true,
            isCreated: false,
            isFailed: false,
        }
        case CREATE_TASK_SUCCESS:
            return {
                ...state,
                isCreating: false,
                isCreated: true,
                isFailed: false
            }
        case CREATE_TASK_FAIL:
            return {
                ...state,
                isCreating: false,
                isCreated: false,
                isFailed: true
            }
        case EDIT_TASK_REQUEST:{
            return {
                ...state,
                isEdited: false,
                isEditing: true,
                isFailedEdit: false
            }
        }
        case EDIT_TASK_SUCCESS:
            return {
                ...state,
                isEdited: true,
                isEditing: false,
                isFailedEdit: false
            }
        case EDIT_TASK_FAIL:
            return {
                ...state,
                isEdited: false,
                isEditing: false,
                isFailedEdit: true
            }
        case DONE_TASKS_REQUEST:
            return {
                ...state,
                isDoneLoading: true,
                isDoneLoaded: false,
                isFailedDone: false
            }
        case DONE_TASKS_SUCCESS:
            return {
                ...state,
                isDoneLoading: false,
                isDoneLoaded: true,
                isFailedDone: false
            }

            case DONE_TASKS_FAIL:
            return {
                ...state,
                isDoneLoading: false,
                isDoneLoaded: false,
                isFailedDone: true
            }

        case SET_TASK_DONE:{
            return {
                ...state,
                ...state,
                doneTask: action.payload.doneTasks,
                isLoading: action.payload.isLoading
            }
        }


        case INITIAL_STATE:
            return {
                ...state,
                isCreating: false,
                isCreated: false,
                isFailed: false,
                errorMessage: null,
                isEditing: false,
                isEdited: false,
                isFailedEdit:false,
                isDoneLoading: false,
                isDoneLoaded: false,
                isFailedDone: false
            }

        default: return state
    }
}

export default reducer