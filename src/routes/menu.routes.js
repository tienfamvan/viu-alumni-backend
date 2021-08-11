import express from "express";
import MenuController from "../controllers/menu.controller.js";
import authMiddleware from "../middlewares/auth.js";
import validateForm from "../validations/auth.js";

const { validateNewsCategory } = validateForm;
const { auth, isAdmin } = authMiddleware;
const { listMenus, createMenu, updateMenu, deleteMenu } = MenuController;

const menuRoutes = express.Router();

menuRoutes.get("/", listMenus);
menuRoutes.post("/", auth, isAdmin, validateNewsCategory, createMenu);
menuRoutes.put("/:menuId", auth, isAdmin, validateNewsCategory, updateMenu);
menuRoutes.delete("/:menuId", auth, isAdmin, deleteMenu);

export default menuRoutes;
