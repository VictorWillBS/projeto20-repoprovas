"use strict";
exports.__esModule = true;
exports.testNotAllowed = exports.testAllowed = void 0;
var faker_1 = require("@faker-js/faker");
function testAllowed() {
    var name = faker_1.faker.random.words();
    var url = faker_1.faker.internet.url();
    var category = 'teste';
    var discipline = 'React';
    var teacher = "Diego Pinho";
    return {
        name: name,
        url: url,
        category: "Projeto",
        discipline: "React",
        teacher: "Diego Pinho"
    };
}
exports.testAllowed = testAllowed;
function testNotAllowed() {
    var name = faker_1.faker.random.words();
    var url = faker_1.faker.internet.url();
    var category = faker_1.faker.random.words();
    var discipline = faker_1.faker.random.words();
    var teacher = faker_1.faker.random.words();
    return {
        name: name,
        url: url,
        category: category,
        discipline: discipline,
        teacher: teacher
    };
}
exports.testNotAllowed = testNotAllowed;
