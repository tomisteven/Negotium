
import User from "../models/user";
import {
    getFiles
} from "../utils/images";



const createClient = async (req, res) => {
    const {user_id} = req.user;
    const response = await User.findById(user_id);
    response.clientes.push(req.body);
    await response.save();
    res.status(200).json({message: "Cliente creado", client: response.clientes});

};

const getAllClients = async (req, res) => {

    const {user_id} = req.user;
    const response = await User.findById(user_id);
    console.log(response);
     const clients = response.clientes
    if (clients != null && clients.length > 0) {
        res.status(200).json(clients);
    }
    else {
        res.status(404).json({message: "No hay clientes"});
    }
}

const getClientConDeuda = async (req, res) => {
    const {user_id} = req.user;
    const response = await User.findById(user_id);
    const clientsConDeuda = response.clientes.filter(client => client.deuda == true);
    if (clientsConDeuda != null && clientsConDeuda.length > 0) {
        res.status(200).json(clientsConDeuda);
    }
    else {
        res.status(404).json({message: "No hay clientes con deudas"});
    }
}

const getClientSinDeuda = async (req, res) => {
    const {user_id} = req.user;
    const response = await User.findById(user_id);
    const clientSinDeuda = response.clientes.filter(client => client.deuda == false);
    if(clientSinDeuda != null && clientSinDeuda.length > 0) res.status(200).json(clientSinDeuda);
    else res.status(404).json({message: "No hay clientes con deudas"});

}

const getServicesOfClient = async (req, res) => {
    const client_id = req.params.id;
    const {user_id} = req.user;
    const response = await User.findById(user_id);
    const client = response.clientes.find(client => client._id == client_id);
    const services = client.serviciosadquiridos;
    if(services != null && services.length > 0) res.status(200).json(services);
    else res.status(404).json({message: "No hay servicios para este cliente"});
}

const getClient = async (req, res) => {
    const client_id = req.params.id;
    const {user_id} = req.user;
    const response = await User.findById(user_id);
    const client = response.clientes.find(client => client._id == client_id);
    if(client != null) res.status(200).json(client);
    else res.status(404).json({message: "No hay cliente con ese id"});
}

const addServiceFuture = async (req, res) => {
    const client_id = req.params.id;
    const {user_id} = req.user;
    const response  = await User.findById(user_id);
    const client = response.clientes.find(client => client._id == client_id);
    client.nextServices.push(req.body);
    await response.save();
    res.status(200).json({message: "Servicio añadido", client: client});
}

const updateClient = async (req, res) => {
    const client_id = req.params.id;
    const {user_id} = req.user;
    const response = await User.findById(user_id);
    const client = response.clientes.find(client => client._id == client_id);
    if(client != null) {
        client.nombre = req.body.nombre || client.nombre;
        client.apellido = req.body.apellido || client.apellido;
        client.telefono = req.body.telefono || client.telefono;
        client.email = req.body.email || client.email;
        client.deuda = req.body.deuda || client.deuda;
        client.deudaTotal = req.body.deudaTotal || client.deudaTotal;
        await response.save();
        res.status(200).json({message: "Cliente actualizado", client: client});
    }
}

const deleteClient = async (req, res) => {
    const client_id = req.params.id;
    const {user_id} = req.user
    const response = await User.findById(user_id)
    const client = response.clientes.find(client => client._id == client_id);
    if(client != null) {
        response.clientes.remove(client);
        await response.save();
        res.status(200).json({message: "Cliente eliminado", client: client});
    }else res.status(404).json({message: "No hay cliente con ese id"});
}

export {
    createClient,
    getAllClients,
    getClient,
    updateClient,
    deleteClient,
    getClientConDeuda,
    getClientSinDeuda,
    getServicesOfClient,
    addServiceFuture
}
