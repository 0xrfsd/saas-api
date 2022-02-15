const mongoose = require("mongoose");

const componentSchema = new mongoose.Schema({
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
  styles: {
    primary: String,
    secondary: String,
    parent: {
      display: String,
      flexDirection: String,
      justifyContent: String,
      alignItems: String,
      width: String,
      height: String,
      paddingLeft: Number,
      paddingRight: Number,
    },
    child: {
      display: String,
      flexDirection: String,
      justifyContent: String,
      alignItems: String,
      height: Number,
      width: Number,
      borderRadius: String,
      backgroundColor: String,
      padding: Number,
      border: String,
    },
  },
});

module.exports = mongoose.model("Component", componentSchema);
