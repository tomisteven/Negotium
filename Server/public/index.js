"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

var _mongoose = require("mongoose");

var _dotenv = _interopRequireDefault(require("dotenv"));

var PORT_SERVER = 4020; //conectar base de datos moongo

_dotenv["default"].config();

(0, _mongoose.connect)(process.env.MONGO_URL, function (err, res) {
  if (err) {
    throw err;
  } else {
    console.log("La conexion a la base de datos es correcta");

    _app["default"].listen(PORT_SERVER || 2170, function () {
      console.log("#####################");
      console.log("##### API REST #####");
      console.log("#####################");
    });
  }
});
//# sourceMappingURL=index.js.map