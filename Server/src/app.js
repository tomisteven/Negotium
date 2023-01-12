import express from "express";
import authRoutes from "./routes/auth.router";
import clientsRoutes from "./routes/clients.router";
import userRoutes from "./routes/user.router";
import recordatoriosRoutes from "./routes/recordatorios.router";
import servicesRoutes from "./routes/services.router";
import pdfRoutes from "./routes/pdf.router";
import publicacionesRoutes from "./routes/publicaciones.router";
import bodyParser from "body-parser"
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

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
app.use(`/`, userRoutes);   //rutas de usuario
app.use(`/auth`, authRoutes); //rutas de autenticacion para registro y login
app.use(`/client`, clientsRoutes); //rutas de clientes del usuario
app.use(`/recordatorios`, recordatoriosRoutes); //rutas de recordatorios de clientes del usuario
app.use("/services", servicesRoutes)
app.use("/files", pdfRoutes)
app.use("/news", publicacionesRoutes)


module.exports = app;