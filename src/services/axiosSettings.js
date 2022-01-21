import axios from "axios";
export const baseURL = process.env.REACT_APP_BACKEND_URL;

export const userAxios = axios.create({
    baseURL,
    headers: {
        Authorization: localStorage.getItem('accessToken')
            ? `Bearer ${localStorage.getItem('accessToken')}`
            : null,
        'Content-Type': 'application/json',
    },
})

userAxios.interceptors.response.use(
    (response) => {
        return response;
    },

    // async function (error) {
    //     if (
    //         error.response.data.code === 'token_not_valid' &&
    //         error.response.status === 401 &&
    //         error.response.statusText === 'Unauthorized'
    //     ) {
    //
    //     }
    // }

    )


