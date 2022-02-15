const Component = require("../models/Component");

exports.read = async (req, res) => {
  try {
    const _id = req.params["id"];

    const component = await Component.findOne({ _id }).lean();

    if (component) {
      return res.status(200).json(component);
    } else {
      return res
        .status(400)
        .json({ status: "Erro", message: "Component not found" });
    }
  } catch (e) {
    return res.status(500).json({ status: "Erro!", error: e });
  }
};

exports.create = async (req, res) => {
  try {
    const { name, styles } = req.body;

    const creatorId = "0xrfsd";

    const component = new Component({
      creatorId,
      name,
      styles,
    });

    await component.save();
    return res
      .status(201)
      .json({ status: "Created", message: "Componente criado com sucesso!" });
  } catch (e) {
    return res.status(500).json({ status: "Erro", error: e });
  }
};
