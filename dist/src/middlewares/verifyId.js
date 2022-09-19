"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
function verifyId(req, res, next) {
    var id = req.params.id;
    var parseIdNumber = Number(id);
    if (isNaN(parseIdNumber)) {
        return res.status(400).send('Invalid Id.');
    }
    return next();
}
exports["default"] = verifyId;
