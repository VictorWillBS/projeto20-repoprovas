"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var joi_1 = __importDefault(require("joi"));
var re = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
var testSchema = joi_1["default"].object({
    name: joi_1["default"].string().required(),
    url: joi_1["default"].string().regex(re).required(),
    category: joi_1["default"].string().required(),
    discipline: joi_1["default"].string().required(),
    teacher: joi_1["default"].string().required()
});
exports["default"] = testSchema;
