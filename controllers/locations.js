const Location = require("../models/location");

const index = (req, res) => {
  //find all locations from db. then pass in view in a different key.
  res.render("locations/index", { title: "list of locations" });
};

const newLocation = (req, res) => {
  res.render("locations/new");
};

const create = (req, res) => {};

module.exports = {
  index,
  new: newLocation,
  create
};
