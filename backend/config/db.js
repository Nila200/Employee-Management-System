const mongoose = require("mongoose");
const connectDB = async () =>{
    await mongoose.connect(process.env.atlas_Url);
    console.log("MongoDB Connected");
};

module.exports = connectDB;