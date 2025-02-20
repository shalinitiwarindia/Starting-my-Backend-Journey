const express = require("express");
const {connection,StudentModel} = require("./index.js")
const app = express();

app.use(express.json())

app.get("/", (req,res)=> {
    res.send("Home page")
})

app.get("/students", async(req,res)=> {
    const results = await StudentModel.find({},{_student_id:0,_v:0})
    res.send(results)
})

app.post("/students/create",async(req,res)=>{
    const student  = await StudentModel.insertMany([req.body])
    res.send("Student saved")
})
app.listen(8080,async()=> {
   try{
    await connection 
    console.log("Connected to db successfully")
   }
   catch{
    console.log("error connecting to db")
   }

   console.log("listening successfully at 8080")
})
