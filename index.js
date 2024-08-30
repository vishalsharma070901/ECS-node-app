const express = require("express")
const app = express();

app.get("/", (req,res)=>{
 res.send("Hello from the node app deployed on AWS ECS")
})

app.get("/health",  (req,res)=>{
    res.status(200).send("Server is healthy");
    console.log("Server is healthy")
})


app.listen(3000, ()=>{
    console.log("Server is running at 3000")
})