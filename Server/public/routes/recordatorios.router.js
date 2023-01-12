"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _authenticated = require("../middlewares/authenticated");

var _recordatorios = require("../controllers/recordatorios.controller");

var router = (0, _express.Router)();
router.get("/", [_authenticated.asureAuth], _recordatorios.getRecordatorios);
router.post("/create", [_authenticated.asureAuth], _recordatorios.createRecordatorio);
router.patch("/update/:id", [_authenticated.asureAuth], _recordatorios.updateRecordatorio);
router["delete"]("/delete/:id", [_authenticated.asureAuth], _recordatorios.deleteRecordatorio);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=recordatorios.router.js.map