"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.comparePassword = exports.encriptByHash = void 0;
var bcrypt_1 = __importDefault(require("bcrypt"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
function encriptByHash(password) {
    var newPassword = bcrypt_1["default"].hashSync(password, 10);
    return newPassword;
}
exports.encriptByHash = encriptByHash;
function comparePassword(password, encryptedPassword) {
    var isSame = bcrypt_1["default"].compareSync(password, encryptedPassword);
    return isSame;
}
exports.comparePassword = comparePassword;
