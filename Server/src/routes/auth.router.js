import  {Router}  from "express";
//importamos el controlador
import {
    register,
    login,
    refreshToken
} from "../controllers/auth.controller";
import multipart from "connect-multiparty";
import configCloudinary from "../utils/cludinary";

const router = Router();
const md_upload = multipart({uploadDir: "./uploads/avatar"});


//rutas de la api
router.post("/register", [md_upload, configCloudinary] ,register);
router.post("/login", login);
router.post("/refresh_access_token", refreshToken);




export default router;