import { Router } from "express";

import {getAllClients, getClientConDeuda, getClientSinDeuda,createClient, getServicesOfClient, getClient, addServiceFuture,updateClient, deleteClient } from "../controllers/client.controller";
import { asureAuth } from "../middlewares/authenticated";
import multipart from "connect-multiparty";


const md_upload = multipart({uploadDir: "./uploads/posts"});
const router = Router();


router.post("/create", [asureAuth], createClient);
router.post("/create/newservice/:id", asureAuth, addServiceFuture);

router.patch("/update/:id", [asureAuth], updateClient);

router.get("/all",[asureAuth], getAllClients);
router.get("/:id", [asureAuth], getClient);
router.get("/deudores", [asureAuth], getClientConDeuda);
router.get("/sinDeuda", [asureAuth], getClientSinDeuda);
router.get("/servicios/:id", [asureAuth], getServicesOfClient);

router.delete("/delete/:id", [asureAuth], deleteClient);



export default router;
