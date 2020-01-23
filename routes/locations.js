const express = require("express");
const router = express.Router();
const locationsCtrl = require("../controllers/locations");
const reviewsCtrl = require("../controllers/reviews");

/* GET users listing. */
router.get("/", locationsCtrl.index);
router.get("/new", locationsCtrl.new);
router.get("/:id", locationsCtrl.show);

router.post("/", locationsCtrl.create);
router.post("/review/:id", reviewsCtrl.create);

module.exports = router;
