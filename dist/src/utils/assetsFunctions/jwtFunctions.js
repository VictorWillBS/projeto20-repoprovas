"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.gerateJwt = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
function gerateJwt(data) {
    var secret = process.env.JWT_SECRET;
    var config = { expiresIn: 60 * 60 * 24 * 30 };
    var content = { id: data };
    var newToken = jsonwebtoken_1["default"].sign(content, secret, config);
    return newToken;
}
exports.gerateJwt = gerateJwt;
