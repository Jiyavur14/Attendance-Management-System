import {useState} from 'react';
import Alert from "@mui/material/Alert";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {Link as RouterLink} from "react-router-dom";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import {useNavigate} from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import InputAdornment from "@mui/material/InputAdornment";

import '../../App.css';


const dummy_user = {email:"admin@gmail.com",
                      password:"12345678",
                      name:"peter",
                      role:"admin",}

function Login(){

  const navigate = useNavigate();
 
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");
  const [loading,setLoading] = useState(false);
  const [showpassword,setShowpassword] = useState(false);

  const handlesubmit = (e)=>{
    e.preventDefault();
    setError("")

    const cemail = email.trim();
    const cpassword = email.trim();

    if(!cemail || !cpassword){
      setError("Fill the Empty")
      return;
    }

    if(!cemail.includes("@")){
     setError("Please Enter valid email Address")
     return;
    }

    if(cpassword.length<8){
      setError("Enter atleast 8 Character");
      return;
    }


    setLoading(true);

    setTimeout(()=>{   
    if(cemail===dummy_user.email && cpassword===dummy_user.password){

    localStorage.setItem("users",JSON.stringify({
      name:dummy_user.name,
      email:dummy_user.email,
      password:dummy_user.password,
      role:dummy_user.role,
      token:"dummy_token_123",
    }))
     
    navigate("/dashboard");
   }else{
    setError("Invalid Username or Password");
    setLoading(false);
   }
    },1000)
 

  }

    return (
        <div className="main">
         <Paper elevation={4} square={false} sx={{width:"360px"}}>
           <Box sx={{margin:"25px"}}  className="inner-paper">
            <Typography variant="h5" sx={{fontWeight:"700",}}>Attendance Portal</Typography>
            <Typography variant="body2" sx={{color:"grey",mt:"4px"}}>sign in to simulate door access</Typography>
            <form onSubmit={handlesubmit}>
            <TextField label="Work Email"
                       value={email}
                       onChange={(e)=>{setEmail(e.target.value)}}
                       placeholder="name@company.com"
                       variant="outlined"
                       sx={{mt:"10px",'& input::placeholder':{fontSize:"12px"},'& .MuiInputLabel-root':{fontSize:"13px",fontWeight:"700"},'& .MuiInputLabel-root:not(.MuiInputLabel-shrink)':{top:"10%",}}}
                       size="small"
                       fullWidth />
                       
            <TextField label="Password"
                       value={password}
                       onChange={(e)=>setPassword(e.target.value)}
                       type ={showpassword ?"text":"password"}
                       placeholder={'\u2022'.repeat(8)}
                       size="small"
                       variant="outlined"
                       sx={{mt:"20px",'& input::placeholder':{fontSize:"12px"},'& .MuiInputLabel-root':{fontSize:"13px",fontWeight:"700"},'& .MuiInputLabel-root:not(.MuiInputLabel-shrink)':{top:"10%",}}}
                       fullWidth
                       slotProps={{input:{endAdornment:(
                        <InputAdornment position="end">
                        <Typography 
                         onClick={()=>setShowpassword(!showpassword)}
                         sx={{cursor:"pointer",
                              fontSize:"12px",
                              fontWeight:"600",
                              color:"#2a84f3",
                              userSelect:"none",
                              '&:hover':{color:"#216cc8"}
                         }}>
                        {showpassword ? "Show":"Hide"}
                        </Typography>
                        </InputAdornment>
                       )}}}/>

              
              {error && (<Alert severity="error" sx={{fontSize:"12px",bgcolor:"white",m:"0",color:"red"}}>
                {error}
              </Alert>)}
              <Box sx={{display:"flex",justifyContent:"flex-start",mt:"5"}}>
                <Link component={RouterLink} to="/forgot-password" underline="hover" sx={{fontSize:"0.875rem",fontWeight:"700",mt:"5px",color:"#2a84f3"}}>Forgot Password?</Link>
              </Box>
              <Button type="submit" variant="contained" fullWidth sx={{textTransform:"none",fontWeight:"600",mt:"15px",bgcolor:"#2a84f3",'&:hover':{bgcolor:"#216cc8"}}}>
                {loading ? <CircularProgress size={22} color="inherit"/>:"Sign In"}</Button>
              </form>
              <Divider sx={{mt:"10px",fontSize:"11px",color:"#786969",}}>Or Continue With</Divider>
              <Button startIcon={<Box component="img"
                                      src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                                      alt="google logo"
                                      sx={{width:"18px",height:"18px"}}/>} variant="outlined" sx={{textTransform:"none",color:"#000000",mt:"10px",borderColor:"#b5acac97",fontWeight:"550"}}fullWidth>Continue With Google</Button>
             <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",gap:"4px"}}><Typography variant="body2" sx={{mt:"20px"}}> Don't have an account </Typography> <Link component={RouterLink} to='/signup' sx={{mt:"18px",textDecoration:"none",color:"#2a84f3",fontWeight:"700",fontSize:"0.875rem","&:hover":{textDecoration:"underline",}}}> Sign Up</Link> </Box>                               
           </Box>
         </Paper>
        </div>
    )
}

export default Login;