const express = require("express");

const app = express()
app.get("/", (req,res)=>{
    res.end("Welcome to Homepage");
});

app.get("/products",(req,res)=>{
    res.end(JSON.stringify([1,2,3,4]));
});
app.listen(8080, ()=> {
    console.log("Server Started http://localhost:8080");

})
