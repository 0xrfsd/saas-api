const mongoose = require("mongoose");

const themeSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  name: {
    type: String,
    required: true,
  },
  creatorId: {
    type: String,
    // type: mongoose.Types.ObjectId,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
    enum: ["Landing Page", "E-Commerce", "Portfolio", "Leads"],
  },
  styles: {
    main: {
      backgroundColor: String,
      width: String,
      height: String,
      padding: Number,
    },
    title: {
      color: String,
      fontSize: Number,
      fontWeight: String,
    },
    subTitle: {
      color: String,
      fontSize: Number,
    },
    buttonPrimary: {
      height: Number,
      width: String,
      padding: Number,
      borderRadius: Number,
      backgroundColor: String,
      display: String,
      flexDirection: String,
      justifyContent: String,
      alignItems: String,
    },
    buttonSecondary: {
      height: Number,
      width: String,
      padding: Number,
      borderRadius: Number,
      backgroundColor: String,
      border: String,
      display: String,
      flexDirection: String,
      justifyContent: String,
      alignItems: String,
    },
  },
  components: {
    type: [Object],
  },
});

module.exports = mongoose.model("Theme", themeSchema);
