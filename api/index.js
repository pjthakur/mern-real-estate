const express = require("express");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user.route")
const authRouter = require("./routes/auth.route")

dotenv.config();

const app = express();
app.use(express.json())

const uri = process.env.MONGO;

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use('/api/user', userRouter)
app.use("/api/auth", authRouter)

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
