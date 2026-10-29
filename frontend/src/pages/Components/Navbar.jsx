import {AppBar,Toolbar,Typography,Button,Box} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import {useNavigate} from "react-router-dom";

function Navbar(){

    const navigate = useNavigate();

    const handleLogout = ()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("User");
        navigate("/login")
    }

    const userdata = localStorage.getItem("User");
    const user = userdata ? JSON.parse(userdata) : null;

    return (<div>
            <AppBar position="static" sx={{bgcolor:"#FFFFFF"}}>
                <Toolbar sx={{justifyContent:"space-between",minHeight:"64px"}}>
                    <Box sx={{display:"flex",alignItems:"center",}}>
                        <AssignmentIcon color="primary" fontSize="medium"/>
                        <Typography variant="h5" sx={{fontFamily:"serif",pl:"5px",color:"black",fontWeight:"800"}}>Attendance Portal</Typography>
                    </Box>

                    <Box sx={{display:"flex",gap:"3px",height:"64px"}}>
                       <Button sx={{color:"black",fontSize:"15px",fontWeight:"800",textTransform:"none",borderBottom:"3px solid transparent",bgcolor:"white"
                        ,'&:hover':{borderBottomColor:"#2a84f3"}}}>Dashboard</Button>
                       <Button sx={{color:"black",fontSize:"15px",fontWeight:"800",textTransform:"none",borderBottom:"3px solid transparent",bgcolor:"white"
                        ,'&:hover':{borderBottomColor:"#2a84f3"}}}>History</Button>
                    </Box>

                    <Box sx={{display:"flex",gap:"25px",alignItems:"center"}}>
                        <Box sx={{display:"flex",gap:"6px"}}>
                           <Typography variant="body2" sx={{flexShrink:"0",width:"30px",height:"30px",display:"flex",alignItems:"center",justifyContent:"center",color:"black",fontSize:"12px",fontWeight:"600",p:"7px",bgcolor:"#267ce60b",borderRadius:"50%",border:"1px solid #2a84f3b2",}}>{user.Name.charAt(0)}</Typography>
                           <Typography variant="body2" sx={{display:"flex",alignItems:"center",color:"#616974",fontSize:"12px",fontWeight:"600"}}>{`${user.Name}(${user.role})`}</Typography>
                        </Box>
                        <Button sx={{color:"#616974",fontSize:"14px",fontWeight:"800",border:"1px solid #c7cfddc7",borderRadius:"10px",'&:hover':{bgcolor:"#00a6ff80"}}} onClick={handleLogout}>Logout</Button>
                    </Box>
                </Toolbar>
            </AppBar>

    </div>)
}

export default Navbar;