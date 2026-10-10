const express = require('express');
const cors = require('cors');

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Server is Running");
})

//=====================================

const users = [{fullName: "Jiyavur Rahman",
                email: "jiya@gmail.com",
                password:"12345678",
                role:"employee",}]


//login route                
app.post('/api/auth/login',(req,res)=>{

    console.log("The request is received: ",req.body);

    const {email,password} = req.body;

    if(!email || !password){
        return res.status(400).json({message:"The Field is Empty"});//where we would get this result;
    }

    const user = users.find((u)=>u.email===email.trim());

    if(!user){
        return res.status(401).json({message:"Invalid username or password"});
    }

    if(email.trim()!==user.email){
        return res.status(401).json({message:"invalid username or password"});
    }

    console.log("User logged in successfully: ",user);

    return res.status(200).json({
        message:"Success",
        user:{
            Name:user.name,
            email:user.email,
            role:user.role,
        }
    })
})


//signup route
app.post("/api/auth/signup",(req,res)=>{
    const {name,email,pass,cpass} = req.body;

    if(!name || !email || !pass || !cpass){
        return res.status(400).json({message:"Fill the Empty Field."})
    }

    const user = users.find((u)=>u.email === email);

    if(user){
        return res.status(401).json({message:"User Already Exist"})
    }

    const newUser ={fullName:name,
                    email:email,
                    password:pass,
                    confirmPassword:cpass}

     users.push(newUser);
     
     return res.status(201).json({
        message:"Success",
     })
})


//=====================================
app.listen(PORT,()=>{
    console.log(`Server is Running on: ${PORT}`)
});