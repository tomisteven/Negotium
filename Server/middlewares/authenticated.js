
import {decodedToken} from '../utils/jwt';

//middleware que verifica si el usuário está autenticado
function asureAuth(req,res,next){
    const token = req.headers.authorization

    if(!token){
        return res.status(403).send({message:"No hay token de autorizacion"});
    }

    try {
        const payload = decodedToken(token);
        const {exp} = payload;
        const now = new Date().getTime();
        //si el token ya expiro
        if(now >= exp){
            return res.status(403).send({message:"Token expirado"});
        }
        //si el token no expiro y es valido lo guardamos en el request
        req.user = payload;
        next();

    } catch (error) {
        return res.status(401).send({message:"Token invalido"});
    }



}


const tokenClient = (req,res,next) => {
    const token_client = req.headers.authorization;
    if(!token_client){
        return res.status(403).send({message:"No hay token de autorizacion"});
    }
    next();
}


export{
    asureAuth,
    tokenClient
}