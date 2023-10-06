const mainCategories = require("../../models/categories");

exports.addMainCategories = async (req, res) => {
  const { name } = req.body;
  if (name == undefined || name == "") {
    return res
      .status(400)
      .json({ success: false, message: "categori name cannot be empty" });
  }
  try {
    const add = new mainCategories({
      categories_name: name,
    });
    await add.save();

    return res
      .status(201)
      .json({ success: true, message: "categorie add successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.getMainCategories = async (req, res) => {
  try {
    const get = await mainCategories.find().select("-__v");
    return res.status(200).json({ success: true, data: get });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
