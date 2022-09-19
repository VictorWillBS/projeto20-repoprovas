"use strict";
exports.__esModule = true;
function validSchema(Schema) {
    var value = function (req, res, next) {
        var toValid = req.body;
        var error = Schema.validate(toValid).error;
        if (error) {
            throw { code: 'Unprocessable Entity', message: error };
        }
        next();
    };
    return value;
}
exports["default"] = validSchema;
