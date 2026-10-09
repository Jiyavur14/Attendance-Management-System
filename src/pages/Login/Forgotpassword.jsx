import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import {Link as RouterLink} from "react-router-dom";
import Divider from "@mui/material/Divider";
import {useState} from 'react';
import "../../App.css";


function Forgotpassword(){

    const [step,setStep]  = useState(1);

    const [email,setEmail] = useState("");
    const [otp,setOtp] = useState("");

    const [error,setError] = useState("");
    const [loading,setLoading] = useState(false);
    const [showpassword,setShowpassword] = useState(false);

    const GENERATED_OTP = "123456";

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(!email.trim().includes("@")){
            setError("Please Enter Valid Email Address");
            return;
        }
        
        setLoading(true);
        
        setTimeout(()=>{
            setStep((prev)=>prev+1);
        },1000)

    }

    return (<div id="Fpblock">
        <Paper sx={{width:"430px"}}>
          <form onSubmit={handleSubmit}>{ step===1 && <Box id="card1" sx={{m:"25px"}}>
            <Typography variant="h5" sx={{fontWeight:"700"}}>Reset Password</Typography>
            <Typography variant="body2" sx={{mt:"7px",color:"grey"}}>Enter your work email to receive 6-digit verification code.</Typography>
            <TextField label="Work Email"
                       value={email}
                       onChange={(e)=>setEmail(e.target.value)}
                       placeholder="Enter Your Email..."
                       sx={{mt:"10px",'& input::placeholder':{fontSize:"12px"},'& .MuiInputLabel-root':{fontSize:"13px",fontWeight:"600"},'& .MuiInputLabel-root:not(.MuiInputLabel-shrink)':{top:"9%"}}}
                       size="small"
                       fullWidth/>
            <Button fullWidth variant="contained" sx={{mt:"12px",bgcolor:"#2a84f3",'&:hover':{bgcolor:" #216cc8"},textTransform:"none",fontWeight:"700"}}>Send OTP</Button>
            <Box sx={{display:"flex",justifyContent:"flex-start"}}>
                <Link component={RouterLink} to="/login" sx={{mt:"9px",fontSize:"0.875rem",fontWeight:"700",color:"#2a84f3",textDecoration:"none",'&:hover':{textDecoration:"underline"}}}>Back to Login</Link>
             </Box>
            </Box>}
            
            <Divider></Divider>

            {step===2 && <Box id="card2" sx={{m:"25px"}}>
             <Typography variant="h5" sx={{fontWeight:"700"}}>Verify Code</Typography>
             <Typography variant="body2" sx={{mt:"7px",color:"grey"}}>Code has been sent to email id</Typography>
             <TextField label="OTP Code"
                        placeholder="Enter the OTP Code"
                        size="small"
                        sx={{mt:"10px",'& input::placeholder':{fontSize:"12px"},'& .MuiInputLabel-root':{fontSize:"13px",fontWeight:"700",top:"10%"}}}
                         fullWidth/>
             <Button fullWidth variant="contained" sx={{mt:"12px",bgcolor:"#2a84f3",'&:hover':{bgcolor:" #216cc8"},color:"white",textTransform:"none",fontWeight:"700"}}>Verify Code</Button>
             <Box sx={{display:"flex",justifyContent:"space-between"}}>
                 <Link component={RouterLink} to="/login" sx={{mt:"9px",fontSize:"0.875rem",fontWeight:"700",color:"#2a84f3",textDecoration:"none",'&:hover':{textDecoration:"underline"}}}>Back to Login</Link>
                <Link component={RouterLink} sx={{mt:"9px",fontSize:"0.875rem",fontWeight:"700",color:"#2a84f3",textDecoration:"none",'&:hover':{textDecoration:"underline"}}}>Resend OTP</Link>
             </Box>
            </Box>}
            <Divider></Divider>
            {step===3 && <Box id="card3" sx={{m:"25px"}}>
                <Typography variant="h5" sx={{fontWeight:"700"}}>Set New Password</Typography>
                <Typography variant="body2" sx={{color:"grey",mt:"10px"}}>Create a Strong Password for your Account</Typography>
                <TextField label="New Password"
                           placeholder={'\u2022'.repeat(8)}
                           type="password"
                           size="small"
                           sx={{mt:"10px",'& input::placeholder':{fontSize:"13px"},'& .MuiInputLabel-root':{fontSize:"13px",fontWeight:"700",top:"4px"}}}
                           fullWidth/>
            <TextField label="Confirm Password"
                           placeholder={'\u2022'.repeat(8)}
                           type="password"
                           size="small"
                           sx={{mt:"10px",'& input::placeholder':{fontSize:"13px"},'& .MuiInputLabel-root':{fontSize:"13px",fontWeight:"700",top:"4px"}}}
                           fullWidth/>
             <Button fullWidth variant="contained" sx={{mt:"12px",bgcolor:"#2a84f3",'&:hover':{bgcolor:" #216cc8"},color:"white",textTransform:"none",fontWeight:"700"}}>Update Password</Button>
             <Box sx={{display:"flex",justifyContent:"flex-start"}}>
                <Link component={RouterLink} to="/login" sx={{mt:"9px",fontSize:"0.875rem",fontWeight:"700",color:"#2a84f3",textDecoration:"none",'&:hover':{textDecoration:"underline"}}}>Back to Login</Link>
             </Box>
            </Box>}
            </form>
        </Paper>
    
    </div>)
}

export default Forgotpassword;
