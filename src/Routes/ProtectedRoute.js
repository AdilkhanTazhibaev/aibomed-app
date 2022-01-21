import React from 'react';
import {useSelector} from "react-redux";
import {Navigate} from 'react-router-dom'
function RequireAuth({ children }) {
    const isAuth = localStorage.getItem('isAuthenticated')

    return isAuth ? children : <Navigate to="/login" replace />;
}
export default RequireAuth;