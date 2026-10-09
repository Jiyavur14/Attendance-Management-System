import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {Link as RouterLink} from 'react-router-dom';
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import "../../App.css"

function Signup(){

   const navigate = useNavigate();

   const [formdata,setFormdata] = useState({fullName:"",
                                           email:"",
                                           password:"",
                                           confirmPassword:""})

   const cfullName = formdata.fullName.trim();
   const cemail = formdata.email.trim();
   const cpassword = formdata.password.trim();
   const cconfirmPassword = formdata.confirmPassword.trim(); 
   
   const [error,setError] = useState("");
   const [loading,setLoading] = useState(false);

    const handleChange =(e)=>{
     const {name,value} = e.target;

      setError("");

     setFormdata((prev)=>({
        ...prev,[name]:value,
     }))
    
    }

   const handleSubmit =(e)=>{

      e.preventDefault();

      setError("");

    if(!cfullName || !cemail || !cpassword || !cconfirmPassword)
    {
      setError("The Field is Empty");
      return;
    }

    if(!cemail.includes("@"))
    {
      setError("Please Enter Valid Email Address")
      return;
    }

    if(cpassword.length<8){
      setError("Enter atleast 8 Character")
      return;
    }

    if(cpassword !== cconfirmPassword){
      setError("Password doesn't Matching");
      return;
    }

    setLoading(true);
    setTimeout(()=>{
      localStorage.setItem("userDB",JSON.stringify);
     navigate("/login")
    },1000)}
      
    
    return (<div id="sign-main">
       <Paper sx={{width:"380px"}}>
        <Box className="inner-block" sx={{margin:"25px"}}>
       <Typography variant="h5" sx={{fontWeight:"700"}}>SignUp</Typography>
       <Typography variant="body2" sx={{color:"grey",mt:"4px"}}>signup to get page access</Typography>
       <form onSubmit={handleSubmit}>
       <TextField label="Name"
                  placeholder="Enter Your Name..."
                  fullWidth
                  name="fullName"
                  value={formdata.fullName}
                  onChange={handleChange}
                  size="small"
                  variant="outlined"
                  sx={{mt:"20px",'& .MuiInputLabel-root:not(.MuiInputLabel-shrink)':{top:"10%"},'& input::placeholder':{fontSize:"12px"},'& .MuiInputLabel-root':{fontSize:"13px",fontWeight:"700"}}}/>
       <TextField label="Email"
                  placeholder="Enter Your Email..."
                  name="email"
                  value={formdata.email}
                  onChange={handleChange}
                  size="small"
                  sx={{mt:"20px",'& input::placeholder':{fontSize:"12px"},'& .MuiInputLabel-root:not(.MuiInputLabel-shrink)':{top:"10%"},'& .MuiInputLabel-root':{fontSize:"13px",fontWeight:"700"}}}
                  fullWidth/>
        <TextField label="Password"
                  type="password"
                  placeholder={'\u2022'.repeat(8)}
                  name="password"
                  value={formdata.password}
                  onChange={handleChange}
                  size="small"
                  sx={{mt:"20px",'& input::placeholder':{fontSize:"12px"},'& .MuiInputLabel-root:not(.MuiInputLabel-shrink)':{top:"10%"},'& .MuiInputLabel-root':{fontSize:"13px",fontWeight:"700"}}}
                  fullWidth/>
        <TextField label="Re-Type Password"
                  type="password"
                  placeholder={'\u2022'.repeat(8)}
                  value={formdata.confirmPassword}
                  name="confirmPassword"
                  onChange={handleChange}
                  size="small"
                  sx={{mt:"20px",'& input::placeholder':{fontSize:"12px"},'& .MuiInputLabel-root:not(.MuiInputLabel-shrink)':{top:"10%"},'& .MuiInputLabel-root':{fontSize:"13px",fontWeight:"700"}}}
                  fullWidth/>
        {error && <Alert severity="error" sx={{bgcolor:"#ff00003b",color:"#a61515",mt:"20px",p:"2px",textTransform:"none",fontWeight:"600"}}>
            {error}</Alert>}

        <Button sx={{bgcolor:"#2a84f3",color:"white",mt:"20px",'&:hover':{bgcolor:"#216cc8"},textTransform:"none",fontWeight:"600"}}
         fullWidth type="submit">
            {loading ? <CircularProgress size={22} color={"inherit"}/>:'Create Account'}</Button>
         </form>
       </Box>
       <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",mb:"20px",gap:"4px"}}><Typography variant="body2">I have an Account</Typography><Link component={RouterLink} to="/login" sx={{textDecoration:"none",fontWeight:"700",fontSize:"0.875rem",'&:hover':{textDecoration:"underline"}}}>Login</Link></Box>
       </Paper>
    </div>)
}




export default Signup;