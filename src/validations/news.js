import Joi from "joi";
import messages from "../utils/messages";
import authentication from "./authentication";

const { createErrorMessages } = authentication;

const form = data => {
  const schema = Joi.object({
    name: Joi.string()
      .regex(
        /^[0-9a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵ,ặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/
      )
      .required()
      .messages(
        createErrorMessages(
          "string",
          `${messages.emptyNewsName}`,
          "",
          "",
          `${messages.invalidNewsName}`
        )
      ),
    image: Joi.string()
      .regex(
        /^[0-9a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵ,ặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/
      )
      .required()
      .messages(
        createErrorMessages(
          "string",
          `${messages.emptyNewsImage}`,
          "",
          "",
          `${messages.invalidNewsImage}`
        )
      ),
    short_description: Joi.string()
      .regex(
        /^[0-9a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵ,ặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/
      )
      .required()
      .messages(
        createErrorMessages(
          "string",
          `${messages.emptyNewsShortDescription}`,
          "",
          "",
          `${messages.invalidNewsShortDescription}`
        )
      ),
    description: Joi.string()
      .regex(
        /^[0-9a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵ,ặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/
      )
      .required()
      .messages(
        createErrorMessages(
          "string",
          `${messages.emptyNewsDescription}`,
          "",
          "",
          `${messages.invalidNewsDescription}`
        )
      ),
    news_category_id: Joi.string()
      .regex(/^[0-9]+$/)
      .required()
      .messages(
        createErrorMessages(
          "string",
          `${messages.emptyNewsCategoryId}`,
          "",
          "",
          `${messages.invalidNewsCategoryId}`
        )
      ),
    user_id: Joi.string()
      .regex(/^[0-9]+$/)
      .required()
      .messages(
        createErrorMessages(
          "string",
          `${messages.emptyNewsUserId}`,
          "",
          "",
          `${messages.invalidNewsUserId}`
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
