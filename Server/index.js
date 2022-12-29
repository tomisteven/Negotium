import app from "./app";
import { mongoose, connect } from 'mongoose';
import {API_VERSION, PORT_DB, IP_SERVER, IP_SERVER_MONGO, DB_NAME, DB_PASSWORD} from './config';

const PORT_SERVER = 4020;
//conectar base de datos moongo

connect(`mongodb+srv://negotium:negotium@clusternegotium.12qqvly.mongodb.net/test`,
   { useNewUrlParser: true},
    (err, res) => {
        if(err){
            throw err;
        }else{
            console.log("La conexion a la base de datos es correcta");
            app.listen(PORT_SERVER, () => {
                console.log("#####################");
                console.log("##### API REST #####");
                console.log("#####################");
                console.log(`http://${IP_SERVER}:${PORT_SERVER}/`);
            });
        }
    }
)