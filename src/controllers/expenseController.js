
const Expense = require('../models/Expense')
exports.getExpenses = async (req,res)=>{
    const expenses = await Expense.find({userId : req.user})
    res.json(userExpenses)
}

exports.addExpense =async (req,res)=>{
    const {title , amount , category , date} = req.body

    const newExpense = await Expense.create({
        userId: req.user,
        title,
        amount,
        category,
        date
    })


    res.status(201).json(newExpense)
}

exports.updateExpense = async (req,res)=>{
    try {
    const expense = await Expense.findOneAndUpdate(
      {
        _id: req.params.id,
        userId: req.user
      },
      req.body,
      { new: true }
    )

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" })
    }

    res.json(expense)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}

exports.deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findOneAndDelete({
      _id: req.params.id,
      userId: req.user
    })

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" })
    }

    res.json({ message: "Expense deleted successfully" })
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}
