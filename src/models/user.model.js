import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    useId: {
      type: Number,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
      default: "https://i.imgur.com/WxNkK7J.png",
    },
    dateBirth: {
      type: Date,
      default: Date("10/16/1995"),
    },
    phoneNumber: {
      type: String,
      default: "",
    },
    faculty: {
      type: String,
      default: "",
    },
    majors: {
      type: String,
      default: "",
    },
    userClass: {
      type: String,
      default: "",
    },
    status: {
      type: Number,
      default: "",
    },
    isAdmin: {
      type: Boolean,
    },
    isStudent: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
