import express from "express";
import userController from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.js";
import validateForm from "../validations/auth.js";
import toBase64 from "../middlewares/uploadFileBase64.js";

const { fileField, convertBase64 } = toBase64;
const { validateSignUp, validateLogin, validateZone } = validateForm;
const { auth, isAdmin, checkUseIdTaken, checkLogin } = authMiddleware;
const { createUser, updateUser, deleteUser, getUser, loginUser } =
  userController;

const userRoute = express.Router();

import test from "../test.js";

userRoute.post(
  "/signup",
  fileField("image"),
  validateSignUp,
  checkUseIdTaken,
  convertBase64,
  createUser
);
userRoute.put(
  "/:id",
  fileField("image"),
  auth,
  validateSignUp,
  convertBase64,
  updateUser
);
userRoute.delete("/:id", auth, isAdmin, deleteUser);
userRoute.get("/", auth, getUser);
userRoute.post("/login", validateLogin, checkLogin, loginUser);

export default userRoute;
