import express from 'express';
import bcrypt from "bcrypt"
import user from '../models/user_model.js';
import jwt from 'jsonwebtoken';

const ruta = express.Router();

ruta.post('/', (req, res) => {
    console.log(req.body)
    user.findOne({"email": req.body.email})
        .then( user_res => {
            if(user_res){
                const passValid = bcrypt.compareSync(req.body.password, user_res.password);
                console.log("email req: ",req.body.email)
                console.log("email user: ", user_res.email)
                if(passValid){
                    const jwToken = jwt.sign(
                        {
                            user_id: user_res._id,
                            // user_name: user_res._name,
                            // user_lastName: user_res._lastName,
                            // user_role: user_res._role,
                        },
                        process.env.TOKEN_SEED,
                        {
                            expiresIn: process.env.TOKEN_EXP
                        });
                    console.log("Este es el token: ", jwToken)
                    res.json({
                        jwToken
                    })
                }else{
                    res.status(400).json({
                        msj: "Invalid Username or Password"
                    })
                }
            }else{
                res.status(400).json({
                    msj: "Invalid Username or Password"
                })
            }
        })
        .catch( err => {
            res.status(400).json({
                msj: "Error en el servicio: " + err
            })
        });
});

export default ruta