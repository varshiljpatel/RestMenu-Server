var express = require("express");
var router = express.Router();
const categories = require("../controllers/categories/mainCategories");
const subCategories = require("../controllers/categories/subCategories");

router.post("/main", categories.addMainCategories); // need user id
router.get("/main", categories.getMainCategories); // need user id
router.post("/sub", subCategories.addSubCategories); // need user id
router.get("/sub", subCategories.getSubCategories); // need user id
router.put("/sub/:id", subCategories.updateSubCategories); // need user id
router.delete("/sub/:id", subCategories.deleteSubCategories); // need user id

module.exports = router;
