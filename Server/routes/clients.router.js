import { Router } from "express";

import {getAllClients, getClientConDeuda, getClientSinDeuda,createClient, getServicesOfClient, getClient, addServiceFuture,updateClient, deleteClient, deleteServiceClient, addService,deleteServiceFutureClient, updateUsernamePassword, loginClient } from "../controllers/client.controller";
import { asureAuth } from "../middlewares/authenticated";
import multipart from "connect-multiparty";


const md_upload = multipart({uploadDir: "./uploads/posts"});
const router = Router();


router.post("/create", [asureAuth], createClient);
router.post("/create/futureservice/:id", asureAuth, addServiceFuture);
router.post("/create/service/:id", [asureAuth], addService);
router.post("/login", [asureAuth], loginClient);


router.patch("/update/:id", [asureAuth], updateClient);
router.patch("/update/username/:id", [asureAuth], updateUsernamePassword); //update username and password

router.get("/all",[asureAuth], getAllClients);
router.get("/:id", [asureAuth], getClient);
router.get("/deudores", [asureAuth], getClientConDeuda);
router.get("/sinDeuda", [asureAuth], getClientSinDeuda);
router.get("/servicios/:id", [asureAuth], getServicesOfClient);

router.delete("/delete/:id", [asureAuth], deleteClient);
router.delete("/delete/service/:id/:service_id", [asureAuth], deleteServiceClient);
router.delete("/delete/servicefuture/:id/:service_id", [asureAuth], deleteServiceFutureClient);



export default router;
