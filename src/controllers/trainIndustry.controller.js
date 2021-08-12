import TrainIndustry from "../models/trainIndustry.model.js";
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

export default class MenuController {
  static listTrainIndustries = async (req, res) => {
    try {
      const data = await TrainIndustry.find();

      return res.status(success).json({ data });
    } catch (error) {
      return res.status(serverError).json({ message: "Error!" });
    }
  };

  static createTrainIndustry = async (req, res) => {
    try {
      const newTrainIndustry = req.body;
      const data = await TrainIndustry.create(newTrainIndustry);

      return res
        .status(created)
        .json({ message: "Tạo ngành đào tạo thành công", data });
    } catch (error) {
      return res.status(serverError).json({ message: "Error!" });
    }
  };

  static updateTrainIndustry = async (req, res) => {
    const condition = { _id: req.params.trainIndustryId };
    try {
      const data = await TrainIndustry.findOneAndUpdate(condition, req.body);
      if (!data) return res.status(notFound).json({ message: dataNotFound });
      return res.status(success).json({ message: updatedSuccessfully, data });
    } catch (error) {
      return res.status(serverError).json({ message: error || "Error!" });
    }
  };

  static deleteTrainIndustry = async (req, res) => {
    const condition = { _id: req.params.trainIndustryId };
    try {
      const data = await TrainIndustry.findOneAndDelete(condition);
      if (!data) return res.status(notFound).json({ message: dataNotFound });
      return res.status(success).json({ message: deletedSuccessfully, data });
    } catch (error) {
      return res.status(serverError).json({ message: error || "Error!" });
    }
  };
}
