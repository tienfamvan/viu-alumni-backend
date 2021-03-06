import Country from "../models/country.model.js";
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

export default class CountryController {
  static listCountries = async (req, res) => {
    try {
      const data = await Country.find();

      return res.status(success).json({ data });
    } catch (error) {
      return res.status(serverError).json({ message: "Error!" });
    }
  };

  static createCountry = async (req, res) => {
    try {
      const newCountry = req.body;
      const data = await Country.create(newCountry);

      return res
        .status(created)
        .json({ message: "Tạo country thành công", data });
    } catch (error) {
      return res.status(serverError).json({ message: "Error!" });
    }
  };

  static updateCountry = async (req, res) => {
    const condition = { _id: req.params.countryId };
    try {
      const data = await Country.findOneAndUpdate(condition, req.body);
      if (!data) return res.status(notFound).json({ message: dataNotFound });
      return res.status(success).json({ message: updatedSuccessfully, data });
    } catch (error) {
      return res.status(serverError).json({ message: "Error!" });
    }
  };

  static deleteCountry = async (req, res) => {
    const condition = { _id: req.params.countryId };
    try {
      const data = await Country.findOneAndDelete(condition);
      if (!data) return res.status(notFound).json({ message: dataNotFound });
      return res.status(success).json({ message: deletedSuccessfully, data });
    } catch (error) {
      return res.status(serverError).json({ message: "Error!" });
    }
  };
}
