import { Router} from "express";
import {testCloudinary, getNews, deleteNew } from "../controllers/publicaciones.controller";
import multipart from "connect-multiparty";
import { asureAuth } from "../middlewares/authenticated";
import cloudinaryConfig from "../utils/cludinary";

const multipartMiddleware = multipart({ uploadDir: "./uploads/news" });

const router = Router();


router.post('/create',[ cloudinaryConfig, asureAuth, multipartMiddleware], testCloudinary)
router.get('/get', [asureAuth], getNews)
router.delete('/delete/:id', [asureAuth, cloudinaryConfig], deleteNew)


export default router;
