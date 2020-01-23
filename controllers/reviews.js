const Location = require("../models/location");
const Review = require("../models/review");

const create = async (req, res) => {
  try {
    const createReview = await Review.create(req.body);
    const location = await Location.findById(req.params.id);
    console.log(location, "this is location");
    location.reviews.push(createReview);
    await location.save();
    res.redirect(`/locations/${location._id}`);
  } catch (err) {
    console.log(err, "this is error");
  }
};

module.exports = {
  create
};
