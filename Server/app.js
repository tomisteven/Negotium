import express from "express";
import authRoutes from "./routes/auth.router";
import clientsRoutes from "./routes/clients.router";
import userRoutes from "./routes/user.router";

import path from "path";
import bodyParser from "body-parser";
import { API_VERSION } from "./config";
import cors from "cors";

//configuramos el servidor
const app = express();

//configuraciones
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//configuramos el cors
app.use(cors());

//archivos estaticos a la carpeta uploads
app.use(express.static("./uploads"));


//rutas
app.use(`/auth`, authRoutes); //rutas de autenticacion para registro y login
app.use(`/`, userRoutes);   //rutas de usuario
app.use(`/client`, clientsRoutes); //rutas de clientes del usuario





module.exports = app;