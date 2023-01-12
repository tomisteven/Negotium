"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _images = require("../utils/images");

var _express = _interopRequireDefault(require("express"));

var _pdf = require("../controllers/pdf.controller");

var _authenticated = require("../middlewares/authenticated");

var _connectMultiparty = _interopRequireDefault(require("connect-multiparty"));

var _cludinary = _interopRequireDefault(require("../utils/cludinary"));

var router = (0, _express["default"])();
var md_upload = (0, _connectMultiparty["default"])({
  uploadDir: "./uploads/pdf"
});
router.post("/add", [_authenticated.asureAuth, md_upload, _cludinary["default"]], _pdf.createPdf); //http://localhost:3000/pdf/create

router.get("/pdf/:id", [_authenticated.asureAuth], _pdf.get); //http://localhost:3000/pdf/get/5f9f1b0b0b9b2c1e1c8c1b5a

router.get("/get", [_authenticated.asureAuth], _pdf.getPDFs); //http://localhost:3000/pdf/get

router["delete"]("/delete/:id", [_authenticated.asureAuth], _pdf.deletePdf); //http://localhost:3000/pdf/delete/5f9f1b0b0b9b2c1e1c8c1b5a

var _default = router;
exports["default"] = _default;
//# sourceMappingURL=pdf.router.js.map