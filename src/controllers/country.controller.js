import Country from "../models/country.model.js";
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

export default class CountryController {
  static listCountries = async (req, res) => {
    try {
      const data = await Country.find();

      return res.status(success).json(data);
    } catch (error) {
      return res.status(serverError).json({ message: "Error!" });
    }
  };

  static createCountry = async (req, res) => {
    try {
      const newCountry = req.body;
      await Country.create(newCountry);

      return res
        .status(created)
        .json({ message: "Tạo country thành công", data: newCountry });
    } catch (error) {
      return res.status(serverError).json({ message: "Error!" });
    }
  };

  static updateCountry = async (req, res) => {
    const condition = { _id: req.params.countryId };
    try {
      const data = await Country.findOneAndUpdate(condition, req.body);
      return res.status(success).json({ message: updatedSuccessfully, data });
    } catch (error) {
      return res.status(serverError).json({ message: error || "Error!" });
    }
  };

  static deleteCountry = async (req, res) => {
    const condition = { _id: req.params.countryId };
    try {
      const data = await Country.findOneAndDelete(condition);
      return res.status(success).json({ message: deletedSuccessfully, data });
    } catch (error) {
      return res.status(serverError).json({ message: error || "Error!" });
    }
  };
}
