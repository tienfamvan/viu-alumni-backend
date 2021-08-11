import mongoose from "mongoose";

const menuSchema = mongoose.Schema(
  {
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      refs: "Menu",
      default: null,
    },
    title: {
      type: String,
      required: true,
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
