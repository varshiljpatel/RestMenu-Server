var express = require("express");

var router = express.Router();

router.use("/categorie", require("./categoriesRouter"));
router.use("/item", require("./item.router"));

module.exports = router;
