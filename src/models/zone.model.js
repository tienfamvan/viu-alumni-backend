import mongoose from "mongoose";

const zoneSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "",
  },
  status: {
    type: Number,
    default: 0,
  },
});

const Zone = mongoose.model("Zone", zoneSchema);

export default Zone;
