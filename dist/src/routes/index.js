"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var authRoute_1 = __importDefault(require("./authRoute"));
var testRoute_1 = __importDefault(require("./testRoute"));
var router = (0, express_1.Router)();
router.use(authRoute_1["default"]);
router.use(testRoute_1["default"]);
exports["default"] = router;
