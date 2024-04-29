import case_model from "../../../models/case_model.js"

let GetCases = ( req , res ) => {
    const user_id = req.usuario;
    const state = req.params.state;
    if(!(state == "true" | state == "false")){
        res.status(400).json({
            error: "Invalid param"
        })
    }
    getAllCases(user_id, state)
        .then( cases => {
            res.json(cases)
        })
        .catch( error => {
            res.status(400).json(error)
        })
}

async function getAllCases(user_id, state){
    return case_model.find({owner: user_id, state: state}).populate('owner','email -_id');
}

export default GetCases