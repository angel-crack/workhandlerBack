import Joi from "joi";

const schema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(20),

    lastName: Joi.string()
        .min(3)
        .max(20),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'co'] } }),


    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    
    role: Joi.string()
        .pattern(new RegExp('^Tier (1|2|3)$')),

});

export default schema;