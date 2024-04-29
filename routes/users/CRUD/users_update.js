import user_model from '../../../models/user_model.js';
import validationSchema from '../../../config/validations/user/update_user-validation.js'
import bcrypt from 'bcrypt';

let userUpdate = ( req, res ) => {
    const user_id = req.usuario;
    const { error } = validationSchema
    .validate(req.body)
    if(!error){
        if(req.body.password){
            req.body.password = bcrypt.hashSync(req.body.password,10)
        }
        UpdateUser(user_id, req.body)
            .then( user_updated => {
                res.json(user_updated)
            } )
            .catch( error => {
                res.status(400).json(
                    error
                )
            })
    }else{
        res.status(400).json({
            error_msg: error.details[0].message
        })
    }
};

async function UpdateUser(user_id, body){
    return await user_model.updateOne({_id: user_id},{$set: body})
}

export default userUpdate