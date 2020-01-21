const express = require("express");
const router = express.Router();
const categoriesCtrl = require("../controllers/categories");

/* GET users listing. */
router.get("/", categoriesCtrl.index);

module.exports = router;
