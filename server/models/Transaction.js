const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  accountNumber: String,
  transactionType: String,
  transferMethod: String,
  amount: String,
  date: String,
  description: String,
});

module.exports = mongoose.model("Transaction", transactionSchema);