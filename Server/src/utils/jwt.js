import dotenv from "dotenv";
dotenv.config();


const jwt = require("jsonwebtoken");

 export const createToken = (user) => {
    const expToken = new Date();
    expToken.setHours(expToken.getHours() + 30);
    const payload = {
        token_type: "access",
        user_id : user._id,
        iat : Date.now(),
        exp : expToken.getTime(),
    }

    return jwt.sign(payload, process.env.JWT_SECRET);
}

export const createRefreshToken = (user) => {
    const expToken = new Date();
    expToken.getMonth(expToken.getMonth() + 1);
    const payload = {
        token_type: "refresh",
        user_id : user._id,
        iat : Date.now(),
        exp : expToken.getTime(),
    }

    return jwt.sign(payload, process.env.JWT_SECRET);
};


export const decodedToken = (token) => {
    return jwt.decode(token, process.env.JWT_SECRET, true);
}