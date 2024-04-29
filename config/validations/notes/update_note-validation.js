import Joi from "joi";

const schema = Joi.object({
    owner: Joi.string(),

    tittle: Joi.string(),

    content: Joi.string(),

    state: Joi.boolean(),
});

export default schema;