import { Router } from "express";

import {getAllClients, getClientConDeuda, getClientSinDeuda,createClient, getServicesOfClient, getClient, addServiceFuture,updateClient, deleteClient, deleteServiceClient, addService,deleteServiceFutureClient, updateUsernamePassword, loginClient } from "../controllers/client.controller";
import { asureAuth } from "../middlewares/authenticated";
import multipart from "connect-multiparty";


const md_upload = multipart({uploadDir: "./uploads/posts"});
const router = Router();


router.post("/create", [asureAuth], createClient); "http://localhost:3000/client/create"
router.post("/create/futureservice/:id", asureAuth, addServiceFuture); "http://localhost:3000/client/create/futureservice/5f9f1b0b0b9b2c1e1c8c1b5a"
router.post("/create/service/:id", [asureAuth], addService); "http://localhost:3000/client/create/service/5f9f1b0b0b9b2c1e1c8c1b5a"
router.post("/login", [asureAuth], loginClient); "http://localhost:3000/client/login"


router.patch("/update/:id", [asureAuth], updateClient); "http://localhost:3000/client/update/5f9f1b0b0b9b2c1e1c8c1b5a"
router.patch("/update/username/:id", [asureAuth], updateUsernamePassword); "http://localhost:3000/client/update/username/5f9f1b0b0b9b2c1e1c8c1b5a"

router.get("/all",[asureAuth], getAllClients); "http://localhost:3000/client/all"
router.get("/:id", [asureAuth], getClient); "http://localhost:3000/client/5f9f1b0b0b9b2c1e1c8c1b5a"
router.get("/deudores", [asureAuth], getClientConDeuda); "http://localhost:3000/client/deudores"
router.get("/sinDeuda", [asureAuth], getClientSinDeuda); "http://localhost:3000/client/sinDeuda"
router.get("/servicios/:id", [asureAuth], getServicesOfClient); "http://localhost:3000/client/servicios/5f9f1b0b0b9b2c1e1c8c1b5a"

router.delete("/delete/:id", [asureAuth], deleteClient); "http://localhost:3000/client/delete/5f9f1b0b0b9b2c1e1c8c1b5a"
router.delete("/delete/service/:id/:service_id", [asureAuth], deleteServiceClient); "http://localhost:3000/client/delete/service/5f9f1b0b0b9b2c1e1c8c1b5a/5f9f1b0b0b9b2c1e1c8c1b5a"
router.delete("/delete/servicefuture/:id/:service_id", [asureAuth], deleteServiceFutureClient); "http://localhost:3000/client/delete/servicefuture/5f9f1b0b0b9b2c1e1c8c1b5a/5f9f1b0b0b9b2c1e1c8c1b5a"



export default router;
