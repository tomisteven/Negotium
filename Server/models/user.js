import mongoose, {Schema} from "mongoose";


const UserSchema = new Schema({
    name: String,
    lastname: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    role : String,
    membresia: Boolean,
    avatar: String,
    clientes: [
        {
        username: String,
        password: {
            type: String,
            default: "123456"
        },
        nombre: String,
        dni: {
            type: String,
            unique: true
        },
        apellido: String,
        telefono: String,
        email: {
            type: String,
            unique: true,
        },
        direccion: String,
        fecha: {
            type: Date,
            default: Date.now()
        },
        deuda: {
            type: Boolean,
            default: false
        },
        deudaTotal: {
            type: Number,
            default: 0
        },
        serviciosadquiridos: [{
            nombre: String,
            precio: Number,
            cantidad: Number,
            fecha: {
                type: Date,
                default: Date.now()
            }
        }],
        nextServices: [{
            service: String,
            fecha : {
                type: String || Date,
                default: Date.now()
            },
        }],
    }],
    servicios: [{
        type: Schema.ObjectId,
        nombre: String,
        precio: Number,
        cantidadVendidos: Number,
        cantidadDisponibles: Number,
        descripcion: String,
        imagen: String,
        fecha: Date
    }],
    pdfs: [{
        type: Schema.ObjectId,
        nombre: String,
        tipo: String,
        servicio: String,
        url: String,
        fecha: Date
    }],
    recordatorios: [{
        type: Schema.ObjectId,
        nombre: String,
        descripcion: String,
        fecha: Date,
        prioridad: String
    }],
    proveedores: [{
        type: Schema.ObjectId,
        nombre: String,
        telefono: String,
        email: String,
        direccion: String,
        fecha: Date
    }],
});


//exportar
export default mongoose.model('User', UserSchema);