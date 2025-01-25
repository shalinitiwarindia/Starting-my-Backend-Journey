const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req,res)=>{
    res.end("Welcome to Homepage");
});

app.get("/products",(req,res)=>{
    res.end(JSON.stringify([1,2,3,4]));

});
app.post("/products",(req,res)=>{
    fs.readFile("./db.json", {encoding: "utf-8"}, (err,data)=> {
        const parsed = JSON.parse(data);
        parsed.products = [...parsed.products,req.body];

        fs.writeFile("./db.json",
            JSON.stringify(parsed),
            { encoding: "utf-8" },
            ()=> {
                res.end("Product created");
            }
         );
    });
});
app.put("/product/1",(req,res)=>{});
app.delete("/products/1", (req,res)=>{
    fs.readFile("./db.json", {encoding: "utf-8"}, (err,data)=> {
        const parsed = JSON.parse(data);
        console.log(parsed)
        parsed.products = parsed.products.filter((el)=> el.id !== "1")
        console.log(parsed)
        fs.writeFile("./db.json",
            JSON.stringify(parsed),
            "utf-8" ,
            ()=> {
                res.end("Product deleted");
            }
         );
    });
});
app.listen(8080,()=> {
    console.log("server started on http://localhost:8080/");

});




   
