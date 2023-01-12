"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var UserSchema = new _mongoose.Schema({
  name: String,
  lastname: String,
  email: {
    type: String
  },
  password: String,
  role: String,
  membresia: Boolean,
  avatar: String,
  url_login: String,
  clientes: [{
    username: String,
    password: {
      type: String,
      "default": "123456"
    },
    nombre: String,
    apellido: String,
    telefono: String,
    email: {
      type: String
    },
    direccion: String,
    fecha: {
      type: Date,
      "default": Date.now()
    },
    deuda: {
      type: Boolean,
      "default": false
    },
    deudaTotal: {
      type: Number,
      "default": 0
    },
    gastoTotal: {
      type: Number,
      "default": 0
    },
    serviciosadquiridos: [{
      nombre: String,
      precio: Number,
      cantidad: Number,
      fecha: {
        type: Date,
        "default": Date.now()
      }
    }],
    nextServices: [{
      service: String,
      fecha: {
        type: String || Date,
        "default": Date.now()
      },
      completed: {
        type: Boolean,
        "default": false
      },
      hora: {
        type: String,
        "default": "00:00"
      }
    }]
  }],
  servicios: [{
    nombre: String,
    precio: Number,
    cantidadVendidos: Number,
    cantidadDisponibles: Number,
    descripcion: String,
    imagen: String,
    fecha: Date
  }],
  pdfs: [{
    nombre: String,
    tipo: String,
    servicio: String,
    url: String,
    localUrl: String,
    fecha: Date
  }],
  recordatorios: [{
    nombre: String,
    descripcion: String,
    fecha: {
      type: Date,
      "default": Date.now()
    },
    fechaLimite: {
      type: Date,
      "default": ""
    },
    prioridad: String,
    completed: {
      type: Boolean,
      "default": false
    }
  }],
  publicaciones: [{
    titulo: String,
    descripcion: String,
    subtitulo: String,
    imagen: String,
    localUrl: String,
    fecha: {
      type: Date,
      "default": Date.now()
    }
  }]
}); //exportar

var _default = _mongoose["default"].model('User', UserSchema);

exports["default"] = _default;
//# sourceMappingURL=user.js.map