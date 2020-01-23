const express = require("express");
const router = express.Router();
const locationsCtrl = require("../controllers/locations");

/* GET users listing. */
router.get("/", locationsCtrl.index);
router.get("/new", locationsCtrl.new);
// router.get("/reviews/:id", locationsCtrl.review);
router.get("/:id", locationsCtrl.show);

router.post("/", locationsCtrl.create);

module.exports = router;
