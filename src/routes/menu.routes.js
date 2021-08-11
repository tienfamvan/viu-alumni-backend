import express from "express";
import MenuController from "../controllers/menu.controller.js";
import authMiddleware from "../middlewares/auth.js";

const { auth, isAdmin } = authMiddleware;
const { listMenus, createMenu, updateMenu, deleteMenu } = MenuController;

const menuRoutes = express.Router();

menuRoutes.get("/", listMenus);
menuRoutes.post("/", auth, isAdmin, createMenu);
menuRoutes.put("/:menuId", auth, isAdmin, updateMenu);
menuRoutes.delete("/:menuId", auth, isAdmin, deleteMenu);

export default menuRoutes;
