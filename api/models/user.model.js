const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    photo:{
        type:String,
        default:"https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?w=740&t=st=1725254431~exp=1725255031~hmac=fd7f905f2f4c4672ef1cb96db097cb033a68e3e8905d83202e2db922a1983d86"
    }

}, {timestamps:true});

const User = mongoose.model("User", userSchema)

module.exports = User