"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRecordatorio = exports.getRecordatorios = exports.deleteRecordatorio = exports.createRecordatorio = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/user.js"));

/*  nombre: String,
        descripcion: String,
        fecha: Date,
        prioridad: String */
var getRecordatorios = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var user_id, response, recordatorios;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            user_id = req.user.user_id;
            _context.next = 3;
            return _user["default"].findById(user_id);

          case 3:
            response = _context.sent;
            if (!response) res.status(404).json({
              message: "No hay cliente con ese id"
            });
            recordatorios = response.recordatorios;
            if (recordatorios != null) res.status(200).json(recordatorios);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getRecordatorios(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getRecordatorios = getRecordatorios;

var createRecordatorio = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var user_id, response, recordatorio;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            user_id = req.user.user_id;
            _context2.next = 3;
            return _user["default"].findById(user_id);

          case 3:
            response = _context2.sent;
            if (!response) res.status(404).json({
              message: "No hay cliente con ese id"
            });
            recordatorio = req.body;
            response.recordatorios.push(recordatorio);
            _context2.next = 9;
            return response.save();

          case 9:
            res.status(200).json({
              message: "Recordatorio creado",
              recordatorio: recordatorio
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createRecordatorio(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createRecordatorio = createRecordatorio;

var updateRecordatorio = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var user_id, id, response, recordatorio;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            user_id = req.user.user_id;
            id = req.params.id;
            _context3.next = 4;
            return _user["default"].findById(user_id);

          case 4:
            response = _context3.sent;
            if (!response) res.status(404).json({
              message: "No hay cliente con ese id"
            });
            recordatorio = response.recordatorios.find(function (recordatorio) {
              return recordatorio._id == id;
            });

            if (!(recordatorio != null)) {
              _context3.next = 16;
              break;
            }

            recordatorio.nombre = req.body.nombre || recordatorio.nombre;
            recordatorio.descripcion = req.body.descripcion || recordatorio.descripcion;
            recordatorio.fechaLimite = req.body.fechaLimite || recordatorio.fechaLimite;
            recordatorio.prioridad = req.body.prioridad || recordatorio.prioridad;
            recordatorio.completed = req.body.completed || recordatorio.completed;
            _context3.next = 15;
            return response.save();

          case 15:
            res.status(200).json({
              message: "Recordatorio actualizado",
              recordatorio: recordatorio
            });

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function updateRecordatorio(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updateRecordatorio = updateRecordatorio;

var deleteRecordatorio = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var user_id, id, response, recordatorio;
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
            if (!response) res.status(404).json({
              message: "No hay cliente con ese id"
            });
            recordatorio = response.recordatorios.find(function (recordatorio) {
              return recordatorio._id == id;
            });

            if (!(recordatorio != null)) {
              _context4.next = 12;
              break;
            }

            response.recordatorios = response.recordatorios.filter(function (recordatorio) {
              return recordatorio._id != id;
            });
            _context4.next = 11;
            return response.save();

          case 11:
            res.status(200).json({
              message: "Recordatorio eliminado",
              recordatorio: recordatorio
            });

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteRecordatorio(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteRecordatorio = deleteRecordatorio;
//# sourceMappingURL=recordatorios.controller.js.map