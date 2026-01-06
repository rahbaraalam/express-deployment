const express = require('express')
const app = express()

//midleware to read json 
app.use(express.json())

const PORT = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send('Hello from updated code.')
});


app.post('/test',(req,res)=>{
    const data = req.body

    res.json({
        message:"data received",
        receivedData: data
    })
})

app.listen(PORT , ()=>{
    console.log("server is running ")
})