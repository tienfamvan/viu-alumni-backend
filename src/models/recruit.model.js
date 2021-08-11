import mongoose from "mongoose";

const recruitSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      refs: "User",
      required: true,
      default: null,
    },
    jobName: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
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
      required: true,
    },
    salaryMax: {
      type: Number,
      required: true,
    },
    dateBegin: {
      type: Date,
      required: true,
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
    zoneId: {
      type: mongoose.Schema.Types.ObjectId,
      refs: "Zone",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Recruit = mongoose.model("Recruit", recruitSchema);

export default Recruit;
