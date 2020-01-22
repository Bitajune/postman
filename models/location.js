const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  name: String,
  address: String,
  phone: String,
  website: String,
  image: String
});

module.exports = mongoose.model("locations", locationSchema);
