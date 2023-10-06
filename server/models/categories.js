const { model, Schema } = require("mongoose");

const mainCategories = new Schema({
  categories_name: String,
});
module.exports = model("mainCategories", mainCategories);
