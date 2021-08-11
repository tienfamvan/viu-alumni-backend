import mongoose from "mongoose";

const recruitSchema = mongoose.Schema(
  {
    jobName: {
      type: String,
      default: "",
    },
    companyName: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "https://i.imgur.com/i9umepr.png",
    },
    email: {
      type: String,
      default: "",
    },
    phoneNumber: {
      type: String,
      default: "",
    },
    salaryMin: {
      type: Number,
      default: 0,
    },
    salaryMax: {
      type: Number,
      default: 0,
    },
    dateBegin: {
      type: Date,
      default: Date.now(),
    },
    dateEnd: {
      type: Date,
      default: Date.now(),
    },
    skills: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Recruit = mongoose.model("Recruit", recruitSchema);

export default Recruit;
