import {
    CREATE_TASK_FAIL,
    CREATE_TASK_REQUEST,
    CREATE_TASK_SUCCESS, DONE_TASKS_FAIL, DONE_TASKS_REQUEST, DONE_TASKS_SUCCESS, EDIT_TASK_FAIL,
    EDIT_TASK_REQUEST, EDIT_TASK_SUCCESS, INITIAL_STATE,
    SET_TASK, SET_TASK_DONE
} from "../reducers/tasks/types";

export const setTaskActions = (tasks, isLoading) =>({
    type: SET_TASK,
    payload: {tasks, isLoading}
})

export const setTaskDoneActions = (doneTasks, isLoading) =>({
    type: SET_TASK_DONE,
    payload: {doneTasks, isLoading}
})


export const creatingTasksRequest = () =>({
    type: CREATE_TASK_REQUEST
})
export const creatingTasksSuccess = () =>({
    type: CREATE_TASK_SUCCESS
})
export const creatingTasksFail = () =>({
    type: CREATE_TASK_FAIL
})

export const editTaskRequest = () =>({
    type: EDIT_TASK_REQUEST,
})
export const editTaskSuccess = () =>({
    type: EDIT_TASK_SUCCESS
})
export const editTaskFail = () => ({
    type: EDIT_TASK_FAIL
})

export const doneTaskRequest = () =>({
    type: DONE_TASKS_REQUEST,
})
export const doneTaskSuccess = () =>({
    type: DONE_TASKS_SUCCESS
})
export const doneTaskFail = () => ({
    type: DONE_TASKS_FAIL
})
export const initialState = () =>({
    type: INITIAL_STATE
})