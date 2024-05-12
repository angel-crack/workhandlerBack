import jwt from "jsonwebtoken";

let verifyToken = ( req, res, next) => {
    let token = req.get("Authorization");
    console.log("Token del Request: ", token)
    jwt.verify(token, process.env.TOKEN_SEED, (err, decoded) => {
        if(err){
            return res.status(401).json({
                err
            });
        }
        req.usuario = decoded.user_id;
        next()
    });
};

export default verifyToken