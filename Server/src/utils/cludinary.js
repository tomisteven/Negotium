import cloudinary from "cloudinary"
import dotenv from "dotenv";
dotenv.config();

const cloudinaryConfig = (req, res, next) => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.API_KEY_CLOUDINARY,
        api_secret: process.env.API_SECRET_CLOUDINARY
    });
    next();
}


export default cloudinaryConfig;