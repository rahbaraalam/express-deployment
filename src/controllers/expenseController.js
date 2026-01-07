let expenses = []

exports.getExpenses = (req,res)=>{
    const userExpenses = expenses.filter(expense => expense.userId===req.user)
    res.json(userExpenses)
}

exports.addExpense = (req,res)=>{
    const {title , amount , category , date} = req.body

    const newExpense = {
        id : expenses.length + 1,
        userId:req.user,
        title,
        amount,
        category,
        date
    }

    expenses.push(newExpense)

    res.status(201).json(newExpense)
}

exports.updateExpense = (req,res)=>{
    const id = parseInt(req.params.id)
    const expense = expenses.find(e=>e.id === id)

    if (!expense){
        return res.status(404).json({message:"expense not fount"})
    }

    expense.title = req.body.title || expense.title
    expense.amount = req.body.amount || expense.amount
    expense.category = req.body.category || expense.category
    expense.date = req.body.date || expense.date

    res.json(expense)
}

exports.deleteExpense = (req,res)=>{
    const id = parseInt(req.params.id)
    expenses = expenses.filter(e=>e.id !== id)

    res.json({message:"expenses delete"})
}