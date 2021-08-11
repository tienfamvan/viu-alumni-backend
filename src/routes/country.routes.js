import express from "express";
import CountryController from "../controllers/country.controller.js";
import authMiddleware from "../middlewares/auth.js";
import validateForm from "../validations/auth.js";

const { validateZone } = validateForm;
const { auth, isAdmin } = authMiddleware;
const { listCountries, createCountry, updateCountry, deleteCountry } =
  CountryController;

const countryRoutes = express.Router();

countryRoutes.get("/", listCountries);
countryRoutes.post("/", auth, isAdmin, validateZone, createCountry);
countryRoutes.put("/:countryId", auth, isAdmin, validateZone, updateCountry);
countryRoutes.delete("/:countryId", auth, isAdmin, deleteCountry);

export default countryRoutes;
