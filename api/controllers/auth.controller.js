const  User  = require("../models/user.model");
const bcryptjs = require("bcryptjs")
const signup = async (req,res)=>{
    const {userName,email,password} = req.body;
    const hashedPass = bcryptjs.hashSync(password,10)
    const newUser = new User({userName, email,password: hashedPass});
    try {
        await newUser.save();
        res.status(201).json("new user created successfully")
        console.log(req.body)
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports={ 
        signup
}
