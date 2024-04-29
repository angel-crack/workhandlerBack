import case_model from "../../../models/case_model.js"
import validationSchema from '../../../config/validations/cases/update_case-validation.js'

let updateCase = ( req , res ) => {
    const user_id = req.usuario;
    const case_id = req.params.case_id

    const { error } = validationSchema.validate(req.body);
    if(!error){
        UpdateCase(case_id,user_id,req.body)
        .then( isUpdated => {
            res.json(isUpdated)
        })
        .catch( error => {
            console.log('hit here')
            console.log(req.body)
            res.status(400).json(error)
        })
    }else{
        res.status(400).json(error)
    }
}

async function UpdateCase(case_id,user_id,body){
    return case_model.updateOne({_id: case_id, owner: user_id},body)
}

export default updateCase