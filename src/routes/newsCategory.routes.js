import express from "express";
import NewsCategoryController from "../controllers/newsCategory.controller.js";
import authMiddleware from "../middlewares/auth.js";
import validateForm from "../validations/auth.js";

const { validateNewsCategory } = validateForm;
const { auth, isAdmin } = authMiddleware;
const {
  listNewsCategories,
  createNewsCategory,
  updateNewsCategory,
  deleteNewsCategory,
} = NewsCategoryController;

const newsCategoryRoutes = express.Router();

newsCategoryRoutes.get("/", listNewsCategories);
newsCategoryRoutes.post(
  "/",
  auth,
  isAdmin,
  validateNewsCategory,
  createNewsCategory
);
newsCategoryRoutes.put(
  "/:newsCategoryId",
  auth,
  isAdmin,
  validateNewsCategory,
  updateNewsCategory
);
newsCategoryRoutes.delete(
  "/:newsCategoryId",
  auth,
  isAdmin,
  deleteNewsCategory
);

export default newsCategoryRoutes;
