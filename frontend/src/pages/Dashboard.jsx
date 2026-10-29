import {useState,useEffect} from 'react';
import { Typography, Box } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import Navbar from "./Components/Navbar.jsx";
import CoffeeIcon from '@mui/icons-material/Coffee';
import LogoutIcon from '@mui/icons-material/Logout';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';

function Dashboard() {

    const [doors,setDoors] = useState([]);
    const [attendance,setAttendance] = useState(null);
    const [loading,setLoading] = useState(false);


    const userdata = localStorage.getItem("User");
    const savedUser = userdata ? JSON.parse(userdata):null;
    console.log(savedUser);

    const todayDate = new Date().toLocaleDateString("en-GB");

    useEffect(()=>{ 
        const fetchDashboardData = async ()=>{

            try{
            const rawToken = localStorage.getItem("token");
            const token = rawToken ? JSON.parse(rawToken) : null;

            const headers = {
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
            }

            const fetchDoors = await fetch("http://localhost:5000/api/doors",{headers});
            const doordata = await fetchDoors.json();
            console.log('Available Doors',doordata);
            setDoors(doordata);
 
            const fetchAttendance = await fetch("http://localhost:5000/api/attendance/today",{headers});
            const attendanceData = await fetchAttendance.json();
            console.log('Current Attendance',attendanceData);
            setAttendance(attendanceData);
        }catch(err){
            console.error("Dashboard Fetch Error:",err)
        }finally{
            setLoading(false)
        }
        }
        fetchDashboardData();
    },[])

    return (<div id="dashboard">
        <Navbar />
        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}> 

            {/*1. Good Morning Msg Box*/}

            <Box id="body" sx={{ mt: "50px", mb: "15px", width: "800px" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography variant="h5" sx={{ fontWeight: "700" }}>Good Morning, {savedUser?.Name || "User"}</Typography>
                    <Typography>Date: {todayDate}</Typography>
                </Box>
            </Box>

            {/*2. Status Box*/}
            <Box sx={{ display: "flex", justifyContent: "space-around", gap: "460px", alignItems: "center", mb: "15px", width: "800px", bgcolor: "#FFFFFF", height: "150px", borderRadius: "20px" }}>

                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px" }}>

                    <Typography variant="body2" sx={{ color: "grey", fontSize: "12px" }}>CURRENT STATUS</Typography>
                    <Box sx={{ border: "2px solid #00a86a0f", borderRadius: "20px", bgcolor: "#00a86a27", display: "flex", alignItems: "center", gap: "4px", px: 1 }}>
                        <Box sx={{ width: "8px", height: "8px", borderRadius: "50%", bgcolor: "#00a86ad2", color: "#00a86af4", border: "2px solid #00a86acd" }}></Box>
                        <Typography variant="body2" sx={{ color: "#00a86adf" }}>Present</Typography>
                    </Box>

                    <Typography variant="body2">Checked in at 10:00am</Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", alignItems: "flex-end" }}>
                    <Typography variant="body2">Active Work Time</Typography>
                    <Typography variant="h5" sx={{ fontWeight: "700" }}>09:10:22</Typography>
                </Box>
            </Box>

            {/*3. Door Access Box*/}
            <Box sx={{ width: "800px", bgcolor: "#FFFFFF", height: "220px", borderRadius: "20px" }}>
                <Box sx={{ m: "20px", display: "flex", flexDirection: "column" }}>
                    <Box>
                        <Typography variant="body1">Door Access CheckPoints</Typography>
                        <Typography variant="body2" sx={{ color: "#00000078" }}>Simulate Tapping your physical RFID badge at office doors</Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: "24px", mt: "10px" }}>
                        <Box sx={{ width: "230px",height: "120px", border: "2px solid #0ff489d0", borderRadius: "12px",display:"flex",flexDirection:"column",'&:hover':{bgcolor:"#ECFDF5"}}}>
                           <Box sx={{m:"15px",display:"flex",flexDirection:"column",gap:"45px"}}>
                            <Box sx={{display:"flex",gap:"5px",alignItems:"center"}}>
                                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",width:"30px",height:"30px",bgcolor:"#ECFDF5",borderRadius:"6px"}}>
                                    <DoneIcon sx={{color:"#10B981"}} fontSize="medium"/>
                                </Box>
                                <Typography>Main Entrance</Typography>
                            </Box>
                            <Box>
                                <Typography variant="body2" sx={{fontSize:"12px",color:"#10B981"}}>Already Checked in</Typography>
                            </Box>
                            </Box>
                        </Box>
                        <Box sx={{ width: "230px", height: "120px", border: "2px solid #1c64f5ff", borderRadius: "12px",'&:hover':{bgcolor:"#EFF6FF"}}}>
                            <Box sx={{m:"15px",display:"flex",flexDirection:"column",gap:"45px"}}>
                                <Box sx={{display:"flex",gap:"11px",alignItems:"center"}}>
                                    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",width:"33px",height:"32px",bgcolor:"#EFF6FF",borderRadius:"6px",color:"#1c64f5ff"}}>
                                        <CoffeeIcon color="inherit" fontSize="medium"/>
                                    </Box>
                                    <Typography>Cafeteria</Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{fontSize:"12px",color:"#1c64f5ff"}}>Start Break</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ width: "230px", height: "120px", border: "2px solid #ee0505a2", borderRadius: "12px",'&:hover':{bgcolor:"#FFF1F2"}}}>
                               <Box sx={{m:"15px",display:"flex",flexDirection:"column",gap:"45px"}}>
                                <Box sx={{display:"flex",gap:"11px",alignItems:"center"}}>
                                    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",width:"32px",height:"32px",bgcolor:"#FFF1F2",borderRadius:"6px",color:"#ee0505a2"}}>
                                        <LogoutIcon color="inherit" fontSize="medium"/>
                                    </Box>
                                    <Typography>Main Exit</Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{fontSize:"12px",color:"#ee0505a2"}}>Check Out</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            { /*4. Success Msg Box */}
            <Box sx={{display:"flex",alignItems:"center",width:"800px",height:"55px",borderRadius:"20px",mt:"10px",bgcolor:"#ECFDF5",border:"2px solid #C2F5DE"}}>
                <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"780px"}}>
                <Box sx={{m:"10px",color:"#10B981",display:"flex",alignItems:"center",gap:"8px"}}>
                    <CheckCircleIcon fontSize="medium"/>
                    <Typography sx={{color:"#10B981",fontSize:"14px"}}>
                        Access granted. Check-in recorded at Main Entrance
                    </Typography>
                </Box>
                <CloseIcon fontSize="small" sx={{color:"#10B981"}}/>
                </Box>
            </Box>

            {/*5. Final Box */}
            <Box sx={{mt:"10px",width:"800px",height:"148px",borderRadius:"20px",bgcolor:"#FFFFFF"}}>
                <Box sx={{m:"18px",height:"110px"}}>
                    <Box>
                        <Typography sx={{mb:"12px"}}>Today's shift summary</Typography>
                        <Box sx={{display:"flex",justifyContent:"space-around",gap:"12px"}}>
                            <Box sx={{width:"150px",height:"70px",bgcolor:"#F1F5F9",flex:"1",borderRadius:"10px"}}>
                                <Box sx={{m:"12px",height:"50px"}}>
                                    <Typography sx={{fontSize:"12px"}}>Total Time</Typography>
                                    <Typography>9h 00m</Typography>
                                </Box>
                            </Box>
                            <Box sx={{width:"150px",height:"70px",bgcolor:"#FFFBEB",flex:"1",borderRadius:"10px"}}>
                                <Box sx={{m:"12px",height:"50px"}}>
                                    <Typography sx={{fontSize:"12px"}}>Break Time</Typography>
                                    <Typography>1h 00m</Typography>
                                </Box>
                            </Box>
                            <Box sx={{width:"150px",height:"70px",bgcolor:"#ECFDF5",flex:"1",borderRadius:"10px"}}>
                                <Box sx={{m:"12px",height:"50px"}}>
                                    <Typography sx={{fontSize:"12px"}}>Net Worked</Typography>
                                    <Typography>8h 00m</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                </Box>
            </Box>
        </Box>
    </div>)
}


export default Dashboard;