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
app.use(`/auth`, authRoutes);
app.use(`/`, userRoutes);
app.use(`/client`, clientsRoutes);
/* app.use(`/api/${API_VERSION}`, menuRoutes);
app.use(`/api/${API_VERSION}`, courseRoutes);
app.use(`/api/${API_VERSION}`, postRoutes);
app.use(`/api/${API_VERSION}`, newsletterRouter); */



module.exports = app;