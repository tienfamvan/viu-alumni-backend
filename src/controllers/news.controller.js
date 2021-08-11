import News from "../models/news.model.js";
import statusCodes from "../utils/statusCodes.js";
import messages from "../utils/messages.js";

const {
  createdSuccessfully,
  updatedSuccessfully,
  deletedSuccessfully,
  loginSuccessfully,
  dataList,
  dataNotFound,
} = messages;
const { success, created, serverError, notFound } = statusCodes;
export default class NewsController {
  static listNews = async (req, res) => {
    try {
      const data = await News.find();

      return res.status(success).json(data);
    } catch (error) {
      return res.status(serverError).json({ message: "Error!" });
    }
  };

  static createNews = async (req, res) => {
    try {
      const newNews = { ...req.body, userId: req.user._id };
      await News.create(newNews);

      return res
        .status(created)
        .json({ message: createdSuccessfully, data: newNews });
    } catch (error) {
      return res.status(serverError).json({ message: "Error!" });
    }
  };

  static updateNews = async (req, res) => {
    const condition = { _id: req.params.newsId };
    try {
      const data = await News.findOneAndUpdate(condition, req.body);
      return res.status(success).json({ message: updatedSuccessfully, data });
    } catch (error) {
      return res.status(serverError).json({ message: error || "Error!" });
    }
  };

  static deleteNews = async (req, res) => {
    const condition = { _id: req.params.newsId };
    try {
      const data = await News.findOneAndDelete(condition);
      return res.status(success).json({ message: deletedSuccessfully, data });
    } catch (error) {
      return res.status(serverError).json({ message: error || "Error!" });
    }
  };
}
