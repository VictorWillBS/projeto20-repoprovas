"use strict";
exports.__esModule = true;
function discoverStatusCode(errorcode) {
    var codes = [
        { code: 'Bad Request', statusCode: 400 },
        { code: 'Unauthorized', statusCode: 401 },
        { code: 'Not Found', statusCode: 404 },
        { code: 'Forbidden', statusCode: 403 },
        { code: 'Conflict', statusCode: 409 },
        { code: 'Unprocessable Entity', statusCode: 422 },
        { code: 'Internal Server Erro', statusCode: 500 }
    ];
    var codeDiscoverd = codes.filter(function (element) { return element.code === errorcode; });
    return codeDiscoverd[0].statusCode;
}
exports["default"] = discoverStatusCode;
