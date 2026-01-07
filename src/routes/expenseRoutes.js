const express = require("express")
const router = express.Router()
const { protect } = require("../middleware/authMiddleware")

router.use(protect)
const {
    getExpenses,
    addExpense,
    updateExpense,
    deleteExpense
} = require("../controllers/expenseController")


router.get("/",getExpenses)    
router.post("/",addExpense)
router.put("/:id",updateExpense)
router.delete("/:id",deleteExpense)



module.exports = router