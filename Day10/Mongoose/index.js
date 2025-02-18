const mongoose = require("mongoose")

const connectDB= async ()=>{
    const conn = await mongoose.connect("mongodb+srv://rajatind12:SHALINI1234@cluster0.kcjzx.mongodb.net/");
    console.log("mongoose")
    conn.disconnect()
}
connectDB()
