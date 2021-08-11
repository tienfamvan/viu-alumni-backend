import User from "../models/user.model.js";
import statusCodes from "../utils/statusCodes.js";
import messages from "../utils/messages.js";
import misc from "../helpers/misc.js";

const {
  successResponse,
  errorResponse,
  generateToken,
  generateHashedPassword,
} = misc;
const { success, created, serverError, notFound } = statusCodes;
const {
  createdSuccessfully,
  updatedSuccessfully,
  deletedSuccessfully,
  loginSuccessful,
  dataList,
  dataNotFound,
} = messages;

export default class UserController {
  static createUser = async (req, res) => {
    try {
      const newUser = { ...req.body, isStudent: true, isAdmin: false };
      const hashedPassword = await generateHashedPassword(newUser.password);
      newUser.password = hashedPassword;
      await User.create(newUser);

      return res
        .status(created)
        .json({ message: "Tạo người dùng thành công", data: newUser });
    } catch (error) {
      return res.status(serverError).json({ message: "Error!" });
    }
  };

  static updateUser = async (req, res) => {
    try {
      const condition = { _id: req.params.id };
      const user = req.body;
      const newUser = await User.findOneAndUpdate(condition, user);

      return res
        .status(success)
        .json({ message: updatedSuccessfully, data: newUser });
    } catch (error) {
      return res.status(serverError).json({ message: "Error!" });
    }
  };

  static deleteUser = async (req, res) => {
    try {
      const condition = { _id: req.params.id };
      const status = await User.findOneAndDelete(condition);
      return res.status(success).json({ message: deletedSuccessfully });
    } catch (error) {
      return res.status(serverError).json({ message: "Error!" });
    }
  };

  static getUsers = async (req, res) => {
    try {
      const data = await User.findOne({ _id: req.user._id }).select(
        "-password"
      );

      if (!data) {
        return res.status(notFound).json(res, notFound, dataNotFound);
      }

      return res.status(success).json(data);
    } catch (error) {
      return res.status(serverError).json({ message: "Error!" });
    }
  };

  static loginUser = async (req, res) => {
    try {
      const userData = req.userData;
      const tokenData = {
        _id: userData.id,
        ...userData,
      };
      const token = await generateToken(tokenData);
      return res
        .status(created)
        .json({ message: loginSuccessful, data: userData, token });
    } catch (error) {
      return res.status(serverError).json({ message: "Error!" });
    }
  };
}