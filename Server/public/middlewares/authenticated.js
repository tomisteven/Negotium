"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asureAuth = asureAuth;
exports.tokenClient = void 0;

var _jwt = require("../utils/jwt");

//middleware que verifica si el usuário está autenticado
function asureAuth(req, res, next) {
  var token = req.headers.authorization;

  if (!token) {
    return res.status(403).send({
      message: "No hay token de autorizacion"
    });
  }

  try {
    var payload = (0, _jwt.decodedToken)(token);
    var exp = payload.exp;
    var now = new Date().getTime(); //si el token ya expiro

    if (now >= exp) {
      return res.status(403).send({
        message: "Token expirado"
      });
    } //si el token no expiro y es valido lo guardamos en el request


    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).send({
      message: "Token invalido"
    });
  }
}

var tokenClient = function tokenClient(req, res, next) {
  var token_client = req.headers.authorization;

  if (!token_client) {
    return res.status(403).send({
      message: "No hay token de autorizacion"
    });
  }

  next();
};

exports.tokenClient = tokenClient;
//# sourceMappingURL=authenticated.js.map