"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var app_1 = __importDefault(require("../../src/app"));
var supertest_1 = __importDefault(require("supertest"));
var testFactory = __importStar(require("../factory/testFactory"));
var userFactory = __importStar(require("../factory/userFactory"));
var database_1 = __importDefault(require("../../src/database/database"));
var tokenFactory_1 = __importDefault(require("../factory/tokenFactory"));
beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, database_1["default"].$executeRaw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["TRUNCATE  TABLE \"users\""], ["TRUNCATE  TABLE \"users\""])))];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
afterAll(function () {
    database_1["default"].$disconnect;
});
describe('Test testRoute POST /test/create ', function () {
    it('Test Create Correct Data test expect 201', function () { return __awaiter(void 0, void 0, void 0, function () {
        var userData, token, testData, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userData = userFactory.createUserAllowed();
                    return [4 /*yield*/, (0, tokenFactory_1["default"])(userData)];
                case 1:
                    token = _a.sent();
                    testData = testFactory.testAllowed();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/test/create').send(testData).set('Authorization', "Bearer ".concat(token))];
                case 2:
                    result = _a.sent();
                    expect(result.status).toBe(201);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Test create Incorrect Data test expect 400', function () { return __awaiter(void 0, void 0, void 0, function () {
        var userData, token, testData, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userData = userFactory.createUserAllowed();
                    return [4 /*yield*/, (0, tokenFactory_1["default"])(userData)];
                case 1:
                    token = _a.sent();
                    testData = testFactory.testNotAllowed();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/test/create').send(testData).set('Authorization', "Bearer ".concat(token))];
                case 2:
                    result = _a.sent();
                    expect(result.status).toBe(400);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Test Create Duplicate Data Test expect 409', function () { return __awaiter(void 0, void 0, void 0, function () {
        var userData, token, testData, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userData = userFactory.createUserAllowed();
                    return [4 /*yield*/, (0, tokenFactory_1["default"])(userData)];
                case 1:
                    token = _a.sent();
                    testData = testFactory.testAllowed();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/test/create').send(testData).set('Authorization', "Bearer ".concat(token))];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/test/create').send(testData).set('Authorization', "Bearer ".concat(token))];
                case 3:
                    result = _a.sent();
                    expect(result.status).toBe(409);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Test Create Data Test No Parsing Token expect 401', function () { return __awaiter(void 0, void 0, void 0, function () {
        var testData, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testData = testFactory.testAllowed();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/test/create').send(testData)];
                case 1:
                    result = _a.sent();
                    expect(result.status).toBe(401);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('Test testRoute Get /tests/teacher', function () {
    it('Send Token. Expect 200', function () { return __awaiter(void 0, void 0, void 0, function () {
        var userData, token, testData, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userData = userFactory.createUserAllowed();
                    return [4 /*yield*/, (0, tokenFactory_1["default"])(userData)];
                case 1:
                    token = _a.sent();
                    testData = testFactory.testAllowed();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/test/create').send(testData).set('Authorization', "Bearer ".concat(token))];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).get('/tests/teachers').send().set('Authorization', "Bearer ".concat(token))];
                case 3:
                    result = _a.sent();
                    expect(result.status).toBe(200);
                    expect(result.body).toBeInstanceOf(Object);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('Test testRoute Get /tests/discipline', function () {
    it('Send Token. Expect 200', function () { return __awaiter(void 0, void 0, void 0, function () {
        var userData, token, testData, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userData = userFactory.createUserAllowed();
                    return [4 /*yield*/, (0, tokenFactory_1["default"])(userData)];
                case 1:
                    token = _a.sent();
                    testData = testFactory.testAllowed();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/test/create').send(testData).set('Authorization', "Bearer ".concat(token))];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).get('/tests/teachers').send().set('Authorization', "Bearer ".concat(token))];
                case 3:
                    result = _a.sent();
                    expect(result.status).toBe(200);
                    expect(result.body).toBeInstanceOf(Object);
                    return [2 /*return*/];
            }
        });
    }); });
    it('No Send Token. Expect 401', function () { return __awaiter(void 0, void 0, void 0, function () {
        var userData, token, testData, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userData = userFactory.createUserAllowed();
                    return [4 /*yield*/, (0, tokenFactory_1["default"])(userData)];
                case 1:
                    token = _a.sent();
                    testData = testFactory.testAllowed();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/test/create').send(testData).set('Authorization', "Bearer ".concat(token))];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).get('/tests/discipline').send()];
                case 3:
                    result = _a.sent();
                    expect(result.status).toBe(401);
                    return [2 /*return*/];
            }
        });
    }); });
});
var templateObject_1;
