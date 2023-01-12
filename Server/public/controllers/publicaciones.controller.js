"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testCloudinary = exports.getNews = exports.deleteNew = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/user"));

var _images = require("../utils/images");

var _cloudinary = _interopRequireDefault(require("cloudinary"));

var _fs = _interopRequireDefault(require("fs"));

/* const createPublicacion = async(req, res) => {
    const { title, description, image, subtitulo } = req.body;
    const {user_id} = req.user;

    const newPublicacion = {
        title,
        description,
        subtitulo,
        localUrl
    }

    if(req.files.imagen){
        const img = getFiles(req.files.imagen);
        newPublicacion.imagen = img;
    }

     const user = await User.findById(user_id)
     console.log(user);
     if(!user){
        res.status(404).send({message: "Usuario no encontrado"})
    }else{
        user.publicaciones.push(newPublicacion);
        user.save((err, publicacionStored) => {
            if(err){
                res.status(500).send({message: "Error del servidor"})
            }else{
                if(!publicacionStored){
                    res.status(404).send({message: "No se ha encontrado la publicacion"})
                }else{

                    //eliminar del servidor
                    const news = user.publicaciones.filter((pdf) => {
                        return pdf._id == publicacionStored.publicaciones[0]._id;
                    });
                    const url = news[0].url;
                    const path = `./uploads/${url}`;
                    fs.unlink(path, (err) => {
                        if(err){
                            console.log(err)
                         }else{
                            console.log("Archivo eliminado")
                        }
                    })

                    res.status(200).send({code: 200, message: "Publicacion creada correctamente", Publicaciones: publicacionStored.publicaciones})
                }
            }
        })

    }
} */
var createPublicacionAndImage = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, titulo, descripcion, subtitulo, user_id, user, newPublicacion, local;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, titulo = _req$body.titulo, descripcion = _req$body.descripcion, subtitulo = _req$body.subtitulo;
            user_id = req.user.user_id;
            _context.next = 4;
            return _user["default"].findById(user_id);

          case 4:
            user = _context.sent;
            newPublicacion = {
              titulo: titulo,
              descripcion: descripcion,
              subtitulo: subtitulo,
              imagen: "",
              localUrl: ""
            };

            if (req.files.imagen) {
              local = (0, _images.getFiles)(req.files.imagen);

              _cloudinary["default"].v2.uploader.upload(req.files.imagen.path, {
                public_id: titulo
              }, function (error, result) {
                if (result) {
                  //console.log(result);
                  newPublicacion.localUrl = local;
                  newPublicacion.imagen = result.url;
                  user.publicaciones.push(newPublicacion);
                  user.save(function (err, publicacionStored) {
                    if (err) {
                      res.status(500).send({
                        message: "Error del servidor"
                      });
                    } else {
                      if (publicacionStored) {
                        //eliminamos del servidor local
                        var news = user.publicaciones.find(function (i) {
                          return i.localUrl == local;
                        });
                        var url = news.localUrl;
                        var path = "./uploads/".concat(url);

                        _fs["default"].unlink(path, function (err) {
                          if (err) {
                            console.log(err);
                          } else {
                            res.status(200).send({
                              message: "Imagen subida correctamente y eliminada local",
                              arr: publicacionStored.publicaciones
                            });
                          }
                        }); //console.log(news);

                      } else {
                        res.status(404).send({
                          message: "No se ha encontrado la publicacion"
                        });
                      }
                    }

                    if (error) {
                      res.status(500).send({
                        message: "Error del servidor",
                        error: error
                      });
                    }
                  });
                }
              });
            }

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createPublicacionAndImage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.testCloudinary = createPublicacionAndImage;

var getNews = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var user_id, user;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            user_id = req.user.user_id;
            _context2.next = 3;
            return _user["default"].findById(user_id);

          case 3:
            user = _context2.sent;

            if (!user) {
              res.status(404).send({
                message: "Usuario no encontrado"
              });
            } else {
              res.status(200).send({
                message: "Noticias encontradas",
                noticias: user.publicaciones
              });
            }

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getNews(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getNews = getNews;

var deleteNew = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var user_id, user, id, publicacion, news;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            user_id = req.user.user_id;
            _context3.next = 3;
            return _user["default"].findById(user_id);

          case 3:
            user = _context3.sent;
            id = req.params.id;

            if (user) {
              _context3.next = 9;
              break;
            }

            res.status(404).send({
              message: "Usuario no encontrado"
            });
            _context3.next = 15;
            break;

          case 9:
            publicacion = user.publicaciones.find(function (i) {
              return i._id == id;
            });
            _context3.next = 12;
            return _cloudinary["default"].v2.uploader.destroy(publicacion.titulo, function (error, result) {
              if (error) {
                res.status(500).send({
                  message: "Error del servidor para eliminar de cloudinary",
                  error: error
                });
              } else {
                console.log(result);
              }
            });

          case 12:
            news = user.publicaciones.filter(function (i) {
              return i._id != id;
            });
            user.publicaciones = news;
            user.save(function (err, publicacionStored) {
              if (err) {
                res.status(500).send({
                  message: "Error del servidor"
                });
              } else {
                if (!publicacionStored) {
                  res.status(404).send({
                    message: "No se ha encontrado la publicacion"
                  });
                } else {
                  res.status(200).send({
                    message: "Publicacion eliminada correctamente del servidor y cloudinary",
                    Publicaciones: publicacionStored.publicaciones
                  });
                }
              }
            });

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function deleteNew(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteNew = deleteNew;
//# sourceMappingURL=publicaciones.controller.js.map