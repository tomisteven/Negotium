import User from "../models/user";
import { getFiles } from "../utils/images";
/* nombre: String,
        tipo: String,
        servicio: String,
        url: String,
        fecha: Date */


const createPdf = async (req, res) => {
    const { user_id } = req.user;
    const {nombre, servicio, fecha} = req.body;
    const response = await User.findById(user_id);
    const pdfs = response.pdfs;
        if(req.files){
            const newUrl = getFiles(req.files.url)
            const newPdf = {
                nombre: nombre,
                servicio : servicio,
                url: newUrl,
                fecha: fecha
            }
            pdfs.push(newPdf)
            response.pdfs = pdfs
            const result = await response.save()
            result ? res.status(200).json(result) : res.status(404).json({message: "No es un id Valido"});
        }else{
            res.status(404).json({message: "No hay archivos"})
        }
}

const getPDFs = async (req, res) => {
    const { user_id } = req.user;
    const response = await User.findById(user_id);
    const pdfs = response.pdfs;
    response ? res.status(200).json(pdfs) : res.status(404).json({message: "No es un id Valido"});
}

const deletePdf = async (req, res) => {
    const { user_id } = req.user;
    const id = req.params.id;
    const response = await User.findById(user_id);
    const pdfs = response.pdfs;
    const newPdfs = pdfs.filter((pdf) => {
        return pdf._id != id;
    });
    response.pdfs = newPdfs;
    const result = await response.save();
    result ? res.status(200).json(result) : res.status(404).json({message: "No es un id Valido"});

}


export {
    createPdf, getPDFs, deletePdf

}