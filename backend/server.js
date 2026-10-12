const User = require('./models/User')

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

require("dotenv").config();

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Server is Running");
})

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>console.log("Connected to DB Successfully"))
    .then(()=>console.log("DB Name: ",mongoose.connection.name))
    .catch((err)=>console.error("MongoDB Connection error: ",err));


//=====================================

//login route                
app.post('/api/auth/login',async (req,res)=>{

    try{
    console.log("The request is received: ",req.body);

    const {email,password} = req.body;

    if(!email || !password){
        return res.status(400).json({message:"The Field is Empty"});//where we would get this result;
    }

    const user = await User.findOne({email:email});

    if(!user){
        return res.status(401).json({message:"Invalid username or password"});
    }

    if(email.trim()!==user.email){
        return res.status(401).json({message:"invalid username or password"});
    }

    
    const token = jwt.sign(
             {id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:"1d"}
    )

    console.log("User logged in successfully: ",user);

    return res.status(200).json({
        message:"Success",
        token,
        user:{
            id:user._id,
            Name:user.name,
            email:user.email,
            role:user.role,
        }
    })
}
catch(err){
  console.error("Login Error: ",err)
  return res.status(500).json({message:"Internal Server Error"})  
}
}
)


//signup route
app.post("/api/auth/signup",async (req,res)=>{

    try{
    const {name,email,pass,cpass} = req.body;

    if(!name || !email || !pass || !cpass){
        return res.status(400).json({message:"Fill the Empty Field."})
    }

    const user1 = await User.findOne({email:email});

    if(user1){
        return res.status(401).json({message:"User Already Exist"})
    }

    const user =await User.create({name:name,
                    email:email,
                    password:pass})

    const token = jwt.sign(
        {id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:"1d"}
    )


     return res.status(201).json({
        message:"Success",
        token,
        User:{
            id:user._id,
            Name:user.name,
            email:user.email,
            role:user.role,
        }
     })}
     catch(err){
            console.error("Signup Error",err);
            return res.status(500).json({message:"Internal Signup Error"})
     }
})

//forgot password route
app.post("/api/auth/forgot-password",async (req,res)=>{

    try{
     const {email} = req.body;

     if(!email){
        return res.status(400).json({message:"Email is Required"});
     }

     const user = await User.findOne({email:email.trim()});

     if(!user){
        return res.status(404).json({message:"No account Found with this email"})
     }

     const otp = Math.floor(10000 + Math.random() * 900000).toString();//i dont understand this logic

     user.resetOtp = otp;
     user.resetOtpExpires = new Date(Date.now() + 10 * 60 * 1000)
     await user.save()//i dont understand this

     console.log(`OTP for ${email} is: ${otp}`);

     return res.status(200).json({message:"Otp sent successfully!!"})
}catch(error){
      console.log("Forgot password error:",error)
      return res.status(500).json({message:"Internal Server Error"})
}})


app.post("/api/auth/verify-otp",async (req,res)=>{

    try{
        const {email,otp} = req.body;
        if(!email || !otp){
            return res.status(400).json({message:"Email or Otp is required"});
        }

        const user = await User.findOne({email:email});

        if(!user){
            return res.status(400).json({message:"User doesn't Exist"});
        }

        if(!user.resetOtp || user.resetOtp !== otp.trim()){
            return res.status(400).json({message:"Invalid Otp"});
        }

        if(user.resetOtpExpires < new Date()){
            return res.status(400).json({message:"OTP is Expired"});
        }

        return res.status(200).json({message:"OTP sent Successfully"});
    }catch(err){
        console.error("Verify Otp Error: ",err);
        return res.status(500).json({message:"Internal Server Error"});
    }
})


//
app.post("/api/auth/reset-password",async (req,res)=>{
        try{
            const{email,otp,password,cpassword} = req.body;

            if(!password || !cpassword){
                return res.status(400).json({message:"Password is Required"});
            }

            if(password !== cpassword){
                return res.status(400).json({message:"Password Doesn't Match"});
            }

            const user = await User.findOne({email:email});

            if(!user || user.resetOtp !== otp.trim() || user.resetOtpExpires < new Date()){
                return res.status(400).json({message:"Invalid or Expired Session. Start Over"})
            }

            user.password = password.trim();
            user.resetOtp = undefined;
            user.resetOtpExpires = undefined;
            await user.save();

            return res.status(200).json({message:"Password Reset Successfully"});

        }catch(err){
                console.error("Reset Password Error: ",err);
                return res.status(500).json({message:"Internal Server Error"});
        }
})



//=====================================
app.listen(PORT,()=>{
    console.log(`Server is Running on: ${PORT}`)
});