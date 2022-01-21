import {
    DISABLE_EDIT_BUTTON,
    ENABLE_EDIT_BUTTON,
    SET_EDIT_BUTTON,
    SET_PAGE_LIMIT,
    SET_PAGE_OFFSET,
    SET_ROUTE_BUTTON
} from "./types";

const {OPEN_MODAL, CLOSE_MODAL} = require("./types");
const initialState = {
    open: false,
    uuidTask: null,
    paginationLimit: 0,
    paginationOffset: 0,
    enabledBtn: false,
    pathRoute: ''
}

const reducer = (state=initialState, action) =>{
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                open: true,
                uuidTask: action.payload
            }
        case CLOSE_MODAL:
            return {
                ...state,
                open: false
            }
        case SET_PAGE_LIMIT:
            return {
                ...state,
                paginationLimit: action.payload
            }
        case SET_PAGE_OFFSET:
            return {
                ...state,
                paginationOffset: action.payload
            }
        case ENABLE_EDIT_BUTTON:
            return {
                ...state,
                enabledBtn: true
            }
        case DISABLE_EDIT_BUTTON:
            return {
                ...state,
                enabledBtn: false
            }
        case SET_ROUTE_BUTTON:
            return {
                ...state,
                pathRoute: action.payload
            }

        default: return state
    }
}
export default reducer