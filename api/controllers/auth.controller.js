const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const errorhandler = require("../utils/error");
const signup = async (req, res, next) => {
  const { userName, email, password } = req.body;
  const hashedPass = bcryptjs.hashSync(password, 10);
  const newUser = new User({ userName, email, password: hashedPass });
  try {
    await newUser.save();
    res.status(201).json("new user created successfully");
    console.log(req.body);
  } catch (error) {
    next(error);
  }
};

const signin = async (req, res, next) => {
  console.log("hello from sign in");
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorhandler(404, "User not found!"));
    }
    const validpassword = bcryptjs.compareSync(password, validUser.password);
    if (!validpassword) {
      return next(errorhandler(401, "Wrong credentials!"));
    }
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res.cookie("accessToken", token, { httpOnly: true }).status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

const google = async (req, res, next) => {
  // const { name, email, photo } = req.body;
  try {
    const validUser = await User.findOne({ email:req.body.email });
    if (validUser) {
      const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = validUser._doc;
      res
        .cookie("accessToken", token, { httpOnly: true })
        .status(200)
        .json(rest);
    }
    else{
      const genPass = Math.random().toString(36).slice(-8);
      console.log(genPass)
      const hashedPass = bcryptjs.hashSync(genPass, 10);
      const newUser = new User({ userName: req.body.name.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-4), email:req.body.email, password: hashedPass, photo: req.body.photo });
      await newUser.save()
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = newUser._doc;
    res.cookie("accessToken", token, { httpOnly: true }).status(200).json(rest);
    }
  } catch (error) {
    next(error);
  }
  console.log(req.body);
};

module.exports = {
  signup,
  signin,
  google
};
