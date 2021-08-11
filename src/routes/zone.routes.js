import express from "express";
import ZoneController from "../controllers/zone.controller.js";
import authMiddleware from "../middlewares/auth.js";

const { auth, isAdmin } = authMiddleware;
const { listZones, createZone, updateZone, deleteZone } = ZoneController;
const zoneRoutes = express.Router();

zoneRoutes.get("/", listZones);
zoneRoutes.post("/", auth, isAdmin, createZone);
zoneRoutes.put("/:zoneId", auth, isAdmin, updateZone);
zoneRoutes.delete("/:zoneId", auth, isAdmin, deleteZone);

export default zoneRoutes;
