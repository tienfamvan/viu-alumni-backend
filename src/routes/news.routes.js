import express from "express";
import NewsController from "../controllers/news.controller.js";
import authMiddleware from "../middlewares/auth.js";
import validateForm from "../validations/auth.js";
import toBase64 from "../middlewares/uploadFileBase64.js";

const { fileField, convertBase64 } = toBase64;
const { validateNews } = validateForm;
const { auth, isAdmin } = authMiddleware;
const { listNews, createNews, updateNews, deleteNews } = NewsController;
const newsRoutes = express.Router();

newsRoutes.get("/", listNews);
newsRoutes.post(
  "/",
  auth,
  isAdmin,
  fileField("image"),
  validateNews,
  convertBase64,
  createNews
);
newsRoutes.put(
  "/:newsId",
  auth,
  isAdmin,
  fileField("image"),
  validateNews,
  convertBase64,
  updateNews
);
newsRoutes.delete("/:newsId", auth, isAdmin, deleteNews);

export default newsRoutes;
