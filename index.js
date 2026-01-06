const express = require('express')
const app = express()

const PORT = process.env.PORT || 300
app.get('/',(req,res)=>{
    res.send('Express deployed successfully')
});

app.listen(PORT , ()=>{
    console.log("server is running ")
})