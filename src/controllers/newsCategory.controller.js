import NewsCategory from "../models/newsCategory.model.js";
import statusCodes from "../utils/statusCodes.js";
import messages from "../utils/messages.js";

const {
  createdSuccessfully,
  updatedSuccessfully,
  deletedSuccessfully,
  loginSuccessfully,
  notFoundUser,
  dataNotFound,
} = messages;
const { success, created, serverError, notFound } = statusCodes;

export default class NewsCategoryController {
  static listNewsCategories = async (req, res) => {
    try {
      const data = await NewsCategory.find();

      return res.status(success).json({ data });
    } catch (error) {
      return res.status(serverError).json({ message: "Error!" });
    }
  };

  static createNewsCategory = async (req, res) => {
    try {
      const newNewsCategory = req.body;
      const data = await NewsCategory.create(newNewsCategory);

      return res.status(created).json({
        message: createdSuccessfully,
        data,
      });
    } catch (error) {
      return res.status(serverError).json({ message: "Error!" });
    }
  };

  static updateNewsCategory = async (req, res) => {
    const condition = { _id: req.params.newsCategoryId };
    try {
      const data = await NewsCategory.findOneAndUpdate(condition, req.body);
      if (!data) return res.status(notFound).json({ message: dataNotFound });
      return res.status(success).json({ message: updatedSuccessfully, data });
    } catch (error) {
      return res.status(serverError).json({ message: "Error!" });
    }
  };

  static deleteNewsCategory = async (req, res) => {
    const condition = { _id: req.params.newsCategoryId };
    try {
      const data = await NewsCategory.findOneAndDelete(condition);
      if (!data) return res.status(notFound).json({ message: dataNotFound });
      return res.status(success).json({ message: deletedSuccessfully, data });
    } catch (error) {
      return res.status(serverError).json({ message: "Error!" });
    }
  };
}
