import {SET_USER_TOKEN_SUCCESS, USER_TOKEN_FIAL} from "./types";


const initialState = {
    accessToken: null,
    refreshToken: null,
    isFailed: false,
    errorMessage: null,
    isAuthenticated: false,

}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_TOKEN_SUCCESS:
            const {access, refresh} = action.payload
            localStorage.setItem('accessToken', access)
            localStorage.setItem('refreshToken', refresh)
            localStorage.setItem('isAuthenticated', true)
            return {
            ...state,
                accessToken: access,
                refreshToken: refresh,
                isFailed: false,
                errorMessage: null,
                isAuthenticated: true

        }

        case USER_TOKEN_FIAL:
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            const errorMessage = action?.payload?.errorMessage
            return {
                accessToken: null,
                refreshToken: null,
                isFailed: false,
                errorMessage: errorMessage,
                isAuthenticated: false
            }

        default: return state
    }
}

export default reducer