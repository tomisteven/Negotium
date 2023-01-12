"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _user = require("../controllers/user.controller");

var _connectMultiparty = _interopRequireDefault(require("connect-multiparty"));

var _authenticated = require("../middlewares/authenticated");

var _cludinary = _interopRequireDefault(require("../utils/cludinary"));

var router = (0, _express.Router)();
var md_upload = (0, _connectMultiparty["default"])({
  uploadDir: "./uploads/avatar"
});
router.get("/user/me", [_authenticated.asureAuth], _user.getMe);
router.get("/users", [_authenticated.asureAuth], _user.getAll);
router.get("/users/actives", [_authenticated.asureAuth], _user.getMembresiaActive);
router.get("/users/inactive", [_authenticated.asureAuth], _user.getMembresiaInactive);
router.post("/user", [_authenticated.asureAuth, md_upload], _user.createUser);
router.patch("/user/:id", [_authenticated.asureAuth, md_upload, _cludinary["default"]], _user.updateUser);
router["delete"]("/user/:id", [_authenticated.asureAuth], _user.deleteUser);
router.get("/createurl", _authenticated.asureAuth, _user.createUrlLogin);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=user.router.js.map