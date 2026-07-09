const mongoose = require("mongoose");

const kycSchema = new mongoose.Schema({
  documentType: String,
  documentNumber: String,
  idProof: String,
});

module.exports = mongoose.model("Kyc", kycSchema);