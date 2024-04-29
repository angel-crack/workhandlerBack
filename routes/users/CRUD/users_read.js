import user_model from '../../../models/user_model.js';

let UserRead = ( req, res) => {
    const user_id = req.usuario;

    GetUserInfo(user_id)
        .then( user_found => {
                res.json({
                    name: user_found.name,
                    lastName: user_found.lastName,
                    email: user_found.email,
                    role: user_found.role
                })
        } )
        .catch( error => {
            res.status(404).json({
                error
            })
        });
};

async function GetUserInfo(user_id){
    return await user_model.findById(user_id)
}

export default UserRead