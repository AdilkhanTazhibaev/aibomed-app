import {
    CLOSE_MODAL,
    DISABLE_EDIT_BUTTON,
    ENABLE_EDIT_BUTTON,
    OPEN_MODAL,
    SET_PAGE_LIMIT,
    SET_PAGE_OFFSET, SET_ROUTE_BUTTON
} from "../reducers/layout/types";

export const openModal = (uuid) =>({
    type: OPEN_MODAL,
    payload: uuid
})
export const closeModal = () =>({
    type: CLOSE_MODAL
})

export const setPageLimit = (limit)=>({
    type: SET_PAGE_LIMIT, payload: limit
})
export const setPageOffset = (offset)=>({
    type: SET_PAGE_OFFSET, payload: offset
})

export const setEnabledBtn = ()=>({
    type: ENABLE_EDIT_BUTTON,
})
export const setDisabledBtn = ()=>({
    type: DISABLE_EDIT_BUTTON,
})

export const setRoutePath = (path)=>({
    type: SET_ROUTE_BUTTON,
    payload: path
})