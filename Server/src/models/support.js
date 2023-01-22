import mongoose, {Schema} from "mongoose";


const SupportSchema = new Schema({
    name: String,
    apellido: String,
    email: {
        type: String,
    },
    asunto: String,
    message: String,
    fecha: {
        type: Date,
        default: Date.now()
    }
});


export default mongoose.model('Support', SupportSchema);