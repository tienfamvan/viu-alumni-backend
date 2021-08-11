import Zone from "../models/zone.model.js";
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
export default class ZoneController {
  static listZones = async (req, res) => {
    try {
      const data = await Zone.find();

      return res.status(success).json({ data });
    } catch (error) {
      return res.status(serverError).json({ message: "Error!" });
    }
  };

  static createZone = async (req, res) => {
    try {
      const newZone = req.body;

      await Zone.create(newZone);

      return res
        .status(created)
        .json({ message: createdSuccessfully, data: newZone });
    } catch (error) {
      return res.status(serverError).json({ message: error || "Error!" });
    }
  };

  static updateZone = async (req, res) => {
    const condition = { _id: req.params.zoneId };
    try {
      const data = await Zone.findOneAndUpdate(condition, req.body);
      return res.status(success).json({ message: updatedSuccessfully, data });
    } catch (error) {
      return res.status(serverError).json({ message: error || "Error!" });
    }
  };

  static deleteZone = async (req, res) => {
    const condition = { _id: req.params.zoneId };
    try {
      const data = await Zone.findOneAndDelete(condition);
      return res.status(success).json({ message: deletedSuccessfully, data });
    } catch (error) {
      return res.status(serverError).json({ message: error || "Error!" });
    }
  };
}
