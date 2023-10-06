const { model, Schema } = require("mongoose");

const subCategories = new Schema({
  mid: {
    type: Schema.Types.ObjectId,
    ref: "mainCategories",
  },
  categories_name: String,
});
module.exports = model("subCategories", subCategories);
