const Location = require("../models/location");

const create = (req, res) => {
  Location.findById(req.params.id, (err, location) => {
    location.reviews.push(req.body);
    location.save(err => {
      res.redirect(`/locations/${location._id}`);
    });
  });
};

module.exports = {
  create
};
