const express = require("express");
const app = express();
require("dotenv").config;
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Api is running");
});

app.listen(5000,()=>{
console.log("Listening port 5000");
});

const connectDB = require("./config/db");
connectDB();