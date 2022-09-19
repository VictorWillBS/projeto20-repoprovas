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
exports.__esModule = true;
exports.getTestOrderByTeacher = exports.getTestOrderByDisciplines = exports.createTest = void 0;
var testRepository = __importStar(require("../repositories/testRepository"));
function createTest(testData, userId) {
    return __awaiter(this, void 0, void 0, function () {
        var teacherId, disciplineId, teacherDisciplinesId, categoryId, testInsertData, insertedTest;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, verifyTeacherExist(testData.teacher)];
                case 1:
                    teacherId = (_a.sent()).id;
                    return [4 /*yield*/, verifyDisciplineExist(testData.discipline)];
                case 2:
                    disciplineId = (_a.sent()).id;
                    return [4 /*yield*/, verifyTeacherDisciplineExist(disciplineId, teacherId)];
                case 3:
                    teacherDisciplinesId = (_a.sent()).id;
                    return [4 /*yield*/, verifyCategoriesExist(testData.category)];
                case 4:
                    categoryId = (_a.sent()).id;
                    return [4 /*yield*/, verifyTestExist(testData.name, testData.url, teacherDisciplinesId)];
                case 5:
                    _a.sent();
                    testInsertData = {
                        name: testData.name,
                        pdfUrl: testData.url,
                        categoryId: categoryId,
                        teacherDisciplinesId: teacherDisciplinesId
                    };
                    return [4 /*yield*/, testRepository.insertTest(testInsertData)];
                case 6:
                    insertedTest = _a.sent();
                    return [2 /*return*/, insertedTest];
            }
        });
    });
}
exports.createTest = createTest;
function getTestOrderByDisciplines() {
    return __awaiter(this, void 0, void 0, function () {
        var tests;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testRepository.getTestOrderByDiscipline()];
                case 1:
                    tests = _a.sent();
                    if (!tests.length) {
                        throw { code: 'Not Found', message: 'Test Not Founded.' };
                    }
                    return [2 /*return*/, tests];
            }
        });
    });
}
exports.getTestOrderByDisciplines = getTestOrderByDisciplines;
function getTestOrderByTeacher() {
    return __awaiter(this, void 0, void 0, function () {
        var tests;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testRepository.getTestOrderByTeacher()];
                case 1:
                    tests = _a.sent();
                    if (!tests.length) {
                        throw { code: 'Not Found', message: 'Test Not Founded.' };
                    }
                    return [2 /*return*/, tests];
            }
        });
    });
}
exports.getTestOrderByTeacher = getTestOrderByTeacher;
function verifyTeacherExist(teacherName) {
    return __awaiter(this, void 0, void 0, function () {
        var teacher;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testRepository.getTeacherByName(teacherName)];
                case 1:
                    teacher = _a.sent();
                    if (!teacher) {
                        throw { code: 'Bad Request', message: 'Teacher not Found.' };
                    }
                    return [2 /*return*/, teacher];
            }
        });
    });
}
function verifyDisciplineExist(disciplineName) {
    return __awaiter(this, void 0, void 0, function () {
        var discipline;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testRepository.getDisciplineByName(disciplineName)];
                case 1:
                    discipline = _a.sent();
                    if (!discipline) {
                        throw { code: 'Bad Request', message: 'Discipline not Found.' };
                    }
                    return [2 /*return*/, discipline];
            }
        });
    });
}
function verifyTeacherDisciplineExist(disciplineId, teacherId) {
    return __awaiter(this, void 0, void 0, function () {
        var discipline;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testRepository.getTeacherDisciplinesByIds(disciplineId, teacherId)];
                case 1:
                    discipline = _a.sent();
                    if (!discipline) {
                        throw { code: 'Bad Request', message: 'Discipline And Teacher No Matches' };
                    }
                    return [2 /*return*/, discipline];
            }
        });
    });
}
function verifyCategoriesExist(categoryName) {
    return __awaiter(this, void 0, void 0, function () {
        var category;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testRepository.getCategoryByName(categoryName)];
                case 1:
                    category = _a.sent();
                    if (!category) {
                        throw { code: 'Bad Request', message: 'Category Not Found.' };
                    }
                    return [2 /*return*/, category];
            }
        });
    });
}
function verifyTestExist(name, pdfUrl, teacherDisciplinesId) {
    return __awaiter(this, void 0, void 0, function () {
        var testByName, testByPdfUrl;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testRepository.getTestByName(name, teacherDisciplinesId)];
                case 1:
                    testByName = _a.sent();
                    return [4 /*yield*/, testRepository.getTestByPdfUrl(pdfUrl, teacherDisciplinesId)];
                case 2:
                    testByPdfUrl = _a.sent();
                    if (testByName) {
                        throw { code: 'Conflict', message: 'Test Name Already Exist.' };
                    }
                    if (testByPdfUrl) {
                        throw { code: 'Conflict', message: 'Test pdfUrl Already Exist.' };
                    }
                    return [2 /*return*/, testByName || testByPdfUrl];
            }
        });
    });
}
