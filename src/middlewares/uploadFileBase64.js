import multer from "multer";
const upload = multer();

const fileField = img => {
  return upload.single(img);
};

const convertBase64 = async (req, res, next) => {
  if (req.file) {
    const encoded = req.file.buffer.toString("base64");
    req.body["image"] = `data:${req.file.mimetype};base64,${encoded}`;
  }

  next();
};

export default { fileField, convertBase64 };
