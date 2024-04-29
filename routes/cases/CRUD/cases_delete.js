import case_model from "../../../models/case_model.js"

let CaseDelete = ( req , res ) => {
    const user_id = req.usuario;
    const case_id = req.params.case_id
    deleteCase(case_id,user_id)
        .then( ack => {
            res.json(ack)
        })
        .catch( error => {
            res.status(400).json(error)
        })
}

async function deleteCase(case_id, user_id){
    return case_model.deleteOne({_id: case_id, owner: user_id})
}

export default CaseDelete