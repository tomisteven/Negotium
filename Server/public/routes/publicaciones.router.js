"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _publicaciones = require("../controllers/publicaciones.controller");

var _connectMultiparty = _interopRequireDefault(require("connect-multiparty"));

var _authenticated = require("../middlewares/authenticated");

var _cludinary = _interopRequireDefault(require("../utils/cludinary"));

var multipartMiddleware = (0, _connectMultiparty["default"])({
  uploadDir: "./uploads/news"
});
var router = (0, _express.Router)();
router.post('/create', [_cludinary["default"], _authenticated.asureAuth, multipartMiddleware], _publicaciones.testCloudinary);
router.get('/get', [_authenticated.asureAuth], _publicaciones.getNews);
router["delete"]('/delete/:id', [_authenticated.asureAuth, _cludinary["default"]], _publicaciones.deleteNew);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=publicaciones.router.js.map