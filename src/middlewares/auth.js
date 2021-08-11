import jwt from "jsonwebtoken";
import statusCodes from "../utils/statusCodes.js";
import messages from "../utils/messages.js";
import misc from "../helpers/misc.js";
import User from "../models/user.model.js";

const { forbidden, badRequest, notFound, serverError } = statusCodes;
const {
  invalidRequest,
  invalidToken,
  UsernameOrPasswordIncorrect,
  userIdTaken,
  emailTaken,
} = messages;
const { isPasswordValid } = misc;

const auth = async (req, res, next) => {
  // const token = req.header("x-auth-token");
  if (!req.headers["authorization"]) {
    return res.status(forbidden).json({ message: "Chưa xác thực" });
  }
  const token = req.headers["authorization"].split(" ")[1];

  // check for token
  if (!token) {
    return res.status(forbidden).json({ message: invalidRequest });
  }

  try {
    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(badRequest).json({ message: invalidToken });
  }
};

// Check is the username is taken
const checkUseIdTaken = async (req, res, next) => {
  User.findOne({ useId: req.body.useId }, (error, userWithSameUserId) => {
    if (error) {
      return res.status(serverError).json({ message: error });
    } else if (userWithSameUserId) {
      return res.status(badRequest).json({ message: userIdTaken });
    } else {
      next();
    }
  });
};

// Check login
const checkLogin = async (req, res, next) => {
  const { useId, password } = req.body;

  const userData = await User.findOne({ useId: useId });

  if (!userData) {
    return res.status(notFound).json({ message: UsernameOrPasswordIncorrect });
  }

  const passwordsMatch = await isPasswordValid(password, userData.password);

  if (!passwordsMatch) {
    return res.status(notFound).json({ message: UsernameOrPasswordIncorrect });
  }

  req.userData = userData;

  next();
};

const isAdmin = (req, res, next) => {
  User.findOne({ _id: req.user._id }, (error, userWithSameUserId) => {
    if (error) {
      return res.status(serverError).json({ message: error });
    } else if (isAdmin === false) {
      return res.status(unauthorized).json({ message: permissionIsDenied });
    } else {
      next();
    }
  });
};

export default {
  auth,
  isAdmin,
  checkUseIdTaken,
  checkLogin,
};
