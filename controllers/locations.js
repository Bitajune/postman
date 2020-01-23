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

const review = (req, res) => {
  Location.find({}, (err, location) => {
    res.render("locations/show", {
      title: "Add A Review",
      user: req.user,
      location
    });
  });
};

const show = (req, res) => {
  Location.findById(req.params.id).exec((err, location) => {
    res.render("locations/show", {
      title: "Add A Review",
      user: req.user,
      location
    });
  });
};

const create = (req, res) => {
  const location = new Location(req.body);
  location.save(err => {
    if (err) console.log("error", location);
    res.redirect("/locations");
  });
};

module.exports = {
  index,
  new: newLocation,
  create,
  review,
  show
};
