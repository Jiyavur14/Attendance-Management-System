const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema({
    name: {type:String,required:true,trim:true},
    email: {type:String,required:true,trim:true,unique:true},
    password: {type:String,required:true},
    role: {type:String,default:"employee"},

    resetOtp:{type:String},
    resetOtpExpires:{type:Date},
},{timestamps:true})


module.exports = mongoose.model("User",userSchema);