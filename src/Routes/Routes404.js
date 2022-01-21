import {Route, Routes, useNavigate} from "react-router-dom";
import {useEffect} from "react";

function NotFoundPageHistoryPush() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/notfoundpage");
    },);
    return null;
}


function Routes404({children}) {
    return (
        <Routes>
            {children}
            <Route path={'*'} element={<NotFoundPageHistoryPush/>}/>
        </Routes>


    );
}
export default Routes404;