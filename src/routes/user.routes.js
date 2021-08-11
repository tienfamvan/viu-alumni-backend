import express from "express";
import userController from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.js";

const { auth, isAdmin, checkUseIdTaken, checkEmailTaken, checkLogin } =
  authMiddleware;
const { createUser, updateUser, deleteUser, getUsers, loginUser } =
  userController;

const userRoute = express.Router();

userRoute.post("/signup", checkUseIdTaken, checkEmailTaken, createUser);
userRoute.put("/:id", auth, updateUser);
userRoute.delete("/:id", auth, isAdmin, deleteUser);
userRoute.get("/", auth, getUsers);
userRoute.post("/login", checkLogin, loginUser);

export default userRoute;
