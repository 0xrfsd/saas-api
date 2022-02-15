const Store = require("../models/Store");

exports.read = async (req, res) => {
  try {
    const _id = req.params["id"];

    const theme = await Theme.findOne({ _id }).lean();

    if (theme) {
      return res.status(200).json(theme);
    }
  } catch (e) {
    return res.status(500).json({ status: "Erro!", error: e });
  }
};

exports.create = async (req, res) => {
  try {
    const { name, tipo, theme, creator } = req.body;

    const store = new Store({
      name,
      tipo,
      theme,
      creator,
    });

    await store.save();
    return res
      .status(201)
      .json({ status: "Created", message: "Loja criada com sucesso!" });
  } catch (e) {
    return res.status(500).json({ status: "Erro", error: e });
  }
};
