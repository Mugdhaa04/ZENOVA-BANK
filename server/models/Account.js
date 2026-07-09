const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  name: String,
  photo: String,
  type: String,
  mobile: String,
  email: String,
  branch: String,
  date: String,
});

module.exports = mongoose.model("Account", accountSchema);