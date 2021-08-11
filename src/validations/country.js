import Joi from "joi";
import messages from "../utils/messages";
import authentication from "./authentication";

const { createErrorMessages } = authentication;

const form = data => {
  const schema = Joi.object({
    name: Joi.string()
      .regex(
        /^[0-9a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/
      )
      .min(2)
      .max(128)
      .required()
      .messages(
        createErrorMessages(
          "string",
          `${messages.emptyCountry}`,
          `${messages.minCountry}`,
          `${messages.maxCountry}`,
          `${messages.invalidCountry}`
        )
      ),
  });

  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: false,
  });
};

export default {
  form,
};
