import express from "express";
import TrainIndustryController from "../controllers/trainIndustry.controller.js";
import authMiddleware from "../middlewares/auth.js";
import validateForm from "../validations/auth.js";
import toBase64 from "../middlewares/uploadFileBase64.js";

const { fileField, convertBase64 } = toBase64;
const { validateZone } = validateForm;
const { auth, isAdmin } = authMiddleware;
const {
  listTrainIndustries,
  createTrainIndustry,
  updateTrainIndustry,
  deleteTrainIndustry,
} = TrainIndustryController;

const trainIndustryRoutes = express.Router();

trainIndustryRoutes.get("/", listTrainIndustries);
trainIndustryRoutes.post(
  "/",
  auth,
  isAdmin,
  fileField("image"),
  validateZone,
  convertBase64,
  createTrainIndustry
);
trainIndustryRoutes.put(
  "/:trainIndustryId",
  auth,
  isAdmin,
  fileField("image"),
  validateZone,
  convertBase64,
  updateTrainIndustry
);
trainIndustryRoutes.delete(
  "/:trainIndustryId",
  auth,
  isAdmin,
  deleteTrainIndustry
);

export default trainIndustryRoutes;
