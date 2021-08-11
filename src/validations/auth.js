import { body, validationResult } from "express-validator";

const validateSignUp = [
  body("firstName")
    .isLength({ min: 2 })
    .withMessage("Họ phải ít nhất 2 ký tự trở lên")
    .trim()
    .escape(),
  body("lastName")
    .isLength({ min: 2 })
    .withMessage("Tên phải ít nhất 2 ký tự trở lên")
    .trim()
    .escape(),
  body("useId")
    .isLength({ min: 2, max: 7 })
    .withMessage("Mã sinh viên phải ít nhất 2 ký tự trở lên")
    .trim()
    .escape(),
  body("email")
    .isEmail()
    .withMessage("Email không được bỏ trống")
    .trim()
    .escape(),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Mật khẩu phải ít nhất 8 ký tự trở lên")
    .trim()
    .escape(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const errorMessage = errors.errors[0].msg;

      return res.status(400).json({ message: errorMessage });
    } else {
      next();
    }
  },
];

const validateLogin = [
  body("userId")
    .isLength({ min: 1 })
    .withMessage("Mã sinh viên không được bỏ trống")
    .trim()
    .escape(),
  body("password")
    .isLength({ min: 1 })
    .withMessage("Mật khẩu không được bỏ trống")
    .trim()
    .escape(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const errorMessage = errors.errors[0].msg;

      return res.status(400).json({ message: errorMessage });
    } else {
      next();
    }
  },
];

export default { validateSignUp, validateLogin };
