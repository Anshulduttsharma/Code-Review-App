const express = require("express");
const aiRoutes = require("./Routes/ai.routes")


const app = express()

app.get("/", (req,res)=>{
    res.send("Hello Server!!")
})

app.use("/ai", aiRoutes)
module.exports = app;