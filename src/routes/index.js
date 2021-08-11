import express from "express";
import userRoute from "./user.routes.js";
import bannerRoutes from "./banner.routes.js";
import menuRoutes from "./menu.routes.js";
import countryRoutes from "./country.routes.js";
import zoneRoutes from "./zone.routes.js";
import newsCategoryRoutes from "./newsCategory.routes.js";
import newsRoutes from "./news.routes.js";
import recruitRoutes from "./recruit.routes.js";

const routes = express.Router();

routes.use("/api/user", userRoute);
routes.use("/api/banner", bannerRoutes);
routes.use("/api/menu", menuRoutes);
routes.use("/api/country", countryRoutes);
routes.use("/api/zone", zoneRoutes);
routes.use("/api/news-category", newsCategoryRoutes);
routes.use("/api/news", newsRoutes);
routes.use("/api/recruit", recruitRoutes);

export default routes;
