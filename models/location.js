const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  Name: String,
  Address: String,
  Phone: String,
  Website: String
});

module.exports = mongoose.model("Location", locationSchema);
