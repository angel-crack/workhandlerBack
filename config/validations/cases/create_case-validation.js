import Joi from "joi";

const schema = Joi.object({
    owner: Joi.string().required(),

    tittle: Joi.string()
        .required(),

    number: Joi.string()
        .min(9)
        .max(10),

    problem_description: Joi.string(),

    current_status: Joi.string(),
    
    action_plan: Joi.string(),

    last_action: Joi.string(),

    state: Joi.boolean(),
});

export default schema;