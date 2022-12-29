import  {Router}  from "express";
//importamos el controlador
import {
    register,
    login,
    refreshToken
} from "../controllers/auth.controller";

const router = Router();

//rutas de la api
router.post("/register", register);
router.post("/login", login);
router.post("/refresh_access_token", refreshToken);




export default router;