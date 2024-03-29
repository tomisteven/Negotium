import bcrypt from "bcrypt-nodejs";
import User from '../models/user';
import { getFiles } from "../utils/images";
import {createRefreshToken, createToken, decodedToken} from "../utils/jwt";
import cloudinary from 'cloudinary';
import user from "../models/user";
import fs from 'fs';



async function getMe(req, res) {
    const {user_id} = req.user;
    const response = await User.findById(user_id)
    if (response) res.status(200).json(response);
    else res.status(404).json({message: "User not found"});
}
async function createUrlLogin(req, res) {
    const {user_id} = req.user;
    const response = await User.findById(user_id)
    if (response) {
        response.url_login = "http://localhost:3000/login/"+user_id
        response.save();
        res.status(200).json(response);
    }
    else  res.status(404).json({message: "No existe usuario"});
}

async function getAll (req, res) {
    const {role} = req.query;
    let response;
    response = await User.find();
    response ? res.status(200).json(response) : res.status(404).json({message: "Users not found"});
}
async function getMembresiaActive(req, res) {
    //const {role} = req.query;
    let response;
    response = await User.find({membresia: true});
    response ? res.status(200).json(response) : res.status(404).json({message: "Users not found"});
}

async function getMembresiaInactive(req, res){
    const response = await User.find({membresia: false});
    response ? res.status(200).json(response) : res.status(404).json({message: "Users not found"});
}

  const createUser = async (req, res) => {
    const {password} = req.body;
    //console.log(req.body);
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const user = new User({
        ...req.body,
        password: hash,
        active: true,
        url_login: "http://localhost:3000/login/" + req.body._id
    });
    console.log(req.body);
    if(req.files.avatar){
        const imagePath = getFiles(req.files.avatar);
        user.avatar = imagePath;
    }
    user.save((err, userStored) => {
        if(err){
            res.status(500).send({message: "Error de servidor"});
        }else{
            if(!userStored){
                res.status(404).send({message: "Error al crear el usuario"});
            }else{
                res.status(200).send({
                    message: "Usuario creado correctamente",
                    user: userStored,
                    accessToken: createToken(userStored),
                    refreshToken: createRefreshToken(userStored)
                });

            }
        }
    });
 }

const updateUser = async (req, res) => {
    const {id} = req.params;
    const userData = req.body;
    const USER = await User.findById(id);
    const emailExist = await User.findById(id);
    if(emailExist.email == userData.email){
        res.status(404).send({message: "El email ya existe"});
    }else{
        //si el usuario envia una nueva contraseña
        if(userData.password){
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(userData.password, salt);
            userData.password = hash;
        }else{
            delete userData.password;
        }
        //si el usuario envia una nueva imagen
        if(req.files.avatar){
            const imagePath = getFiles(req.files.avatar);
            await cloudinary.v2.uploader.destroy(USER.email, (err, result) => {
                if(err){
                    res.status(500).send({message: "Error al eliminar la imagen de cloudinary"});
                }
            });

         await  cloudinary.v2.uploader.upload(req.files.avatar.path, { public_id: USER.email },(err, result) => {
                if(err){
                    res.status(500).send({message: "Error al subir la imagen a cloudinary"});
                }else{
                    userData.avatar = result.url;
                    fs.unlinkSync("./src/uploads/" + imagePath, (err) =>{
                        if(err){
                            res.status(500).send({message: "Error al eliminar la imagen del servidor"});
                        }
                    })
                }
            });

        }

        await User.findByIdAndUpdate({_id: id}, userData, (err, userUpdate) => {
            if(err){
                res.status(500).send({message: "Error al actualizar el usuario"});
            }else{
                if(!userUpdate){
                    res.status(404).send({message: "No se ha encontrado el usuario"});
                }else{
                    res.status(200).send({message: "Usuario actualizado correctamente", user: userUpdate});
                }
            }
        })
    }
}

const deleteUser = async (req, res) => {
    const {id} = req.params
    //buscamos el usuario
    const USER = User.findById(id)
    await User.findById(id, (err, user) => {
        if(err){
            res.status(500).send({message: "Error del servidor"});
        }else{
            if(!user){
                res.status(404).send({message: "Usuario no encontrado"});
            }else{
                //eliminamos el usuario
                user.remove(err => {
                    if(err){
                        res.status(500).send({message: "Error del servidor"});
                    }else{
                        res.status(200).send({message: "Usuario eliminado correctamente"});
                    }
                })
            }
        }
    });
    await cloudinary.v2.uploader.destroy(USER.email, (err, result) => {
        if(err){
            res.status(500).send({message: "Error al eliminar la imagen de cloudinary"});
        }
    });

}


export {
    getMe,
    getAll,
    updateUser,
    deleteUser,
    getMembresiaActive,
    getMembresiaInactive,
    createUser,
    createUrlLogin
}


