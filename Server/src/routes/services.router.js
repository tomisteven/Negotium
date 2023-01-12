import { Router } from "express";
import {itemService, getServices, createService, deleteService} from "../controllers/services.controller";
import { asureAuth } from "../middlewares/authenticated";

const router = Router();


router.get("/", [asureAuth], getServices);
router.get("/items", asureAuth, itemService);

router.post("/create", asureAuth, createService);

router.delete("/delete/:id", asureAuth, deleteService)

//router.get("/all", asureAuth, all)


export default router;