"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUrlLogin = createUrlLogin;
exports.deleteUser = exports.createUser = void 0;
exports.getAll = getAll;
exports.getMe = getMe;
exports.getMembresiaActive = getMembresiaActive;
exports.getMembresiaInactive = getMembresiaInactive;
exports.updateUser = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bcryptNodejs = _interopRequireDefault(require("bcrypt-nodejs"));

var _user = _interopRequireDefault(require("../models/user"));

var _images = require("../utils/images");

var _jwt = require("../utils/jwt");

var _cloudinary = _interopRequireDefault(require("cloudinary"));

var _fs = _interopRequireDefault(require("fs"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function getMe(_x, _x2) {
  return _getMe.apply(this, arguments);
}

function _getMe() {
  _getMe = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var user_id, response;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            user_id = req.user.user_id;
            _context4.next = 3;
            return _user["default"].findById(user_id);

          case 3:
            response = _context4.sent;
            if (response) res.status(200).json(response);else res.status(404).json({
              message: "User not found"
            });

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getMe.apply(this, arguments);
}

function createUrlLogin(_x3, _x4) {
  return _createUrlLogin.apply(this, arguments);
}

function _createUrlLogin() {
  _createUrlLogin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var user_id, response;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            user_id = req.user.user_id;
            _context5.next = 3;
            return _user["default"].findById(user_id);

          case 3:
            response = _context5.sent;

            if (response) {
              response.url_login = "http://localhost:3000/login/" + user_id;
              response.save();
              res.status(200).json(response);
            } else res.status(404).json({
              message: "No existe usuario"
            });

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _createUrlLogin.apply(this, arguments);
}

function getAll(_x5, _x6) {
  return _getAll.apply(this, arguments);
}

function _getAll() {
  _getAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var role, response;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            role = req.query.role;
            _context6.next = 3;
            return _user["default"].find();

          case 3:
            response = _context6.sent;
            response ? res.status(200).json(response) : res.status(404).json({
              message: "Users not found"
            });

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _getAll.apply(this, arguments);
}

function getMembresiaActive(_x7, _x8) {
  return _getMembresiaActive.apply(this, arguments);
}

function _getMembresiaActive() {
  _getMembresiaActive = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var response;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _user["default"].find({
              membresia: true
            });

          case 2:
            response = _context7.sent;
            response ? res.status(200).json(response) : res.status(404).json({
              message: "Users not found"
            });

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _getMembresiaActive.apply(this, arguments);
}

function getMembresiaInactive(_x9, _x10) {
  return _getMembresiaInactive.apply(this, arguments);
}

function _getMembresiaInactive() {
  _getMembresiaInactive = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var response;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return _user["default"].find({
              membresia: false
            });

          case 2:
            response = _context8.sent;
            response ? res.status(200).json(response) : res.status(404).json({
              message: "Users not found"
            });

          case 4:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _getMembresiaInactive.apply(this, arguments);
}

var createUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var password, salt, hash, user, imagePath;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            password = req.body.password; //console.log(req.body);

            salt = _bcryptNodejs["default"].genSaltSync(10);
            hash = _bcryptNodejs["default"].hashSync(password, salt);
            user = new _user["default"](_objectSpread(_objectSpread({}, req.body), {}, {
              password: hash,
              active: true,
              url_login: "http://localhost:3000/login/" + req.body._id
            }));
            console.log(req.body);

            if (req.files.avatar) {
              imagePath = (0, _images.getFiles)(req.files.avatar);
              user.avatar = imagePath;
            }

            user.save(function (err, userStored) {
              if (err) {
                res.status(500).send({
                  message: "Error de servidor"
                });
              } else {
                if (!userStored) {
                  res.status(404).send({
                    message: "Error al crear el usuario"
                  });
                } else {
                  res.status(200).send({
                    message: "Usuario creado correctamente",
                    user: userStored,
                    accessToken: (0, _jwt.createToken)(userStored),
                    refreshToken: (0, _jwt.createRefreshToken)(userStored)
                  });
                }
              }
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createUser(_x11, _x12) {
    return _ref.apply(this, arguments);
  };
}();

exports.createUser = createUser;

var updateUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, userData, USER, emailExist, salt, hash, imagePath;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            userData = req.body;
            _context2.next = 4;
            return _user["default"].findById(id);

          case 4:
            USER = _context2.sent;
            _context2.next = 7;
            return _user["default"].findById(id);

          case 7:
            emailExist = _context2.sent;

            if (!(emailExist.email == userData.email)) {
              _context2.next = 12;
              break;
            }

            res.status(404).send({
              message: "El email ya existe"
            });
            _context2.next = 21;
            break;

          case 12:
            //si el usuario envia una nueva contraseña
            if (userData.password) {
              salt = _bcryptNodejs["default"].genSaltSync(10);
              hash = _bcryptNodejs["default"].hashSync(userData.password, salt);
              userData.password = hash;
            } else {
              delete userData.password;
            } //si el usuario envia una nueva imagen


            if (!req.files.avatar) {
              _context2.next = 19;
              break;
            }

            imagePath = (0, _images.getFiles)(req.files.avatar);
            _context2.next = 17;
            return _cloudinary["default"].v2.uploader.destroy(USER.email, function (err, result) {
              if (err) {
                res.status(500).send({
                  message: "Error al eliminar la imagen de cloudinary"
                });
              }
            });

          case 17:
            _context2.next = 19;
            return _cloudinary["default"].v2.uploader.upload(req.files.avatar.path, {
              public_id: USER.email
            }, function (err, result) {
              if (err) {
                res.status(500).send({
                  message: "Error al subir la imagen a cloudinary"
                });
              } else {
                userData.avatar = result.url;

                _fs["default"].unlinkSync("./uploads/" + imagePath, function (err) {
                  if (err) {
                    res.status(500).send({
                      message: "Error al eliminar la imagen del servidor"
                    });
                  }
                });
              }
            });

          case 19:
            _context2.next = 21;
            return _user["default"].findByIdAndUpdate({
              _id: id
            }, userData, function (err, userUpdate) {
              if (err) {
                res.status(500).send({
                  message: "Error al actualizar el usuario"
                });
              } else {
                if (!userUpdate) {
                  res.status(404).send({
                    message: "No se ha encontrado el usuario"
                  });
                } else {
                  res.status(200).send({
                    message: "Usuario actualizado correctamente",
                    user: userUpdate
                  });
                }
              }
            });

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function updateUser(_x13, _x14) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updateUser = updateUser;

var deleteUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, USER;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id; //buscamos el usuario

            USER = _user["default"].findById(id);
            _context3.next = 4;
            return _user["default"].findById(id, function (err, user) {
              if (err) {
                res.status(500).send({
                  message: "Error del servidor"
                });
              } else {
                if (!user) {
                  res.status(404).send({
                    message: "Usuario no encontrado"
                  });
                } else {
                  //eliminamos el usuario
                  user.remove(function (err) {
                    if (err) {
                      res.status(500).send({
                        message: "Error del servidor"
                      });
                    } else {
                      res.status(200).send({
                        message: "Usuario eliminado correctamente"
                      });
                    }
                  });
                }
              }
            });

          case 4:
            _context3.next = 6;
            return _cloudinary["default"].v2.uploader.destroy(USER.email, function (err, result) {
              if (err) {
                res.status(500).send({
                  message: "Error al eliminar la imagen de cloudinary"
                });
              }
            });

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function deleteUser(_x15, _x16) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteUser = deleteUser;
//# sourceMappingURL=user.controller.js.map