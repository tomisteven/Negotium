"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemService = exports.getServices = exports.deleteService = exports.createService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/user.js"));

/* servicios: [{
        nombre: String,
        precio: Number,
        cantidadVendidos: Number,
        cantidadDisponibles: Number,
        descripcion: String,
        imagen: String,
        fecha: Date
}],*/
var getServices = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var user_id, response, services;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            user_id = req.user.user_id;
            _context.next = 3;
            return _user["default"].findById(user_id);

          case 3:
            response = _context.sent;
            services = response.servicios;
            response ? res.status(200).json(services) : res.status(404).json({
              message: "No es un id Valido"
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getServices(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getServices = getServices;

var createService = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var user_id, _req$body, nombre, precio, cantidadVendidos, cantidadDisponibles, descripcion, imagen, response, services, newService, result;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            user_id = req.user.user_id;
            _req$body = req.body, nombre = _req$body.nombre, precio = _req$body.precio, cantidadVendidos = _req$body.cantidadVendidos, cantidadDisponibles = _req$body.cantidadDisponibles, descripcion = _req$body.descripcion, imagen = _req$body.imagen;
            _context2.next = 4;
            return _user["default"].findById(user_id);

          case 4:
            response = _context2.sent;
            services = response.servicios;
            newService = {
              nombre: nombre,
              precio: precio,
              cantidadVendidos: cantidadVendidos,
              cantidadDisponibles: cantidadDisponibles,
              descripcion: descripcion
            };
            services.push(newService);
            response.servicios = services;
            _context2.next = 11;
            return response.save();

          case 11:
            result = _context2.sent;
            result ? res.status(200).json(result) : res.status(404).json({
              message: "No es un id Valido"
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createService(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createService = createService;

var itemService = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var user_id, response, services, items;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            user_id = req.user.user_id;
            _context3.next = 3;
            return _user["default"].findById(user_id);

          case 3:
            response = _context3.sent;
            services = response.servicios;
            items = [];
            services.forEach(function (item, index) {
              items.push(item.nombre);
            });
            response ? res.status(200).json(items) : res.status(404).json({
              message: "No es un id Valido"
            });

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function itemService(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.itemService = itemService;

var deleteService = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var user_id, id, response, services, newServices, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            user_id = req.user.user_id;
            id = req.params.id;
            _context4.next = 4;
            return _user["default"].findById(user_id);

          case 4:
            response = _context4.sent;
            services = response.servicios;
            newServices = services.filter(function (service) {
              return service._id != id;
            });
            response.servicios = newServices;
            _context4.next = 10;
            return response.save();

          case 10:
            result = _context4.sent;
            result ? res.status(200).json(result) : res.status(404).json({
              message: "No es un id Valido"
            });

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteService(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteService = deleteService;
//# sourceMappingURL=services.controller.js.map