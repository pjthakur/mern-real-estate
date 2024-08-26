const express = require("express");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const uri = process.env.MONGO;

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
