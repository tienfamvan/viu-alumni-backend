import express from "express";
import CountryController from "../controllers/country.controller.js";
import authMiddleware from "../middlewares/auth.js";

const { auth, isAdmin } = authMiddleware;
const { listCountries, createCountry, updateCountry, deleteCountry } =
  CountryController;

const countryRoutes = express.Router();

countryRoutes.get("/", listCountries);
countryRoutes.post("/", auth, isAdmin, createCountry);
countryRoutes.put("/:countryId", auth, isAdmin, updateCountry);
countryRoutes.delete("/:countryId", auth, isAdmin, deleteCountry);

export default countryRoutes;
