"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodedToken = exports.createToken = exports.createRefreshToken = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var jwt = require("jsonwebtoken");

var createToken = function createToken(user) {
  var expToken = new Date();
  expToken.setHours(expToken.getHours() + 30);
  var payload = {
    token_type: "access",
    user_id: user._id,
    iat: Date.now(),
    exp: expToken.getTime()
  };
  return jwt.sign(payload, process.env.JWT_SECRET);
};

exports.createToken = createToken;

var createRefreshToken = function createRefreshToken(user) {
  var expToken = new Date();
  expToken.getMonth(expToken.getMonth() + 1);
  var payload = {
    token_type: "refresh",
    user_id: user._id,
    iat: Date.now(),
    exp: expToken.getTime()
  };
  return jwt.sign(payload, process.env.JWT_SECRET);
};

exports.createRefreshToken = createRefreshToken;

var decodedToken = function decodedToken(token) {
  return jwt.decode(token, process.env.JWT_SECRET, true);
};

exports.decodedToken = decodedToken;
//# sourceMappingURL=jwt.js.map