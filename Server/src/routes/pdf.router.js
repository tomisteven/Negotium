import { getFiles } from "../utils/images";
import Router from "express";
import { createPdf, getPDFs, deletePdf, get} from "../controllers/pdf.controller";
import { asureAuth } from "../middlewares/authenticated";
import multipart from "connect-multiparty";
import cloudinaryConfig from "../utils/cludinary";


const router = Router();
const md_upload = multipart({uploadDir: "./public/archives"});


router.post("/add", [asureAuth, md_upload, cloudinaryConfig], createPdf); //http://localhost:3000/pdf/create


router.get("/pdf/:id", [asureAuth], get); //http://localhost:3000/pdf/get/5f9f1b0b0b9b2c1e1c8c1b5a
router.get("/get", [asureAuth], getPDFs); //http://localhost:3000/pdf/get
router.delete("/delete/:id", [asureAuth], deletePdf); //http://localhost:3000/pdf/delete/5f9f1b0b0b9b2c1e1c8c1b5a



export default router;