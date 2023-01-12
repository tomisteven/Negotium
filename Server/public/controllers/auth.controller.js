"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = exports.refreshToken = exports.login = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bcryptNodejs = _interopRequireDefault(require("bcrypt-nodejs"));

var _user = _interopRequireDefault(require("../models/user"));

var _jwt = require("../utils/jwt");

var _cloudinary = _interopRequireDefault(require("cloudinary"));

var _fs = _interopRequireDefault(require("fs"));

var register = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, password, repeatPassword, email, name, lastname, user, users, emailExist;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, password = _req$body.password, repeatPassword = _req$body.repeatPassword, email = _req$body.email, name = _req$body.name, lastname = _req$body.lastname;
            user = new _user["default"]({
              email: email.toLowerCase(),
              name: name,
              lastname: lastname,
              role: "user",
              membresia: false
            });

            if (!req.files.avatar) {
              _context.next = 5;
              break;
            }

            _context.next = 5;
            return _cloudinary["default"].v2.uploader.upload(req.files.avatar.path, {
              public_id: email
            }, function (err, resultado) {
              console.log(resultado);
              user.avatar = resultado.url;

              _fs["default"].unlinkSync(req.files.avatar.path, function (err) {
                if (err) res.status(500).send({
                  message: "Error al eliminar el archivo de manera local"
                });
              });
            });

          case 5:
            _context.next = 7;
            return _user["default"].find();

          case 7:
            users = _context.sent;
            emailExist = users.some(function (user) {
              return user.email === email;
            });
            if (emailExist) res.status(404).send({
              message: "El email ya existe"
            });else {
              if (!password || !repeatPassword) {
                res.status(404).send({
                  message: "Las contraseñas son obligatorias"
                });
              } else {
                if (password !== repeatPassword) {
                  res.status(404).send({
                    message: "Las contraseñas tienen que ser iguales"
                  });
                } else {
                  _bcryptNodejs["default"].hash(password, null, null, function (err, hash) {
                    if (err) {
                      res.status(500).send({
                        message: "Error al encriptar la contraseña"
                      });
                    } else {
                      user.password = hash;
                      user.save(function (err, userStored) {
                        if (err) {
                          console.log(err);
                          res.status(500).send({
                            message: err
                          });
                        } else {
                          if (!userStored) {
                            res.status(404).send({
                              message: "Error al crear el usuario"
                            });
                          } else {
                            res.status(200).send({
                              userStored: userStored
                            });
                          }
                        }
                      });
                    }
                  });
                }
              }
            }

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function register(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.register = register;

var login = function login(req, res) {
  var _req$body2 = req.body,
      email = _req$body2.email,
      password = _req$body2.password;
  if (!email) res.status(404).send({
    message: "El email es obligatorio"
  });
  if (!password) res.status(404).send({
    message: "La contraseña es obligatoria"
  });

  _user["default"].findOne({
    email: email.toLowerCase()
  }, function (err, userStored) {
    if (err) res.status(500).send({
      message: "Error del servidor"
    });
    if (!userStored) res.status(404).send({
      message: "Usuario no encontrado"
    });else {
      _bcryptNodejs["default"].compare(password, userStored.password, function (bycriptErr, check) {
        if (bycriptErr) res.status(500).send({
          message: "Error del servidor"
        });
        if (!check) res.status(404).send({
          message: "La contraseña es incorrecta"
        });else res.status(200).send({
          accessToken: (0, _jwt.createToken)(userStored),
          refreshToken: (0, _jwt.createRefreshToken)(userStored) //agregue los tokens para que no me de error cuando me creo un usuario nuevo desde un admin

        });
      });
    }
  });
};

exports.login = login;

var refreshToken = function refreshToken(req, res) {
  var token = req.body.token;
  if (!token) res.status(404).send({
    message: "El token requerido"
  });

  var _decodedToken = (0, _jwt.decodedToken)(token),
      user_id = _decodedToken.user_id;

  if (!user_id) res.status(404).send({
    message: "El token es invalido"
  });else {
    _user["default"].findOne({
      _id: user_id
    }, function (err, userStored) {
      if (err) res.status(500).send({
        message: "Error del servidor"
      });
      if (!userStored) res.status(404).send({
        message: "Usuario no encontrado"
      });else {
        res.status(200).send({
          accessToken: (0, _jwt.createToken)(userStored) //refreshToken: createRefreshToken(userStored)

        });
      }
    });
  }
}; //exportamos


exports.refreshToken = refreshToken;
//# sourceMappingURL=auth.controller.js.map