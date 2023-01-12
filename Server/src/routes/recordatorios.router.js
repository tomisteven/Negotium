import { Router } from "express";
import { asureAuth } from "../middlewares/authenticated";
import { createRecordatorio, getRecordatorios, updateRecordatorio, deleteRecordatorio } from "../controllers/recordatorios.controller";


const router = Router();


router.get("/", [asureAuth], getRecordatorios);

router.post("/create", [asureAuth], createRecordatorio);

router.patch("/update/:id", [asureAuth], updateRecordatorio);

router.delete("/delete/:id", [asureAuth], deleteRecordatorio);



export default router;