const mongoose = require("mongoose");

const slideSchema = new mongoose.Schema({
  image: String,
});

module.exports = mongoose.model("Slide", slideSchema);