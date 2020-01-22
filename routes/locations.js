const express = require("express");
const router = express.Router();
const locationsCtrl = require("../controllers/locations");

/* GET users listing. */
router.get("/", locationsCtrl.index);
router.get("/new", locationsCtrl.new);
router.post("/", locationsCtrl.create);
//router.post("/:id", locationsCtrl.create);

module.exports = router;
