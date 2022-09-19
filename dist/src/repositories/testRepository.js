"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
exports.insertTest = exports.getTestOrderByTeacher = exports.getTestOrderByDiscipline = exports.getTestByPdfUrl = exports.getTestByName = exports.getCategoryByName = exports.getTeacherDisciplinesByIds = exports.getDisciplineByName = exports.getTeacherByName = void 0;
var database_1 = __importDefault(require("../database/database"));
function getTeacherByName(teacherName) {
    return __awaiter(this, void 0, void 0, function () {
        var teacher;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1["default"].teachers.findUnique({ where: { name: teacherName } })];
                case 1:
                    teacher = _a.sent();
                    return [2 /*return*/, teacher];
            }
        });
    });
}
exports.getTeacherByName = getTeacherByName;
function getDisciplineByName(disciplineName) {
    return __awaiter(this, void 0, void 0, function () {
        var discipline;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1["default"].disciplines.findUnique({ where: { name: disciplineName } })];
                case 1:
                    discipline = _a.sent();
                    return [2 /*return*/, discipline];
            }
        });
    });
}
exports.getDisciplineByName = getDisciplineByName;
function getTeacherDisciplinesByIds(disciplineId, teacherId) {
    return __awaiter(this, void 0, void 0, function () {
        var teachersDisciplines;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1["default"].teachersDisciplines.findFirst({ where: { disciplineId: disciplineId, teacherId: teacherId } })];
                case 1:
                    teachersDisciplines = _a.sent();
                    return [2 /*return*/, teachersDisciplines];
            }
        });
    });
}
exports.getTeacherDisciplinesByIds = getTeacherDisciplinesByIds;
function getCategoryByName(categoryName) {
    return __awaiter(this, void 0, void 0, function () {
        var category;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1["default"].categories.findUnique({ where: { name: categoryName } })];
                case 1:
                    category = _a.sent();
                    return [2 /*return*/, category];
            }
        });
    });
}
exports.getCategoryByName = getCategoryByName;
function getTestByName(name, teacherDisciplinesId) {
    return __awaiter(this, void 0, void 0, function () {
        var test;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1["default"].test.findFirst({ where: { name: name, teacherDisciplinesId: teacherDisciplinesId } })];
                case 1:
                    test = _a.sent();
                    return [2 /*return*/, test];
            }
        });
    });
}
exports.getTestByName = getTestByName;
function getTestByPdfUrl(pdfUrl, teacherDisciplinesId) {
    return __awaiter(this, void 0, void 0, function () {
        var test;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1["default"].test.findFirst({ where: { pdfUrl: pdfUrl, teacherDisciplinesId: teacherDisciplinesId } })];
                case 1:
                    test = _a.sent();
                    return [2 /*return*/, test];
            }
        });
    });
}
exports.getTestByPdfUrl = getTestByPdfUrl;
function getTestOrderByDiscipline() {
    return __awaiter(this, void 0, void 0, function () {
        var tests;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1["default"].terms.findMany({
                        distinct: ["number"], select: {
                            number: true,
                            discipline: {
                                select: {
                                    name: true,
                                    teachersDisciplines: {
                                        select: {
                                            test: {
                                                distinct: ['categoryId'],
                                                select: {
                                                    category: {
                                                        select: {
                                                            id: true,
                                                            name: true
                                                        }
                                                    },
                                                    name: true,
                                                    pdfUrl: true,
                                                    teachersDisciplines: {
                                                        select: {
                                                            teachers: {
                                                                select: {
                                                                    name: true
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    })];
                case 1:
                    tests = _a.sent();
                    return [2 /*return*/, tests];
            }
        });
    });
}
exports.getTestOrderByDiscipline = getTestOrderByDiscipline;
function getTestOrderByTeacher() {
    return __awaiter(this, void 0, void 0, function () {
        var tests;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1["default"].teachers.findMany({
                        select: {
                            name: true,
                            teachersDisciplines: {
                                select: {
                                    test: {
                                        select: {
                                            category: {
                                                select: {
                                                    name: true
                                                }
                                            },
                                            name: true,
                                            pdfUrl: true
                                        }
                                    }
                                }
                            }
                        }
                    })];
                case 1:
                    tests = _a.sent();
                    return [2 /*return*/, tests];
            }
        });
    });
}
exports.getTestOrderByTeacher = getTestOrderByTeacher;
function insertTest(testData) {
    return __awaiter(this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, database_1["default"].test.create({ data: __assign({}, testData) })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/, true];
            }
        });
    });
}
exports.insertTest = insertTest;
