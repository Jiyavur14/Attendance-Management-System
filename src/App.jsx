import {Routes,Route,Navigate} from 'react-router-dom';
import Dashboard from "./pages/Dashboard.jsx"
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Login/Signup.jsx";
import Forgotpassword from "./pages/Login/Forgotpassword.jsx";



function App(){
    return(
        <div>

            <Routes>

                <Route path="/" element={<Navigate to="/login" replace/>}/>
 
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/forgot-password" element={<Forgotpassword/>}/>
            </Routes>
        
        </div>
    )
}


export default App;