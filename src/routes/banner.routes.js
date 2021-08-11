import express from "express";
import BannerController from "../controllers/banner.controller.js";
import authMiddleware from "../middlewares/auth.js";

const { auth, isAdmin } = authMiddleware;
const { listBanners, createBanner, updateBanner, deleteBanner } =
  BannerController;

const bannerRoutes = express.Router();

bannerRoutes.get("/", listBanners);
bannerRoutes.post("/", auth, isAdmin, createBanner);
bannerRoutes.put("/:bannerId", auth, isAdmin, updateBanner);
bannerRoutes.delete("/:bannerId", auth, isAdmin, deleteBanner);

export default bannerRoutes;
