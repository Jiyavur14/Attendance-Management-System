import {AppBar,Toolbar,Typography,Button,Box} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";

function Navbar(){

    return (<div>
            <AppBar position="static" sx={{bgcolor:"#FFFFFF"}}>
                <Toolbar sx={{justifyContent:"space-between",minHeight:"64px"}}>
                    <Box sx={{display:"flex",alignItems:"center",}}>
                        <AssignmentIcon color="primary" fontSize="medium"/>
                        <Typography variant="h5" sx={{fontFamily:"serif",pl:"5px",color:"black",fontWeight:"800"}}>Attendance Portal</Typography>
                    </Box>

                    <Box sx={{display:"flex",gap:"3px",height:"64px"}}>
                       <Button sx={{color:"black",fontSize:"15px",fontWeight:"800",textTransform:"none",borderBottom:"3px solid transparent",bgcolor:"white",
                        '&:hover':{borderBottomColor:"#2a84f3"}}}>Dashboard</Button>
                       <Button sx={{color:"black",fontSize:"15px",fontWeight:"800",textTransform:"none",borderBottom:"3px solid transparent",bgcolor:"white"
                        ,'&:hover':{borderBottomColor:"#2a84f3"}}}>History</Button>
                    </Box>

                    <Box sx={{display:"flex",gap:"4px",alignItems:"center"}}>
                        <Typography variant="body2" sx={{display:"flex",alignItems:"center",color:"black",fontSize:"12px",fontWeight:"600",p:"7px",borderRadius:"50%",border:"2px solid black",}}>R</Typography>
                        <Typography variant="body2" sx={{display:"flex",alignItems:"center",color:"black",fontSize:"12px",fontWeight:"600"}}>Ravi(employee)</Typography>
                        <Button sx={{color:"black",fontSize:"14px",fontWeight:"800"}}>Logout</Button>
                    </Box>
                </Toolbar>
            </AppBar>
    </div>)
}

export default Navbar;