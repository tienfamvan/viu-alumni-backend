import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const generateToken = async data => {
  const token = jwt.sign(data, process.env.JWT_SECRET_KEY, {
    expiresIn: "30d",
  });

  return token;
};

const generateHashedPassword = async password => {
  const hashedPassword = await bcrypt.hash(password, 10);

  return hashedPassword;
};

const isPasswordValid = async (password, dbPassword) => {
  const isValid = await bcrypt.compare(password, dbPassword);

  return isValid;
};

const successResponse = (res, statusCode, message, token, data) => {
  return res.status(statusCode).json({
    message,
    token,
    data,
  });
};

const errorResponse = (res, statusCode, error) => {
  return res.status(statusCode).json({ error });
};
export default {
  successResponse,
  errorResponse,
  generateToken,
  generateHashedPassword,
  isPasswordValid,
};
