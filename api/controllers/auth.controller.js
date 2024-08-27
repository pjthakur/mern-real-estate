const  User  = require("../models/user.model");
const bcryptjs = require("bcryptjs")
const signup = async (req,res,next)=>{
    const {userName,email,password} = req.body;
    const hashedPass = bcryptjs.hashSync(password,10)
    const newUser = new User({userName, email,password: hashedPass});
    try {
        await newUser.save();
        res.status(201).json("new user created successfully")
        console.log(req.body)
        
    } catch (error) {
        next(error)
    }
}

module.exports={ 
        signup
}
