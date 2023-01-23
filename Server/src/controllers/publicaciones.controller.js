import User from "../models/user";
import { getFiles } from "../utils/images";
import cloudinary from "cloudinary";
import fs from "fs";
/* const createPublicacion = async(req, res) => {
    const { title, description, image, subtitulo } = req.body;
    const {user_id} = req.user;

    const newPublicacion = {
        title,
        description,
        subtitulo,
        localUrl
    }

    if(req.files.imagen){
        const img = getFiles(req.files.imagen);
        newPublicacion.imagen = img;
    }

     const user = await User.findById(user_id)
     console.log(user);
     if(!user){
        res.status(404).send({message: "Usuario no encontrado"})
    }else{
        user.publicaciones.push(newPublicacion);
        user.save((err, publicacionStored) => {
            if(err){
                res.status(500).send({message: "Error del servidor"})
            }else{
                if(!publicacionStored){
                    res.status(404).send({message: "No se ha encontrado la publicacion"})
                }else{

                    //eliminar del servidor
                    const news = user.publicaciones.filter((pdf) => {
                        return pdf._id == publicacionStored.publicaciones[0]._id;
                    });
                    const url = news[0].url;
                    const path = `./uploads/${url}`;
                    fs.unlink(path, (err) => {
                        if(err){
                            console.log(err)
                         }else{
                            console.log("Archivo eliminado")
                        }
                    })

                    res.status(200).send({code: 200, message: "Publicacion creada correctamente", Publicaciones: publicacionStored.publicaciones})
                }
            }
        })

    }
} */


const createPublicacionAndImage = async(req, res) => {
    const { titulo, descripcion, subtitulo } = req.body;
    const {user_id} = req.user;
    const user = await User.findById(user_id)
    const newPublicacion = {
        titulo,
        descripcion,
        subtitulo,
        imagen: "",
    }
    //console.log(req.files.imagen);
    if(req.files.imagen){
         try{
            cloudinary.v2.uploader.upload(req.files.imagen.path, { public_id: titulo }, function(error, result) {
                if(result){
                    newPublicacion.imagen = result.url;
                    user.publicaciones.push(newPublicacion);
                    user.save((err, publicacionStored) => {
                        if(err){
                            res.status(500).send({message: "Error del servidor"})
                        }else{
                            if(publicacionStored){
                                res.status(200).send({message: "Imagen subida correctamente y eliminada local", arr : publicacionStored.publicaciones})
                            }
                            else{
                                res.status(404).send({message: "No se ha encontrado la publicacion"})
                            }
                }
                if(error){
                    res.status(500).send({message: "Error del servidor", error})
                }
            });
        }})
         }
            catch(error){
                res.status(500).send({message: "Error del servidor", error})
            }
}
}

const getNews = async (req,res) => {
    const {user_id}  = req.user
    const user = await User.findById(user_id)
    if(!user){
        res.status(404).send({message: "Usuario no encontrado"})
    }
    else{
        res.status(200).send({message: "Noticias encontradas", noticias: user.publicaciones})
    }
}

const deleteNew = async (req, res) => {
    const {user_id} = req.user
    const user = await User.findById(user_id)
    const {id} = req.params
     if(!user){
        res.status(404).send({message: "Usuario no encontrado"})
    }
    else{
        const publicacion = user.publicaciones.find((i) => {
            return i._id == id;
        })
        await cloudinary.v2.uploader.destroy(publicacion.titulo, function(error, result) {
            if(error){
                res.status(500).send({message: "Error del servidor para eliminar de cloudinary", error})
            }else{
                console.log(result);
            }
        })
        const news = user.publicaciones.filter((i) => {
            return i._id != id;
        })
        user.publicaciones = news;
        user.save((err, publicacionStored) => {
            if(err){
                res.status(500).send({message: "Error del servidor"})
            }else{
                if(!publicacionStored){
                    res.status(404).send({message: "No se ha encontrado la publicacion"})
                }else{
                    res.status(200).send({message: "Publicacion eliminada correctamente del servidor y cloudinary", Publicaciones: publicacionStored.publicaciones})
                }
            }
        })
    }
}


export{
    createPublicacionAndImage as testCloudinary,
    getNews, deleteNew
}

