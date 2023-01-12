"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _auth = require("../controllers/auth.controller");

var _connectMultiparty = _interopRequireDefault(require("connect-multiparty"));

var _cludinary = _interopRequireDefault(require("../utils/cludinary"));

//importamos el controlador
var router = (0, _express.Router)();
var md_upload = (0, _connectMultiparty["default"])({
  uploadDir: "./uploads/avatar"
}); //rutas de la api

router.post("/register", [md_upload, _cludinary["default"]], _auth.register);
router.post("/login", _auth.login);
router.post("/refresh_access_token", _auth.refreshToken);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=auth.router.js.map