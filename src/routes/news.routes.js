import express from "express";
import NewsController from "../controllers/news.controller.js";
import authMiddleware from "../middlewares/auth.js";

const { auth, isAdmin } = authMiddleware;
const { listNews, createNews, updateNews, deleteNews } = NewsController;
const newsRoutes = express.Router();

newsRoutes.get("/", listNews);
newsRoutes.post("/", auth, isAdmin, createNews);
newsRoutes.put("/:newsId", auth, isAdmin, updateNews);
newsRoutes.delete("/:newsId", auth, isAdmin, deleteNews);

export default newsRoutes;
