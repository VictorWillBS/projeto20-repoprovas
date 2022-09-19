"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var validSchema_1 = __importDefault(require("../middlewares/validSchema"));
var validToken_1 = __importDefault(require("../middlewares/validToken"));
var testSchema_1 = __importDefault(require("../utils/schemas/testSchema"));
var testController = __importStar(require("../controller/testController"));
var testRoute = (0, express_1.Router)();
testRoute.post('/test/create', validToken_1["default"], (0, validSchema_1["default"])(testSchema_1["default"]), testController.createTest);
testRoute.get('/tests/discipline', validToken_1["default"], testController.getTestOrderByDiscipline);
testRoute.get('/tests/teachers', validToken_1["default"], testController.getTestOrderByTeacher);
exports["default"] = testRoute;
