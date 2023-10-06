const { model, Schema } = require("mongoose");

const items = new Schema({
  item_name: String,
  sid: Schema.Types.ObjectId,
  price: String,
  imageUrl: String,
});
module.exports = model("items", items);
