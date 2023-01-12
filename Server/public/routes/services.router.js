"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _services = require("../controllers/services.controller");

var _authenticated = require("../middlewares/authenticated");

var router = (0, _express.Router)();
router.get("/", [_authenticated.asureAuth], _services.getServices);
router.get("/items", _authenticated.asureAuth, _services.itemService);
router.post("/create", _authenticated.asureAuth, _services.createService);
router["delete"]("/delete/:id", _authenticated.asureAuth, _services.deleteService); //router.get("/all", asureAuth, all)

var _default = router;
exports["default"] = _default;
//# sourceMappingURL=services.router.js.map