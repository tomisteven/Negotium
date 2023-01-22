
import { Router } from "express";
import { get, newMessage } from "../controllers/supportMessages.controller.js";
import { tokTom } from "../middlewares/authenticated";

const router = Router();

router.get("/", tokTom , get)
router.post("/new", newMessage)



export default router;