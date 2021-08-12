import expressValidator from "express-validator";

const { body, validationResult } = expressValidator;

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
  body("userId")
    .notEmpty()
    .withMessage("Mã sinh viên không được bỏ trống")
    .isInt({ gt: 0 })
    .withMessage("Mã sinh viên không thể thuộc giá trị âm")
    .isInt({ gt: 9 })
    .withMessage("Mã sinh viên phải từ 2 ký tự trở lên"),
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
    .notEmpty()
    .withMessage("Mã sinh viên không được bỏ trống")
    .isInt({ gt: 0 })
    .withMessage("Mã sinh viên không thể thuộc giá trị âm"),
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

const validateZone = [
  body("name")
    .isLength({ min: 1 })
    .withMessage("Tên không được bỏ trống")
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

const validateRecruit = [
  body("userId")
    .isLength({ min: 1 })
    .withMessage("Người đăng tin không được bỏ trống")
    .trim()
    .escape(),
  body("jobName")
    .isLength({ min: 1 })
    .withMessage("Tên Công việc không được bỏ trống")
    .trim()
    .escape(),
  body("companyName")
    .isLength({ min: 1 })
    .withMessage("Tên công ty không được bỏ trống")
    .trim()
    .escape(),
  body("salaryMin")
    .notEmpty()
    .withMessage("Lương thấp nhất không được bỏ trống")
    .isInt({ gt: 0 })
    .withMessage("Lương thấp nhất không thể thuộc giá trị âm"),
  body("salaryMax")
    .notEmpty()
    .withMessage("Lương cao nhất không được bỏ trống")
    .isInt({ gt: 0 })
    .withMessage("Lương cao nhất không thể thuộc giá trị âm"),
  body("dateBegin")
    .isLength({ min: 1 })
    .withMessage("Thời gian bắt đầu không thể bỏ trống")
    .trim()
    .escape(),
  body("zoneId")
    .isLength({ min: 1 })
    .withMessage("Tỉnh thành không thể bỏ trống")
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

const validateNewsCategory = [
  body("title")
    .isLength({ min: 1 })
    .withMessage("Tiêu đề không được bỏ trống")
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

const validateNews = [
  body("newsCategoryId")
    .isLength({ min: 1 })
    .withMessage("Danh mục không được bỏ trống")
    .trim()
    .escape(),
  body("name")
    .isLength({ min: 1 })
    .withMessage("Tên tin tức không được bỏ trống")
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

export default {
  validateSignUp,
  validateLogin,
  validateZone,
  validateRecruit,
  validateNewsCategory,
  validateNews,
};
