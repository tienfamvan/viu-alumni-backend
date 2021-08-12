import mongoose from "mongoose";

const trainIndustrySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "https://i.imgur.com/WxNkK7J.png",
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
});

const TrainIndustry = mongoose.model("TrainIndustry", trainIndustrySchema);

export default TrainIndustry;
