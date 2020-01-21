const Location = require("../models/location");

const index = (req, res) => {
  res.render("categories/index", { user: req.user });
};

module.exports = {
  index
};
