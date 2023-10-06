const subCategories = require("../../models/subCategories");

exports.addSubCategories = async (req, res) => {
  const { id, name } = req.body;
  if (name == undefined || name == "") {
    return res
      .status(400)
      .json({ success: false, message: "categori name cannot be empty" });
  }
  try {
    try {
      const add = new subCategories({
        mid: id,
        categories_name: name,
      });
      await add.save();

      return res
        .status(201)
        .json({ success: true, message: "categorie add successfully" });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.getSubCategories = async (req, res) => {
  const { mid } = req.query;
  try {
    const get = await subCategories.find({ mid }).select("-__v");
    return res.status(200).json({ success: true, data: get });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateSubCategories = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const exist = await subCategories.exists({ _id: id });
    if (!exist) {
      return res
        .status(400)
        .json({ success: false, message: "this categori was not exist" });
    }
    const get = await subCategories.findByIdAndUpdate(id, {
      categories_name: name,
    });
    return res
      .status(200)
      .json({ success: true, messgae: "categorie update successful." });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteSubCategories = async (req, res) => {
  const { id } = req.params;

  try {
    const exist = await subCategories.exists({ _id: id });
    if (!exist) {
      return res
        .status(400)
        .json({ success: false, message: "this categori was not exist" });
    }
    const get = await subCategories.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ success: true, messgae: "categorie delete successful." });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
