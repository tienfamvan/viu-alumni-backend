import express from "express";
import RecruitController from "../controllers/recruit.controller.js";
import authMiddleware from "../middlewares/auth.js";
import validateForm from "../validations/auth.js";
import toBase64 from "../middlewares/uploadFileBase64.js";

const { fileField, convertBase64 } = toBase64;
const { validateSignUp, validateLogin, validateZone, validateRecruit } =
  validateForm;
const { auth, isAdmin } = authMiddleware;
const { listRecruits, createRecruit, updateRecruit, deleteRecruit } =
  RecruitController;
const recruitRoutes = express.Router();

recruitRoutes.get("/", listRecruits);
recruitRoutes.post(
  "/",
  auth,
  isAdmin,
  fileField("image"),
  validateRecruit,
  convertBase64,
  createRecruit
);
recruitRoutes.put(
  "/:recruitId",
  auth,
  isAdmin,
  fileField("image"),
  validateRecruit,
  convertBase64,
  updateRecruit
);
recruitRoutes.delete("/:recruitId", auth, isAdmin, deleteRecruit);

export default recruitRoutes;
