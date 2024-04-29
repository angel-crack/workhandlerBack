import user_model from '../../../models/user_model.js';

let userDelete = ( req, res) => {
    const user_id = req.usuario;

    DeleteUser(user_id)
        .then( user_found => {
                res.json({
                    isDeleted: user_found.acknowledged
                })
        } )
        .catch( error => {
            res.status(404).json({
                error
            })
        });
};

async function DeleteUser(user_id){
    return await user_model.deleteOne({_id: user_id})
}

export default userDelete