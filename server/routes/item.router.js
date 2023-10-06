var express = require("express");
var router = express.Router();
const item = require("../controllers/items.controller");

router.post("/", item.addItems);
// router.get("/main", categories.getMainCategories); // need user id
// router.post("/sub", subCategories.addSubCategories); // need user id
// router.get("/sub", subCategories.getSubCategories); // need user id
// router.put("/sub/:id", subCategories.updateSubCategories); // need user id
// router.delete("/sub/:id", subCategories.deleteSubCategories); // need user id

module.exports = router;
