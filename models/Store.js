const mongoose = require("mongoose");
const { stringifyQuery } = require("next/dist/server/server-route-utils");

const storeSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  name: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
    enum: ["Landing Page", "E-Commerce", "Portfolio", "Leads"],
  },
  theme: {
    type: String,
    required: true,
    enum: ["Página de venda", "Soluçāo para o seu negócio"],
  },
  creator: {
    id: {
      required: true,
      type: mongoose.Types.ObjectId,
    },
    firstName: {
      required: true,
      type: String,
    },
    lastName: {
      required: true,
      type: String,
    },
    address: {
      required: true,
      type: String,
    },
    ap: {
      required: true,
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
    },
    telefone: {
      type: String,
      required: true,
    },
  },
});

module.exports = mongoose.model("Store", storeSchema);
