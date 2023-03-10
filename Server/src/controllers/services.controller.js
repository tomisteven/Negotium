import User from '../models/user.js';

/* servicios: [{
        nombre: String,
        precio: Number,
        cantidadVendidos: Number,
        cantidadDisponibles: Number,
        descripcion: String,
        imagen: String,
        fecha: Date
}],*/

const getServices= async (req, res) => {
    const {user_id} = req.user;
    const response = await User.findById(user_id)
    const services = response.servicios
    response ? res.status(200).json(services) : res.status(404).json({message: "No es un id Valido"});
};

const createService= async (req, res) => {
    const {user_id} = req.user;
    const {nombre, precio, cantidadVendidos, cantidadDisponibles, descripcion, imagen} = req.body;
    const response = await User.findById(user_id)
    const services = response.servicios
    const newService = {
        nombre,
        precio,
        cantidadVendidos,
        cantidadDisponibles,
        descripcion
    }
    services.push(newService)
    response.servicios = services
    const result = await response.save()
    result ? res.status(200).json(result) : res.status(404).json({message: "No es un id Valido"});
};

const itemService = async (req, res) => {
    const {user_id} = req.user;
    const response = await User.findById(user_id)
    const services = response.servicios
    const items= []
    services.forEach((item, index) => {
        items.push(
            item.nombre,
        )
    })
    response ? res.status(200).json(items) : res.status(404).json({message: "No es un id Valido"});
}

const deleteService = async (req, res) => {
    const {user_id} = req.user;
    const id = req.params.id
    const response = await User.findById(user_id)
    const services = response.servicios
    const newServices = services.filter((service) => {
        return service._id != id
    })
    response.servicios = newServices
    const result = await response.save()
    result ? res.status(200).json(result) : res.status(404).json({message: "No es un id Valido"});
}




export{
    getServices,
     createService,
     itemService,
        deleteService,

}