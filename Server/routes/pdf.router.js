import { getFiles } from "../utils/images";
import Router from "express";
import { createPdf, getPDFs, deletePdf } from "../controllers/pdf.controller";
import { asureAuth } from "../middlewares/authenticated";
import multipart from "connect-multiparty";

const router = Router();
const md_upload = multipart({uploadDir: "./uploads/pdf"});


router.post("/add", [asureAuth, md_upload], createPdf); //http://localhost:3000/pdf/create

router.get("/get", [asureAuth], getPDFs); //http://localhost:3000/pdf/get
router.delete("/delete/:id", [asureAuth], deletePdf); //http://localhost:3000/pdf/delete/5f9f1b0b0b9b2c1e1c8c1b5a


export default router;