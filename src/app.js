const express = require("express")
const app = express()

//middleware 
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Expense Tracker API is running ")
})

app.post("/test",(req,res)=>{
    const data = req.body
    res.json({
        message:"data received",
        receivedData:data
    })
})

module.exports=app