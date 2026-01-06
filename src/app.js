const express = require("express")
const app = express()

//middleware 
app.use(express.json())

//import expenses route
const expensesRoutes = require("./routes/expenseRoutes")

app.get("/",(req,res)=>{
    res.send("Expense Tracker API is running ")
})

app.use('/expenses', expensesRoutes)

module.exports=app