import Zone from "../models/zone.model.js";
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

      const data = await Zone.create(newZone);

      return res.status(created).json({ message: createdSuccessfully, data });
    } catch (error) {
      return res.status(serverError).json({ message: "Error!" });
    }
  };

  static updateZone = async (req, res) => {
    const condition = { _id: req.params.zoneId };
    try {
      const data = await Zone.findOneAndUpdate(condition, req.body);
      if (!data) return res.status(notFound).json({ message: dataNotFound });
      return res.status(success).json({ message: updatedSuccessfully, data });
    } catch (error) {
      return res.status(serverError).json({ message: "Error!" });
    }
  };

  static deleteZone = async (req, res) => {
    const condition = { _id: req.params.zoneId };
    try {
      const data = await Zone.findOneAndDelete(condition);
      if (!data) return res.status(notFound).json({ message: dataNotFound });
      return res.status(success).json({ message: deletedSuccessfully, data });
    } catch (error) {
      return res.status(serverError).json({ message: "Error!" });
    }
  };
}
