import user_model from '../../../models/user_model.js';
import validationSchema from '../../../config/validations/user/create_user-validation.js'
import bcrypt from 'bcrypt';

let usersCreate = (req, res) => {
    const body = req.body;

    const { error } = validationSchema
        .validate({
            name: body.name,
            lastName: body.name,
            email: body.email,
            password: body.password,
            role: body.role
        })
    if(!error){
        createUser(body)
            .then( user_created => {
                res.json({
                    user_id: user_created._id
                })
            } )
            .catch( error => {
                res.status(400).json({
                    error
                })
            } );
    }else{
        res.json({
            error
        })
    }
};


async function createUser(body){
    return await user_model.create({
        name: body.name,
        lastName: body.lastName,
        email: body.email,
        password: bcrypt.hashSync(body.password,10),
        role: body.role
    });
};

export default usersCreate