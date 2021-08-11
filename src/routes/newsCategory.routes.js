import express from "express";
import NewsCategoryController from "../controllers/newsCategory.controller.js";
import authMiddleware from "../middlewares/auth.js";

const { auth, isAdmin } = authMiddleware;
const {
  listNewsCategories,
  createNewsCategory,
  updateNewsCategory,
  deleteNewsCategory,
} = NewsCategoryController;

const newsCategoryRoutes = express.Router();

newsCategoryRoutes.get("/", listNewsCategories);
newsCategoryRoutes.post("/", auth, isAdmin, createNewsCategory);
newsCategoryRoutes.put("/:newsCategoryId", auth, isAdmin, updateNewsCategory);
newsCategoryRoutes.delete(
  "/:newsCategoryId",
  auth,
  isAdmin,
  deleteNewsCategory
);

export default newsCategoryRoutes;
