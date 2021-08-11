import mongoose from "mongoose";

const newsSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      refs: "User",
      default: null,
    },
    newsCategoryId: {
      type: mongoose.Schema.Types.ObjectId,
      refs: "NewsCategory",
      default: null,
    },
    name: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "https://i.imgur.com/i9umepr.png",
    },
    shortDescription: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    status: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const News = mongoose.model("News", newsSchema);

export default News;
