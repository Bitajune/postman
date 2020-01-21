const Location = require("../models/location");

const index = (req, res) => {
  Location.find({}, (err, location) => {
    res.render("locations/index", {
      title: "List Of Locations",
      user: req.user,
      location
    });
    console.log(location);
  });
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
