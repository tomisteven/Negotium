"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _cloudinary = _interopRequireDefault(require("cloudinary"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var cloudinaryConfig = function cloudinaryConfig(req, res, next) {
  _cloudinary["default"].config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.API_KEY_CLOUDINARY,
    api_secret: process.env.API_SECRET_CLOUDINARY
  });

  next();
};

var _default = cloudinaryConfig;
exports["default"] = _default;
//# sourceMappingURL=cludinary.js.map