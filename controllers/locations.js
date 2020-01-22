const Location = require("../models/location");

const index = (req, res) => {
  Location.find({}, (err, location) => {
    res.render("locations/index", {
      title: "List Of Locations",
      user: req.user,
      location
    });
  });
};

const newLocation = (req, res) => {
  Location.find({}, (err, location) => {
    res.render("locations/new", {
      title: "Add A Location",
      user: req.user,
      location
    });
  });
};
const create = (req, res) => {};

module.exports = {
  index,
  new: newLocation,
  create
};
