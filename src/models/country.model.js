import mongoose from "mongoose";

const countrySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

const Country = mongoose.model("Country", countrySchema);

export default Country;
