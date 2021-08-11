import express from "express";
import RecruitController from "../controllers/recruit.controller.js";
import authMiddleware from "../middlewares/auth.js";

const { auth, isAdmin } = authMiddleware;
const { listRecruits, createRecruit, updateRecruit, deleteRecruit } =
  RecruitController;
const recruitRoutes = express.Router();

recruitRoutes.get("/", listRecruits);
recruitRoutes.post("/", auth, isAdmin, createRecruit);
recruitRoutes.put("/:recruitId", auth, isAdmin, updateRecruit);
recruitRoutes.delete("/:recruitId", auth, isAdmin, deleteRecruit);

export default recruitRoutes;
