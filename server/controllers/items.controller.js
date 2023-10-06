const items = require("../models/items");

exports.addItems = async (req, res) => {
  const { name, sid, price, image } = req.body;

  try {
    const add = new items({
      sid,
      item_name: name,
      price,
      imageUrl: image,
    });
    await add.save();

    return res
      .status(201)
      .json({ success: true, message: "add item succesful." });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.getItems = async (req, res) => {};
