import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "@mui/material/Link";
import {useNavigate} from "react-router-dom";
import {Link as RouterLink} from "react-router-dom";
import Divider from "@mui/material/Divider";
import {useState} from 'react';
import "../../App.css";


function Forgotpassword(){

    const navigate = useNavigate();

    const [step,setStep]  = useState(1);

    const [email,setEmail] = useState("");
    const [otp,setOtp] = useState("");
    const [password,setPassword] = useState("");
    const [cpassword,setCpassword] = useState("");

    const [error,setError] = useState("");
    const [loading,setLoading] = useState(false);
    const [showpassword,setShowpassword] = useState(false);

    const GENERATED_OTP = "123456";

    const handlemail = (e)=>{
        e.preventDefault();

        if(!email.trim().includes("@")){
            setError("Please Enter Valid Email Address");
            return;
        }
    
        setLoading(true);

        setTimeout(()=>{
            setStep((prev)=>prev+1);
            setLoading(false);
        },1000)
    }
        
        
        const handleOtp = (e)=>{
            e.preventDefault();

        if(!otp.trim()||otp.trim().length<6 || otp.trim() !== GENERATED_OTP){
            setError("Invalid OTP");
            return;
        }
        setLoading(true);

        setTimeout(()=>{
            setStep((prev)=>prev+1);
            setLoading(false);
        },1000)
    }
        
        
    const handlePassword = (e)=>{
        e.preventDefault();

        if(!password.trim()||!cpassword.trim()){
            setError("The Field is Empty");
            return;
        }
        if(password.trim()!==cpassword.trim()){
            setError("Password Doesn't Matching")
            return;
        }
        if(password.trim().length<8 && cpassword.trim().length<8){
            setError("Enter Atleast 8 Characters")
            return;
        }
        
        setLoading(true);

        setTimeout(()=>{
            setStep((prev)=>prev+1);
            navigate("/login");
        },1000)

        
    }


    return (<div id="Fpblock">
        <Paper sx={{width:"430px"}}>
          <form onSubmit={handlemail}>{ step===1 && <Box id="card1" sx={{m:"25px"}}>
            <Typography variant="h5" sx={{fontWeight:"700"}}>Reset Password</Typography>
            <Typography variant="body2" sx={{mt:"7px",color:"grey"}}>Enter your work email to receive 6-digit verification code.</Typography>
            <TextField label="Work Email"
                       value={email}
                       onChange={(e)=>{setEmail(e.target.value)
                        setError("")
                       }}
                       placeholder="Enter Your Email..."
                       sx={{mt:"10px",'& input::placeholder':{fontSize:"12px"},'& .MuiInputLabel-root':{fontSize:"13px",fontWeight:"600"},'& .MuiInputLabel-root:not(.MuiInputLabel-shrink)':{top:"9%"}}}
                       size="small"
                       fullWidth/>
            {error && <Alert severity="error" sx={{bgcolor:"#ff00003b",color:"#a61515",fontWeight:"600",mt:"5px",p:"2px"}}>{error}</Alert>}
            <Button type="submit" fullWidth variant="contained" sx={{mt:"12px",bgcolor:"#2a84f3",'&:hover':{bgcolor:" #216cc8"},textTransform:"none",fontWeight:"700"}}>{loading ? <CircularProgress size={22} color="inherit"/>:"Send OTP"}</Button>
            <Box sx={{display:"flex",justifyContent:"flex-start"}}>
                <Link component={RouterLink} to="/login" sx={{mt:"9px",fontSize:"0.875rem",fontWeight:"700",color:"#2a84f3",textDecoration:"none",'&:hover':{textDecoration:"underline"}}}>Back to Login</Link>
             </Box>
            </Box>}</form>
            
            <Divider></Divider>
           <form onSubmit={handleOtp}>
            {step===2 && <Box id="card2" sx={{m:"25px"}}>
             <Typography variant="h5" sx={{fontWeight:"700"}}>Verify Code</Typography>
             <Typography variant="body2" sx={{mt:"7px",color:"grey"}}>Code has been sent to email id</Typography>
             <TextField label="OTP Code"
                        value={otp}
                        onChange={(e)=>{setOtp(e.target.value)
                            setError("")
                        }}
                        placeholder="Enter the OTP Code"
                        size="small"
                        sx={{mt:"10px",'& input::placeholder':{fontSize:"12px"},'& .MuiInputLabel-root':{fontSize:"13px",fontWeight:"700",top:"10%"}}}
                         fullWidth/>
             {error && <Alert severity="error" sx={{fontWeight:"600",bgcolor:"#ff00003b",color:"#a61515",mt:"7px",p:"2px"}}>{error}</Alert>}
             <Button type="submit" fullWidth variant="contained" sx={{mt:"8px",bgcolor:"#2a84f3",'&:hover':{bgcolor:" #216cc8"},color:"white",textTransform:"none",fontWeight:"700"}}>{loading ? <CircularProgress size={22} color="inherit"/>:"Verify Code"}</Button>
            
             <Box sx={{display:"flex",justifyContent:"space-between"}}>
                 <Link component={RouterLink} to="/login" sx={{mt:"9px",fontSize:"0.875rem",fontWeight:"700",color:"#2a84f3",textDecoration:"none",'&:hover':{textDecoration:"underline"}}}>Back to Login</Link>
                <Link component={RouterLink} sx={{mt:"9px",fontSize:"0.875rem",fontWeight:"700",color:"#2a84f3",textDecoration:"none",'&:hover':{textDecoration:"underline"}}}>Resend OTP</Link>
             </Box>
            </Box>}</form>
            <Divider></Divider>
            <form onSubmit={handlePassword}>
            {step===3 && <Box id="card3" sx={{m:"25px"}}>
                <Typography variant="h5" sx={{fontWeight:"700"}}>Set New Password</Typography>
                <Typography variant="body2" sx={{color:"grey",mt:"10px"}}>Create a Strong Password for your Account</Typography>
                <TextField label="New Password"
                           value={password}
                           onChange={(e)=>{setPassword(e.target.value)
                                          setError("")
                           }}
                           placeholder={'\u2022'.repeat(8)}
                           type="password"
                           size="small"
                           sx={{mt:"10px",'& input::placeholder':{fontSize:"13px"},'& .MuiInputLabel-root':{fontSize:"13px",fontWeight:"700",top:"4px"}}}
                           fullWidth/>
            <TextField label="Confirm Password"
                           value={cpassword}
                           onChange={(e)=>{setCpassword(e.target.value)
                                            setError("");
                           }}
                           placeholder={'\u2022'.repeat(8)}
                           type="password"
                           size="small"
                           sx={{mt:"10px",'& input::placeholder':{fontSize:"13px"},'& .MuiInputLabel-root':{fontSize:"13px",fontWeight:"700",top:"4px"}}}
                           fullWidth/>
            {error && <Alert severity="error" sx={{fontWeight:"600",bgcolor:"#ff00003",color:"#a61515",p:"2px",mt:"6px"}}>{error}</Alert>}
             <Button type="submit" fullWidth variant="contained" sx={{mt:"8px",bgcolor:"#2a84f3",'&:hover':{bgcolor:" #216cc8"},color:"white",textTransform:"none",fontWeight:"700"}}>{loading ? <CircularProgress size={22} color="inherit"/>:"Update Password"}</Button>
             <Box sx={{display:"flex",justifyContent:"flex-start"}}>
                <Link component={RouterLink} to="/login" sx={{mt:"9px",fontSize:"0.875rem",fontWeight:"700",color:"#2a84f3",textDecoration:"none",'&:hover':{textDecoration:"underline"}}}>Back to Login</Link>
             </Box>
            </Box>}
            </form>
        </Paper>
    
    </div>)
}

export default Forgotpassword;
