import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {Link as RouterLink} from 'react-router-dom';
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import "../../App.css"

function Signup(){

    return (<div id="sign-main">
       <Paper sx={{width:"380px",height:"520px"}}>
        <Box className="inner-block" sx={{margin:"25px"}}>
       <Typography variant="h5" sx={{fontWeight:"700"}}>SignUp</Typography>
       <Typography variant="body2" sx={{color:"grey",mt:"4px"}}>signup to get page access</Typography>
       <TextField label="Name"
                  placeholder="Enter Your Name..."
                  fullWidth
                  size="small"
                  variant="outlined"
                  sx={{mt:"20px",'& .MuiInputLabel-root:not(.MuiInputLabel-shrink)':{top:"10%"},'& input::placeholder':{fontSize:"12px"},'& .MuiInputLabel-root':{fontSize:"13px",fontWeight:"700"}}}/>
       <TextField label="Email"
                  placeholder="Enter Your Email..."
                  size="small"
                  sx={{mt:"20px",'& input::placeholder':{fontSize:"12px"},'& .MuiInputLabel-root:not(.MuiInputLabel-shrink)':{top:"10%"},'& .MuiInputLabel-root':{fontSize:"13px",fontWeight:"700"}}}
                  fullWidth/>
        <TextField label="Password"
                  type="password"
                  placeholder={'\u2022'.repeat(8)}
                  size="small"
                  sx={{mt:"20px",'& input::placeholder':{fontSize:"12px"},'& .MuiInputLabel-root:not(.MuiInputLabel-shrink)':{top:"10%"},'& .MuiInputLabel-root':{fontSize:"13px",fontWeight:"700"}}}
                  fullWidth/>
        <TextField label="Re-Type Password"
                  type="password"
                  placeholder={'\u2022'.repeat(8)}
                  size="small"
                  sx={{mt:"20px",'& input::placeholder':{fontSize:"12px"},'& .MuiInputLabel-root:not(.MuiInputLabel-shrink)':{top:"10%"},'& .MuiInputLabel-root':{fontSize:"13px",fontWeight:"700"}}}
                  fullWidth/>
        <Button fullWidth sx={{bgcolor:"#ff00003b",color:"#a61515",mt:"20px",textTransform:"none",fontWeight:"600"}}>
            Error Message</Button>
        <Button sx={{bgcolor:"#2a84f3",color:"white",mt:"20px",'&:hover':{bgcolor:"#216cc8"},textTransform:"none",fontWeight:"600"}}
                  
                  fullWidth>Create Account</Button>
       </Box>
       <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",gap:"4px"}}><Typography variant="body2">I have an Account</Typography><Link component={RouterLink} to="/login" sx={{textDecoration:"none",fontWeight:"700",fontSize:"0.875rem",'&:hover':{textDecoration:"underline"}}}>Login</Link></Box>
       </Paper>
    </div>)
}




export default Signup;