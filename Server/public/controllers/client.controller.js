"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.urlLoginClient = exports.updateUsernamePassword = exports.updateClient = exports.loginClient = exports.getServicesOfClient = exports.getServicesFuturesOfClient = exports.getClientSinDeuda = exports.getClientConDeuda = exports.getClient = exports.getAllClients = exports.deleteServiceFutureClient = exports.deleteServiceClient = exports.deleteClient = exports.createClient = exports.clientesSinDeudaItem = exports.clientesConDeudaItem = exports.addServiceFuture = exports.addService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/user"));

var _images = require("../utils/images");

var createClient = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var user_id, response, client;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            user_id = req.user.user_id;
            _context.next = 3;
            return _user["default"].findById(user_id);

          case 3:
            response = _context.sent;
            client = response.clientes.find(function (client) {
              return client.email == req.body.email;
            });

            if (!client) {
              _context.next = 9;
              break;
            }

            res.status(400).json({
              message: "El cliente con ese EMAIL ya existe"
            });
            _context.next = 13;
            break;

          case 9:
            response.clientes.push(req.body);
            _context.next = 12;
            return response.save();

          case 12:
            res.status(200).json({
              message: "Cliente creado",
              client: req.body
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createClient(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createClient = createClient;

var getAllClients = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var user_id, response, clients;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            user_id = req.user.user_id;
            _context2.next = 3;
            return _user["default"].findById(user_id);

          case 3:
            response = _context2.sent;
            //console.log(response);
            clients = response.clientes;

            if (clients != null && clients.length > 0) {
              res.status(200).json(clients);
            } else {
              res.status(404).json({
                message: "No hay clientes"
              });
            }

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getAllClients(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getAllClients = getAllClients;

var getClientConDeuda = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var user_id, response, clientsConDeuda;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            user_id = req.user.user_id;
            _context3.next = 3;
            return _user["default"].findById(user_id);

          case 3:
            response = _context3.sent;
            if (!response) res.status(404).json({
              message: "No hay cliente con ese id"
            });
            clientsConDeuda = response.clientes.filter(function (client) {
              return client.deuda == true;
            });

            if (clientsConDeuda != null && clientsConDeuda.length > 0) {
              res.status(200).json(clientsConDeuda);
            } else {
              res.status(404).json({
                message: "No hay clientes con deudas"
              });
            }

            console.log(clientsConDeuda);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getClientConDeuda(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getClientConDeuda = getClientConDeuda;

var clientesConDeudaItem = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var user_id, estado, response, clientsItem, items;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            user_id = req.user.user_id;
            estado = req.query.estado;
            _context4.next = 4;
            return _user["default"].findById(user_id);

          case 4:
            response = _context4.sent;
            if (!response) res.status(404).json({
              message: "No hay cliente con ese id"
            });
            clientsItem = response.clientes.filter(function (client) {
              return client.deuda === false;
            });
            items = [];
            clientsItem.forEach(function (item, index) {
              items.push(item.nombre + " " + item.apellido);
            });

            if (items != null) {
              res.status(200).json(items);
            }

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function clientesConDeudaItem(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.clientesConDeudaItem = clientesConDeudaItem;

var clientesSinDeudaItem = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var user_id, estado, response, clientsItem, items;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            user_id = req.user.user_id;
            estado = req.query.estado;
            _context5.next = 4;
            return _user["default"].findById(user_id);

          case 4:
            response = _context5.sent;
            if (!response) res.status(404).json({
              message: "No hay cliente con ese id"
            });
            clientsItem = response.clientes.filter(function (client) {
              return client.deuda === true;
            });
            items = [];
            clientsItem.forEach(function (item, index) {
              items.push(item.nombre + " " + item.apellido);
            });

            if (items != null) {
              res.status(200).json(items);
            }

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function clientesSinDeudaItem(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.clientesSinDeudaItem = clientesSinDeudaItem;

var getClientSinDeuda = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var user_id, response, clientSinDeuda;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            user_id = req.user.user_id;
            _context6.next = 3;
            return _user["default"].findById(user_id);

          case 3:
            response = _context6.sent;
            if (!response) res.status(404).json({
              message: "No hay cliente con ese id"
            });
            clientSinDeuda = response.clientes.filter(function (client) {
              return client.deuda == false;
            });
            if (clientSinDeuda != null && clientSinDeuda.length > 0) res.status(200).json(clientSinDeuda);else res.status(404).json({
              message: "No hay clientes con deudas"
            });

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function getClientSinDeuda(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getClientSinDeuda = getClientSinDeuda;

var getServicesOfClient = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var client_id, user_id, response, client, services;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            client_id = req.params.id;
            user_id = req.user.user_id;
            _context7.next = 4;
            return _user["default"].findById(user_id);

          case 4:
            response = _context7.sent;
            client = response.clientes.find(function (client) {
              return client._id == client_id;
            });
            if (!client) res.status(404).json({
              message: "No hay cliente con ese id"
            });
            services = client.serviciosadquiridos;
            if (services != null && services.length > 0) res.status(200).json(services);else res.status(404).json({
              message: "No hay servicios para este cliente"
            });

          case 9:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function getServicesOfClient(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.getServicesOfClient = getServicesOfClient;

var getClient = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var client_id, user_id, response, client;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            client_id = req.params.id;
            user_id = req.user.user_id;
            _context8.next = 4;
            return _user["default"].findById(user_id);

          case 4:
            response = _context8.sent;
            client = response.clientes.find(function (client) {
              return client._id == client_id;
            });
            if (client != null) res.status(200).json(client);else res.status(404).json({
              message: "No hay cliente con ese id"
            });

          case 7:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function getClient(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.getClient = getClient;

var addServiceFuture = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var client_id, user_id, response, client;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            client_id = req.params.id;
            user_id = req.user.user_id;
            _context9.next = 4;
            return _user["default"].findById(user_id);

          case 4:
            response = _context9.sent;
            if (!response) res.status(404).json({
              message: "No hay cliente con ese id"
            });
            client = response.clientes.find(function (client) {
              return client._id == client_id;
            });
            client.nextServices.push(req.body);
            _context9.next = 10;
            return response.save();

          case 10:
            res.status(200).json({
              message: "Servicio añadido",
              client: client
            });

          case 11:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function addServiceFuture(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

exports.addServiceFuture = addServiceFuture;

var addService = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    var client_id, user_id, response, client;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            client_id = req.params.id;
            user_id = req.user.user_id;
            _context10.next = 4;
            return _user["default"].findById(user_id);

          case 4:
            response = _context10.sent;
            client = response.clientes.find(function (client) {
              return client._id == client_id;
            });
            if (!client) res.status(404).json({
              message: "No hay cliente con ese id"
            });
            client.serviciosadquiridos.push(req.body);

            if (!req.body.precio) {
              res.status(400).json({
                message: "El precio es obligatorio"
              });
            } else {
              client.gastoTotal += req.body.precio;
            }

            _context10.next = 11;
            return response.save();

          case 11:
            res.status(200).json({
              message: "Servicio añadido",
              client: client
            });

          case 12:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function addService(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

exports.addService = addService;

var updateClient = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
    var client_id, user_id, response, client;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            client_id = req.params.id;
            user_id = req.user.user_id;
            _context11.next = 4;
            return _user["default"].findById(user_id);

          case 4:
            response = _context11.sent;
            if (!response) res.status(404).json({
              message: "No hay cliente con ese id"
            });
            client = response.clientes.find(function (client) {
              return client._id == client_id;
            });

            if (!(client != null)) {
              _context11.next = 23;
              break;
            }

            client.nombre = req.body.nombre || client.nombre;
            client.apellido = req.body.apellido || client.apellido;
            client.telefono = req.body.telefono || client.telefono;
            client.email = req.body.email || client.email;
            client.deuda = req.body.deuda || client.deuda;
            client.deudaTotal = req.body.deudaTotal || client.deudaTotal;
            client.dni = req.body.dni || client.dni;
            client.direccion = req.body.direccion || client.direccion;
            client.gastoTotal = req.body.gastoTotal || client.gastoTotal;
            client.serviciosadquiridos = req.body.serviciosadquiridos || client.serviciosadquiridos;
            _context11.next = 20;
            return response.save();

          case 20:
            res.status(200).json({
              message: "Cliente actualizado",
              client: client
            });
            _context11.next = 24;
            break;

          case 23:
            res.status(404).json({
              message: "No hay cliente con ese id"
            });

          case 24:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));

  return function updateClient(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();

exports.updateClient = updateClient;

var deleteClient = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req, res) {
    var client_id, user_id, response, client;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            client_id = req.params.id;
            user_id = req.user.user_id;
            _context12.next = 4;
            return _user["default"].findById(user_id);

          case 4:
            response = _context12.sent;
            console.log(response);
            if (!response) res.status(404).json({
              message: "No hay cliente con ese id"
            });
            client = response.clientes.find(function (client) {
              return client._id == client_id;
            });

            if (!(client != null)) {
              _context12.next = 15;
              break;
            }

            response.clientes.remove(client);
            _context12.next = 12;
            return response.save();

          case 12:
            res.status(200).json({
              message: "Cliente eliminado",
              client: client
            });
            _context12.next = 16;
            break;

          case 15:
            res.status(404).json({
              message: "No hay cliente con ese id"
            });

          case 16:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));

  return function deleteClient(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();

exports.deleteClient = deleteClient;

var deleteServiceClient = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(req, res) {
    var user_id, client_id, service_id, response, client, service;
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            user_id = req.user.user_id;
            client_id = req.params.id;
            service_id = req.params.service_id;
            _context13.next = 5;
            return _user["default"].findById(user_id);

          case 5:
            response = _context13.sent;
            if (!response) res.status(404).json({
              message: "No hay cliente con ese id"
            });
            client = response.clientes.find(function (client) {
              return client._id == client_id;
            });

            if (!client) {
              _context13.next = 18;
              break;
            }

            service = client.serviciosadquiridos.find(function (service) {
              return service._id == service_id;
            });

            if (!(service != null)) {
              _context13.next = 17;
              break;
            }

            client.serviciosadquiridos.remove(service);
            _context13.next = 14;
            return response.save();

          case 14:
            res.status(200).json({
              message: "Servicio eliminado",
              client: client
            });
            _context13.next = 18;
            break;

          case 17:
            res.status(404).json({
              message: "No hay servicio con ese id"
            });

          case 18:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));

  return function deleteServiceClient(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();

exports.deleteServiceClient = deleteServiceClient;

var deleteServiceFutureClient = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(req, res) {
    var user_id, client_id, service_id, response, client, service;
    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            user_id = req.user.user_id;
            client_id = req.params.id;
            service_id = req.params.service_id;
            _context14.next = 5;
            return _user["default"].findById(user_id);

          case 5:
            response = _context14.sent;
            client = response.clientes.find(function (client) {
              return client._id == client_id;
            });

            if (!client) {
              _context14.next = 17;
              break;
            }

            service = client.nextServices.find(function (service) {
              return service._id == service_id;
            });

            if (!(service != null)) {
              _context14.next = 16;
              break;
            }

            client.nextServices.remove(service);
            _context14.next = 13;
            return response.save();

          case 13:
            res.status(200).json({
              message: "Servicio eliminado",
              client: client
            });
            _context14.next = 17;
            break;

          case 16:
            res.status(404).json({
              message: "No hay servicio con ese id"
            });

          case 17:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));

  return function deleteServiceFutureClient(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();

exports.deleteServiceFutureClient = deleteServiceFutureClient;

var getServicesFuturesOfClient = /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(req, res) {
    var user_id, client_id, response, client;
    return _regenerator["default"].wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            user_id = req.user.user_id;
            client_id = req.params.id;
            _context15.next = 4;
            return _user["default"].findById(user_id);

          case 4:
            response = _context15.sent;
            if (!response) res.status(404).json({
              message: "No hay cliente con ese id"
            });
            client = response.clientes.find(function (client) {
              return client._id == client_id;
            });
            if (client != null) res.status(200).json(client.nextServices);else res.status(404).json({
              message: "No hay cliente con ese id"
            });

          case 8:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));

  return function getServicesFuturesOfClient(_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}(); //LOGIN CLIENT


exports.getServicesFuturesOfClient = getServicesFuturesOfClient;

var loginClient = /*#__PURE__*/function () {
  var _ref16 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(req, res) {
    var id, _req$body, username, password, response, client;

    return _regenerator["default"].wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            //const {user_id} = req.user;
            id = req.params.id;
            _req$body = req.body, username = _req$body.username, password = _req$body.password;
            _context16.next = 4;
            return _user["default"].findById(id);

          case 4:
            response = _context16.sent;
            //onsole.log(response);
            client = response.clientes.find(function (client) {
              return client.email == username && client.password == password || client.username == username && client.password == password;
            }); //console.log(client);

            if (client != null) res.status(200).json({
              message: "Cliente encontrado",
              client: client
            });else res.status(404).json({
              message: "Datos ingresados Incorrectos"
            });

          case 7:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  }));

  return function loginClient(_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}();

exports.loginClient = loginClient;

var updateUsernamePassword = /*#__PURE__*/function () {
  var _ref17 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(req, res) {
    var user_id, client_id, response, client, us;
    return _regenerator["default"].wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            user_id = req.user.user_id;
            client_id = req.params.id;
            _context17.next = 4;
            return _user["default"].findById(user_id);

          case 4:
            response = _context17.sent;
            client = response.clientes.find(function (client) {
              return client._id == client_id;
            });

            if (!(client != null)) {
              _context17.next = 19;
              break;
            }

            //DEBO BUSCAR QUE EN TODO EL ARREGLO DE LOS CLIENTES EL USUARIO SEA DIFERENTE AL RESTO
            us = response.clientes.find(function (client) {
              return client.username == req.body.username;
            });

            if (!(us != null)) {
              _context17.next = 12;
              break;
            }

            res.status(404).json({
              message: "Ya existe un cliente con ese username"
            });
            _context17.next = 17;
            break;

          case 12:
            client.username = req.body.username;
            client.password = req.body.password;
            _context17.next = 16;
            return response.save();

          case 16:
            res.status(200).json({
              message: "Cliente actualizado",
              client: client
            });

          case 17:
            _context17.next = 20;
            break;

          case 19:
            res.status(404).json({
              message: "No hay cliente con ese id"
            });

          case 20:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17);
  }));

  return function updateUsernamePassword(_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}();

exports.updateUsernamePassword = updateUsernamePassword;

var urlLoginClient = /*#__PURE__*/function () {
  var _ref18 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(req, res) {
    var user_id, url;
    return _regenerator["default"].wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            user_id = req.user.user_id;
            url = "http://localhost:3000/client/login/" + user_id;
            res.status(200).json({
              message: "URL",
              url: url
            });

          case 3:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18);
  }));

  return function urlLoginClient(_x35, _x36) {
    return _ref18.apply(this, arguments);
  };
}();

exports.urlLoginClient = urlLoginClient;
//# sourceMappingURL=client.controller.js.map