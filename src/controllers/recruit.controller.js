import Recruit from "../models/recruit.model.js";
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
export default class RecruitController {
  static listRecruits = async (req, res) => {
    try {
      const data = await Recruit.find();

      return res.status(success).json({ data });
    } catch (error) {
      return res.status(serverError).json({ message: "Error!" });
    }
  };

  static createRecruit = async (req, res) => {
    try {
      const newRecruit = req.body;
      const data = await Recruit.create(newRecruit);

      return res.status(created).json({ message: createdSuccessfully, data });
    } catch (error) {
      return res.status(serverError).json({ message: "Error!" });
    }
  };

  static updateRecruit = async (req, res) => {
    const condition = { _id: req.params.recruitId };
    try {
      const data = await Recruit.findOneAndUpdate(condition, req.body);
      if (!data) return res.status(notFound).json({ message: dataNotFound });
      return res.status(success).json({ message: updatedSuccessfully, data });
    } catch (error) {
      return res.status(serverError).json({ message: "Error!" });
    }
  };

  static deleteRecruit = async (req, res) => {
    const condition = { _id: req.params.recruitId };
    try {
      const data = await Recruit.findOneAndDelete(condition);
      if (!data) return res.status(notFound).json({ message: dataNotFound });
      return res.status(success).json({ message: deletedSuccessfully, data });
    } catch (error) {
      return res.status(serverError).json({ message: "Error!" });
    }
  };
}
