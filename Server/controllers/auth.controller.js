import bcrypt from "bcrypt-nodejs";
import User from "../models/user";
import {createRefreshToken, createToken, decodedToken} from "../utils/jwt";

const register = (req, res) => {
    const {password, repeatPassword, email, name, lastname} = req.body;
    const user = new User({
        email: email.toLowerCase(),
        name: name,
        lastname: lastname,
        role: "user",
        membresia: false,
    });

    if(!password || !repeatPassword){
        res.status(404).send({message: "Las contraseñas son obligatorias"});
    }else{
        if(password !== repeatPassword){
            res.status(404).send({message: "Las contraseñas tienen que ser iguales"});
        }else{
            bcrypt.hash(password, null, null, (err, hash) => {
                if(err){
                    res.status(500).send({message: "Error al encriptar la contraseña"});
                }else{
                    user.password = hash;
                    user.save((err, userStored) => {
                        if(err){
                            res.status(500).send({message: "Error de servidor"});
                        }else{
                            if(!userStored){
                                res.status(404).send({message: "Error al crear el usuario"});
                            }else{
                                res.status(200).send({userStored});
                            }
                        }
                    });
                }
            });


        }
        }
    }

const login = (req, res) => {
    const {email, password} = req.body;

    if(!email) res.status(404).send({message: "El email es obligatorio"});
    if(!password) res.status(404).send({message: "La contraseña es obligatoria"});

    User.findOne({email: email.toLowerCase()}, (err, userStored) => {
        if(err) res.status(500).send({message: "Error del servidor"});
        if(!userStored) res.status(404).send({message: "Usuario no encontrado"})
        else{
            bcrypt.compare(password, userStored.password, (bycriptErr, check) => {
                if(bycriptErr) res.status(500).send({message: "Error del servidor"});
                if(!check) res.status(404).send({message: "La contraseña es incorrecta"});
                else res.status(200).send({
                    accessToken: createToken(userStored),
                    refreshToken: createRefreshToken(userStored)
                    //agregue los tokens para que no me de error cuando me creo un usuario nuevo desde un admin
                });

            });
        }
    });


}

const refreshToken = (req, res) => {
    const {token} = req.body;
    if(!token) res.status(404).send({message: "El token requerido"});
    const { user_id } = decodedToken(token);
    if(!user_id) res.status(404).send({message: "El token es invalido"});


    else{
        User.findOne({_id: user_id}, (err, userStored) => {
            if(err) res.status(500).send({message: "Error del servidor"});
            if(!userStored) res.status(404).send({message: "Usuario no encontrado"});
            else{
                res.status(200).send({
                    accessToken: createToken(userStored),
                    //refreshToken: createRefreshToken(userStored)
                });
            }
        });
    }
}


//exportamos
export {
    register,
    login,
    refreshToken
};


