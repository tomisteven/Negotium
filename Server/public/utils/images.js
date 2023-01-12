"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPDF = exports.getFiles = void 0;

var getFiles = function getFiles(file, nombre) {
  var filePath = file.path;
  var fileSplit = filePath.split("\\");
  var fileComplete = fileSplit[1] + "/" + fileSplit[2];
  return fileComplete;
};

exports.getFiles = getFiles;

var getPDF = function getPDF(file, nombre) {
  var filePath = file.path;
  var fileSplit = filePath.split("\\");
  var fileComplete = fileSplit[1] + "/" + nombre + ".pdf";
  return fileComplete;
};

exports.getPDF = getPDF;
//# sourceMappingURL=images.js.map