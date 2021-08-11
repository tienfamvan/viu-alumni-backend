import Menu from "../models/menu.model.js";
import statusCodes from "../utils/statusCodes.js";
import messages from "../utils/messages.js";

const {
  createdSuccessfully,
  updatedSuccessfully,
  deletedSuccessfully,
  loginSuccessfully,
  notFoundUser,
} = messages;
const { success, created, serverError, notFound } = statusCodes;

export default class MenuController {
  static listMenus = async (req, res) => {
    try {
      const data = await Menu.find();

      return res.status(success).json({ data });
    } catch (error) {
      return res.status(serverError).json({ message: "Error!" });
    }
  };

  static createMenu = async (req, res) => {
    try {
      const newMenu = req.body;
      await Menu.create(newMenu);

      return res
        .status(created)
        .json({ message: "Tạo menu thành công", data: newMenu });
    } catch (error) {
      return res.status(serverError).json({ message: "Error!" });
    }
  };

  static updateMenu = async (req, res) => {
    const condition = { _id: req.params.menuId };
    try {
      const data = await Menu.findOneAndUpdate(condition, req.body);
      return res.status(success).json({ message: updatedSuccessfully, data });
    } catch (error) {
      return res.status(serverError).json({ message: error || "Error!" });
    }
  };

  static deleteMenu = async (req, res) => {
    const condition = { _id: req.params.menuId };
    try {
      const data = await Menu.findOneAndDelete(condition);
      return res.status(success).json({ message: deletedSuccessfully, data });
    } catch (error) {
      return res.status(serverError).json({ message: error || "Error!" });
    }
  };
}
