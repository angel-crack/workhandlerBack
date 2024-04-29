import case_model from "../../../models/case_model.js"
import validationSchema from '../../../config/validations/cases/create_case-validation.js'

let caseCreate = ( req , res ) => {
    const body = req.body;
    body.owner = req.usuario;
    const { error } = validationSchema.validate(body);
    if(!error){
        CreateCase(body)
            .then( isCaseCreated => {
                res.json({
                    isCaseCreated
                })
            } )
            .catch( error => {
                res.status(400).json({
                    error
                })
            } )
    }else{
        res.status(400).json({
            error
        })
    }
}

async function CreateCase(body){
    return await case_model.create(body);
}

export default caseCreate