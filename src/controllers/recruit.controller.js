import Recruit from "../models/recruit.model.js";
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
      await Recruit.create(newRecruit);

      return res
        .status(created)
        .json({ message: createdSuccessfully, data: newRecruit });
    } catch (error) {
      return res.status(serverError).json({ message: "Error!" });
    }
  };

  static updateRecruit = async (req, res) => {
    const condition = { _id: req.params.recruitId };
    try {
      const data = await Recruit.findOneAndUpdate(condition, req.body);
      return res.status(success).json({ message: updatedSuccessfully, data });
    } catch (error) {
      return res.status(serverError).json({ message: error || "Error!" });
    }
  };

  static deleteRecruit = async (req, res) => {
    const condition = { _id: req.params.recruitId };
    try {
      const data = await Recruit.findOneAndDelete(condition);
      return res.status(success).json({ message: deletedSuccessfully, data });
    } catch (error) {
      return res.status(serverError).json({ message: error || "Error!" });
    }
  };
}
