import {useState} from 'react';
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import '../App.css'


function Login(){

    return (
        <div className="main">
         <Paper elevation={4} square={false} sx={{width:"360px",height:"500px"}}>
           <Box sx={{height:"450px",margin:"25px"}}className="inner-paper">
            <Typography variant="h5" sx={{fontWeight:"700",}}>Attendance Portal</Typography>
            <Typography variant="body2" sx={{color:"grey",mt:"4px"}}>sign in to simulate door access</Typography>
            <TextField label="Work Email"
                       placeholder="name@company.com"
                       variant="outlined"
                       sx={{mt:"10px",'& input::placeholder':{fontSize:"12px"},'& .MuiInputLabel-root':{fontSize:"13px",fontWeight:"700"},'& .MuiInputLabel-root:not(.MuiInputLabel-shrink)':{top:"10%",}}}
                       size="small"
                       fullWidth />
            <TextField label="Password"
                       type ="password"
                       placeholder={'\u2022'.repeat(8)}
                       size="small"
                       variant="outlined"
                       sx={{mt:"20px",'& input::placeholder':{fontSize:"12px"},'& .MuiInputLabel-root':{fontSize:"13px",fontWeight:"700"},'& .MuiInputLabel-root:not(.MuiInputLabel-shrink)':{top:"10%",}}}fullWidth/>
              <Box sx={{display:"flex",justifyContent:"flex-end",mt:"5"}}>
                <Link underline="hover" sx={{fontSize:"0.875rem",mt:"15px",fontWeight:"700",color:"#2a84f3"}}>Forgot Password</Link>
              </Box>
              <Button variant="contained" fullWidth sx={{textTransform:"none",fontWeight:"600",mt:"15px",bgcolor:"#2a84f3",'&:hover':{bgcolor:"#216cc8"}}}>Sign In</Button>
              <Button variant="contained" fullWidth sx={{textTransform:"none",mt:"10px",color:"#a61515",bgcolor:'#ff00003b',}}>Invalid Username or Password</Button> 
              <Divider sx={{mt:"10px",fontSize:"11px",color:"#786969",}}>Or Continue With</Divider>
              <Button startIcon={<Box component="img"
                                      src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                                      alt="google logo"
                                      sx={{width:"18px",height:"18px"}}/>} variant="outlined" sx={{textTransform:"none",color:"#000000",mt:"10px",borderColor:"#b5acac97",fontWeight:"550"}}fullWidth>Continue With Google</Button>
             <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",gap:"4px"}}><Typography variant="body2" sx={{mt:"20px"}}> Don't have an account </Typography> <Link sx={{mt:"18px",textDecoration:"none","&:hover":{textDecoration:"underline"}}}> Sign Up</Link> </Box>                               
           </Box>
         </Paper>
        </div>
    )
}

export default Login;