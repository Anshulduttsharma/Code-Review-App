const express = require("express");


const app = express()

app.get("/", (req,res)=>{
    res.send("Hello Server!!")
})

module.exports = app;