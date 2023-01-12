"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _auth = _interopRequireDefault(require("./routes/auth.router"));

var _clients = _interopRequireDefault(require("./routes/clients.router"));

var _user = _interopRequireDefault(require("./routes/user.router"));

var _recordatorios = _interopRequireDefault(require("./routes/recordatorios.router"));

var _services = _interopRequireDefault(require("./routes/services.router"));

var _pdf = _interopRequireDefault(require("./routes/pdf.router"));

var _publicaciones = _interopRequireDefault(require("./routes/publicaciones.router"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config(); //configuramos el servidor


var app = (0, _express["default"])(); //configuraciones

app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json()); //configuramos el cors

app.use((0, _cors["default"])()); //archivos estaticos a la carpeta uploads

app.use(_express["default"]["static"]("./uploads")); //rutas

app.use("/", _user["default"]); //rutas de usuario

app.use("/auth", _auth["default"]); //rutas de autenticacion para registro y login

app.use("/client", _clients["default"]); //rutas de clientes del usuario

app.use("/recordatorios", _recordatorios["default"]); //rutas de recordatorios de clientes del usuario

app.use("/services", _services["default"]);
app.use("/files", _pdf["default"]);
app.use("/news", _publicaciones["default"]);
module.exports = app;
//# sourceMappingURL=app.js.map