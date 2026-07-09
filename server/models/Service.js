const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: String,
  image: String,
});

module.exports = mongoose.model("Service", serviceSchema);