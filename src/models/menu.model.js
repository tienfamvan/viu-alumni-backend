import mongoose from "mongoose";

const menuSchema = mongoose.Schema(
  {
    parentId: {
      type: Number,
      default: null,
    },
    title: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Menu = mongoose.model("Menu", menuSchema);

export default Menu;
