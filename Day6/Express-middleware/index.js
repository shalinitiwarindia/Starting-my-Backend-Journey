const express = require("express");
const groceryRouter = require("./routes/groceries.route")
const app= express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use((req,res, next)=>{
    //logger middleware
    console.log("Route Accessed", req.url, "Method:", req.method,
        "At:",
        new Date()
    );
    next();   
});

app.use((req,res,next)=>{
    //Auth middleware
    // if (!req.headers["apikey"]){
    //     return res.status(401).send("User not authenticated");
    // }
    next();
});
//Create a middleware that calculates time taken by req.
app.use((req, res, next)=> {
    // performance.now()

    const t1 = performance.now(); //Current time
    next()
    const t2 = performance.now();  //time after next
    console.log("Time taken", t2-t1);
});

//Router middle:

app.use("/groceries",groceryRouter);
app.get("/",(req,res)=> {
    res.send("hello");
});
app.get("/groceries",async(req,res)=> {
    setTimeout(()=>{
        res.send("hello");
    },1000);
    
});
app.put("/cart",(req,res)=> {
    res.send("hello");
});
app.delete("/user",(req,res)=> {
    res.send("hello");
});
app.post("/profile",(req,res)=> {
    res.send("hello");
});

app.use("/groceries",groceryRouter);

app.listen(8080);

