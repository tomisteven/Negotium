"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPDFs = exports.get = exports.deletePdf = exports.createPdf = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/user"));

var _cloudinary = _interopRequireDefault(require("cloudinary"));

var _fs = _interopRequireDefault(require("fs"));

var createPdf = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var user_id, _req$body, nombre, servicio, fecha, response, pdfs;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            user_id = req.user.user_id;
            _req$body = req.body, nombre = _req$body.nombre, servicio = _req$body.servicio, fecha = _req$body.fecha;
            _context.next = 4;
            return _user["default"].findById(user_id);

          case 4:
            response = _context.sent;
            pdfs = response.pdfs;

            if (req.files) {
              _cloudinary["default"].v2.uploader.upload(req.files.url.path, {
                public_id: nombre
              }, function (error, result) {
                var newPdf = {
                  nombre: nombre,
                  servicio: servicio,
                  url: result.url,
                  fecha: fecha
                };
                pdfs.push(newPdf);
                response.pdfs = pdfs;
                response.save(function (err, pdfStored) {
                  if (err) {
                    res.status(500).send({
                      message: "Error del servidor"
                    });
                  } else {
                    if (!pdfStored) {
                      res.status(404).send({
                        message: "No se ha encontrado el pdf"
                      });
                    } else {
                      res.status(200).send({
                        code: 200,
                        message: "Pdf creado correctamente",
                        pdf: pdfStored.pdfs
                      });
                    }
                  }
                });
              });
            } else {
              res.status(404).json({
                message: "No hay archivos"
              });
            }

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createPdf(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createPdf = createPdf;

var getPDFs = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var user_id, response, pdfs;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            user_id = req.user.user_id;
            _context2.next = 3;
            return _user["default"].findById(user_id);

          case 3:
            response = _context2.sent;
            pdfs = response.pdfs;
            response ? res.status(200).json(pdfs) : res.status(404).json({
              message: "No es un id Valido"
            });

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getPDFs(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getPDFs = getPDFs;

var get = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var user_id, id, response, pdfs, pdf;
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
            pdfs = response.pdfs;
            pdf = pdfs.filter(function (pdf) {
              return pdf._id == id;
            });
            response ? res.status(200).json(pdf) : res.status(404).json({
              message: "No es un id Valido"
            });

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function get(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.get = get;

var deletePdf = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var user_id, id, response, pdfs, newPdfs, result, pdf, url, path;
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
            pdfs = response.pdfs;
            newPdfs = pdfs.filter(function (pdf) {
              return pdf._id != id;
            });
            response.pdfs = newPdfs;
            _context4.next = 10;
            return response.save();

          case 10:
            result = _context4.sent;
            //eliminar del servidor
            pdf = pdfs.filter(function (pdf) {
              return pdf._id == id;
            });
            url = pdf[0].url;
            path = "./uploads/".concat(url);

            _fs["default"].unlink(path, function (err) {
              if (err) {
                console.log(err);
              } else {
                console.log("Archivo eliminado");
              }
            });

            result ? res.status(200).json(result.pdfs) : res.status(404).json({
              message: "No es un id Valido"
            });

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deletePdf(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deletePdf = deletePdf;
//# sourceMappingURL=pdf.controller.js.map