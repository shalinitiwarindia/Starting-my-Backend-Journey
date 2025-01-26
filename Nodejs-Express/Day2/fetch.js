fetch("http://localhost:8080/products",{
    method: "POST",
    body:JSON.stringify({a:1}),
    headers:{"content-type": "application/json"},
})

.then((data) => {
    console.log("Res",data);
})
.catch(console.error);



