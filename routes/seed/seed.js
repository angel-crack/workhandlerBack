import express from 'express';
import fs from 'fs';
import checkTokenGetUserID from "../../middlewares/validateToken.js";
import cases_model from "../../models/case_model.js"

const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));
const data = loadJSON('./data.json');

const route = express.Router();

route.get('/:values', checkTokenGetUserID,( req , res ) => {
    const param = req.params.values;
    const values = param.split("_")

    const i1 = Number(values[0]) - 1;
    const i2 = Number(values[1]);
    if(!(i1 >= 0 && i2 < 31 && i2 > i1)){
        res.status(400).json({
            error: "Invalid Params"
        })
    }else{
        for (var i = i1; i < i2; i++) {
            data.data[i].owner = req.usuario;
          }
        const data2 = data.data.slice(i1,i2);
        
        seedManyCases(data2)
            .then( result => {
                res.json(result)
            })
            .catch( error => {
                res.status(400).json(error)
            })
    }

})

async function seedManyCases(casesBodyArray){
    return await cases_model.insertMany(casesBodyArray)
}

export default route