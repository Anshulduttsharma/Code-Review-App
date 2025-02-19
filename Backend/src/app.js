const express = require("express");
const aiRoutes = require("./Routes/ai.routes")
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())


app.get("/", (req,res)=>{
    res.send("Hello Server!!")
})


app.use("/ai", aiRoutes)



module.exports = app;