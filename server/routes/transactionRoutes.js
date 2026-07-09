const express = require("express");
const router = express.Router();

const {
  addTransaction,
  getTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction
} = require("../controllers/transactionController");

router.post("/add", addTransaction);
router.get("/", getTransactions);
router.get("/:id", getTransactionById);
router.put("/update/:id", updateTransaction);
router.delete("/delete/:id", deleteTransaction);

module.exports = router;