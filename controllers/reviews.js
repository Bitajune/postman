const Location = require("../models/location");
const Review = require("../models/review");

const create = async (req, res) => {
  try {
    const createReview = await Review.create(req.body);
    const location = await Location.findById(req.params.id);
    location.reviews.push(createReview);
    await location.save();
    res.redirect(`/locations/${location._id}`);
  } catch (err) {}
};

module.exports = {
  create
};
