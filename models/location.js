const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  name: String,
  address: String,
  phone: String,
  website: String,
  image: String
});

const reviewSchema = new Schema(
  {
    content: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Location", locationSchema);
