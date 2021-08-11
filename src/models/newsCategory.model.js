import mongoose from "mongoose";

const newsCategorySchema = mongoose.Schema(
  {
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      refs: "NewsCategory",
      default: null,
    },
    title: {
      type: String,
      required: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const NewsCategory = mongoose.model("NewsCategory", newsCategorySchema);

export default NewsCategory;
