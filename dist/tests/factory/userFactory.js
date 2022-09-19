"use strict";
exports.__esModule = true;
exports.createUseNotAllowed = exports.createUserAllowed = void 0;
var faker_1 = require("@faker-js/faker");
function createUserAllowed() {
    var email = fakeEmail();
    var password = fakePassword(15);
    return {
        email: email,
        password: password
    };
}
exports.createUserAllowed = createUserAllowed;
function createUseNotAllowed() {
    var email = fakePassword(10);
    var password = fakePassword(5);
    return {
        email: email,
        password: password
    };
}
exports.createUseNotAllowed = createUseNotAllowed;
function fakeEmail() {
    var email = 'abc@abc.com';
    return email;
}
function fakePassword(wordLength) {
    var password = faker_1.faker.internet.password(wordLength);
    return password;
}
