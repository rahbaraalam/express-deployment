const express = require("express")
const app = express()

//middleware 
app.use(express.json())

//import expenses route
const expensesRoutes = require("./routes/expenseRoutes")
//import auth routes
const authRoutes = require("./routes/authRoutes")
app.get("/",(req,res)=>{
    res.send("Expense Tracker API is running ")
})

app.use('/expenses', expensesRoutes)
app.use("/auth",authRoutes)

module.exports=app