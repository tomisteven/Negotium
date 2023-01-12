"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _client = require("../controllers/client.controller");

var _authenticated = require("../middlewares/authenticated");

var _connectMultiparty = _interopRequireDefault(require("connect-multiparty"));

var md_upload = (0, _connectMultiparty["default"])({
  uploadDir: "./uploads/posts"
});
var router = (0, _express.Router)();
router.post("/create", [_authenticated.asureAuth], _client.createClient); //http://localhost:3000/client/create

router.post("/create/futureservice/:id", _authenticated.asureAuth, _client.addServiceFuture); //http://localhost:3000/client/create/futureservice/5f9f1b0b0b9b2c1e1c8c1b5a

router.post("/create/service/:id", [_authenticated.asureAuth], _client.addService); //http://localhost:3000/client/create/service/5f9f1b0b0b9b2c1e1c8c1b5a

router.post("/login/:id", _client.loginClient); //http://localhost:3000/client/login

router.patch("/update/:id", [_authenticated.asureAuth], _client.updateClient); //http://localhost:3000/client/update/5f9f1b0b0b9b2c1e1c8c1b5a

router.patch("/update/username/:id", [_authenticated.asureAuth], _client.updateUsernamePassword); //http://localhost:3000/client/update/username/5f9f1b0b0b9b2c1e1c8c1b5a

router.get("/all", [_authenticated.asureAuth], _client.getAllClients); //http://localhost:3000/client/all

router.get("/:id", [_authenticated.asureAuth], _client.getClient); //http://localhost:3000/client/5f9f1b0b0b9b2c1e1c8c1b5a

router.get("/clientes/deudores", [_authenticated.asureAuth], _client.getClientConDeuda); //http://localhost:3000/client/deudores

router.get("/clientes/sinDeuda", [_authenticated.asureAuth], _client.getClientSinDeuda); //http://localhost:3000/client/sinDeuda

router.get("/servicios/:id", [_authenticated.asureAuth], _client.getServicesOfClient); //http://localhost:3000/client/servicios/5f9f1b0b0b9b2c1e1c8c1b5

router.get("/futureservices/:id", [_authenticated.asureAuth], _client.getServicesFuturesOfClient); //http://localhost:3000/client/servicios/5f9f1b0b0b9b2c1e1c8c1b5

router.get("/url/get", [_authenticated.asureAuth], _client.urlLoginClient);
router.get("/item/deudores", [_authenticated.asureAuth], _client.clientesConDeudaItem);
router.get("/item/nodeudores", [_authenticated.asureAuth], _client.clientesSinDeudaItem);
router["delete"]("/delete/:id", [_authenticated.asureAuth], _client.deleteClient); //http://localhost:3000/client/delete/5f9f1b0b0b9b2c1e1c8c1b5a

router["delete"]("/delete/service/:id/:service_id", [_authenticated.asureAuth], _client.deleteServiceClient); //http://localhost:3000/client/delete/service/5f9f1b0b0b9b2c1e1c8c1b5a/5f9f1b0b0b9b2c1e1c8c1b5a

router["delete"]("/delete/servicefuture/:id/:service_id", [_authenticated.asureAuth], _client.deleteServiceFutureClient); //http://localhost:3000/client/delete/servicefuture/5f9f1b0b0b9b2c1e1c8c1b5a/5f9f1b0b0b9b2c1e1c8c1b5a

var _default = router;
exports["default"] = _default;
//# sourceMappingURL=clients.router.js.map