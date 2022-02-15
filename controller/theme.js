const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Theme = require("../models/Theme");

const JWT_SECRET = "c00oere!";

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
    const { name, tipo, styles, components, layout } = req.body;

    const creatorId = "0xrfsd";

    // name: string,
    // tipo: string,
    // styles: object,
    // components: [object],
    // layout: { head: [object], body: [object] }

    // Components
    // components let's store values of parameters that we could
    // fetch by an API endpoint and implemenet on-demand on our application

    // Layout
    // layout it's the structure that we're going to position our components
    // layout must auto scale for perfomance patterns

    // Styles
    // styles it's our main project stylesheet

    // I believe that store object must be fetched by the server using the refeerIf to the owner of the store
    // const store = {
    //    id: "",
    //    owner_id: "",
    //    billing_address: {
    //      street: "",
    //      zip: "",
    //      state: "",
    //      city: ""
    //    },
    //    name: "",
    //    thumbnail_url: ""
    // }

    const theme = new Theme({
      creatorId,
      name,
      tipo,
      styles,
      components,
      layout,
    });

    await theme.save();
    return res
      .status(201)
      .json({ status: "Created", message: "Tema criado com sucesso!" });
  } catch (e) {
    return res.status(500).json({ status: "Erro", error: e });
  }
};
