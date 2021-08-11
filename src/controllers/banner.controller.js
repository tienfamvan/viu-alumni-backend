import Banner from "../models/banner.model.js";
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

export default class BannerController {
  static listBanners = async (req, res) => {
    try {
      const data = await Banner.find();

      return res.status(success).json({ data });
    } catch (error) {
      return res.status(serverError).json({ message: "Error!" });
    }
  };

  static createBanner = async (req, res) => {
    try {
      const newBanner = req.body;
      await Banner.create(newBanner);

      return res
        .status(created)
        .json({ message: createdSuccessfully, data: newBanner });
    } catch (error) {
      return res.status(serverError).json({ message: "Error!" });
    }
  };

  static updateBanner = async (req, res) => {
    const condition = { _id: req.params.bannerId };
    try {
      const data = await Banner.findOneAndUpdate(condition, req.body);
      return res.status(success).json({ message: updatedSuccessfully, data });
    } catch (error) {
      return res.status(serverError).json({ message: error || "Error!" });
    }
  };

  static deleteBanner = async (req, res) => {
    const condition = { _id: req.params.bannerId };
    try {
      const data = await Banner.findOneAndDelete(condition);
      return res.status(success).json({ message: deletedSuccessfully, data });
    } catch (error) {
      return res.status(serverError).json({ message: error || "Error!" });
    }
  };
}
