const mongoose = require("mongoose");

const beneficiarySchema = new mongoose.Schema({
  name: String,
  mobile: String,
  email: String,
  address: String,
  city: String,
  state: String,
  country: String,
  accountNumber: String,
  accountType: String,
  ifsc: String,
  bankName: String,
});

module.exports = mongoose.model("Beneficiary", beneficiarySchema);