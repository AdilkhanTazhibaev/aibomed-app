import React from 'react';
import MainLayout from "../../components/MainLayout/MainLayout";
import Routes404 from "../../Routes/Routes404";
import AuthPage from "../AuthPage/AuthPage";
import RequireAuth from "../../Routes/ProtectedRoute";
import {Route} from "react-router-dom";
import HomePage from "./HomePage";

function TaskPage() {
    return (
        <>
            <Routes404>

                <Route
                    path="/*"
                    element={
                        <RequireAuth>
                            <HomePage/>
                         </RequireAuth>
                    }
                />
                <Route
                    path="/tasks"
                    element={
                        <RequireAuth>
                            <MainLayout/>
                        </RequireAuth>
                    }
                />
                <Route path="/login" element={<AuthPage/>}/>
            </Routes404>
        </>
    );
}

export default TaskPage;