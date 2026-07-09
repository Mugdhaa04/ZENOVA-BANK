const mongoose = require("mongoose");

const transferSchema = new mongoose.Schema({
  accountNumber: String,
  transferType: String,
  amount: String,
  date: String,
  description: String,
});

module.exports = mongoose.model("Transfer", transferSchema);