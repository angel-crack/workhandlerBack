import Joi from "joi";

const schema = Joi.object({
    owner: Joi.string().required(),

    tittle: Joi.string()
        .required(),

    content: Joi.string(),

    state: Joi.boolean(),
});

export default schema;