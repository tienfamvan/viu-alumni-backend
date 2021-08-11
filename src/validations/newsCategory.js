import Joi from "joi";
import messages from "../utils/messages";
import authentication from "./authentication";

const { createErrorMessages } = authentication;

const form = data => {
  const schema = Joi.object({
    parent_id: Joi.string()
      .regex(/^[0-9]+$/)
      .required()
      .messages(
        createErrorMessages(
          "string",
          `${messages.emptyParentNewsCategory}`,
          "",
          "",
          `${messages.invalidParentNewsCategory}`
        )
      ),
    title: Joi.string()
      .regex(
        /^[0-9a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵ,ặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/
      )
      .required()
      .messages(
        createErrorMessages(
          "string",
          `${messages.emptyTitleNewsCategory}`,
          "",
          "",
          `${messages.invalidTitleNewsCategory}`
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
