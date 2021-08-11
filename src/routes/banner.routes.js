import express from "express";
import BannerController from "../controllers/banner.controller.js";
import authMiddleware from "../middlewares/auth.js";
import validateForm from "../validations/auth.js";
import toBase64 from "../middlewares/uploadFileBase64.js";

const { fileField, convertBase64 } = toBase64;
const { validateNewsCategory } = validateForm;
const { auth, isAdmin } = authMiddleware;
const { listBanners, createBanner, updateBanner, deleteBanner } =
  BannerController;

const bannerRoutes = express.Router();

bannerRoutes.get("/", listBanners);
bannerRoutes.post(
  "/",
  auth,
  isAdmin,
  fileField("image"),
  convertBase64,
  validateNewsCategory,
  createBanner
);
bannerRoutes.put(
  "/:bannerId",
  auth,
  isAdmin,
  fileField("image"),
  convertBase64,
  validateNewsCategory,
  updateBanner
);
bannerRoutes.delete("/:bannerId", auth, isAdmin, deleteBanner);

export default bannerRoutes;
