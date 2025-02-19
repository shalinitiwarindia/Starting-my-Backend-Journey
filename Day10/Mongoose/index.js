const mongoose = require("mongoose")

const connectDB= async ()=>{
    const conn = await mongoose.connect("write here mongodb path");
    console.log("mongoose")
    conn.disconnect()
}
connectDB()
