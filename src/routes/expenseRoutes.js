const express = require("express")
const router = express.Router()

//fake db 
let expenses = []

//get all expenses

router.get("/",(req,res)=>{
    res.json(expenses)
})

//post new expenses

router.post("/",(req,res)=>{
    const {title , amount , category , date} = req.body

    const newExpenses = {
        id : expenses.length + 1,
        title,
        amount,
        category,
        date

    }

    expenses.push(newExpenses)

    res.status(201).json(newExpenses)

})

module.exports=router