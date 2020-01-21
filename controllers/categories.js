const Location = require("../models/location");

const index = (req, res) => {
  res.render("categories/index");
};

module.exports = {
  index
};
