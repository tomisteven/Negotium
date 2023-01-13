import app from "./app";
import { mongoose, connect } from 'mongoose';

const PORT_SERVER = 4020;
//conectar base de datos moongo
import dotenv from "dotenv";
dotenv.config();

connect(process.env.MONGO_URL,
    (err, res) => {
        if(err){
            throw err;
        }else{
            console.log("La conexion a la base de datos es correcta");
            app.listen(PORT_SERVER || 2170, () => {
                console.log("#####################");
                console.log("##### API REST #####");
                console.log("#####################");
                console.log("PORT: " +process.env.PORT);
            });
        }
    }
)