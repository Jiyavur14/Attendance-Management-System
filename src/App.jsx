import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Login/Signup.jsx";
import {Routes,Route,Navigate} from 'react-router-dom';
import Forgotpassword from "./pages/Login/Forgotpassword.jsx";

function App(){
    return(
        <div>

            <Routes>

                <Route path="/" element={<Navigate to="/login" replace/>}/>

                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/forgot-password" element={<Forgotpassword/>}/>
            </Routes>
        
        </div>
    )
}


export default App;