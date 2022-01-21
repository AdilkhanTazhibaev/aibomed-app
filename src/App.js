import {Route} from 'react-router-dom'
import './App.css'
import {QueryClient, QueryClientProvider} from "react-query";

import TaskPage from "./pages/HomePage/TaskPage";
import RequireAuth from "./Routes/ProtectedRoute";
import Routes404 from "./Routes/Routes404";
function App() {


    const queryClient = new QueryClient()

    return (
    <div className="App">
        <QueryClientProvider client={queryClient}>
            <Routes404>
                <Route path={'/*'} element={<TaskPage/>}/>
            </Routes404>
        </QueryClientProvider>
    </div>

  );
}

export default App;
