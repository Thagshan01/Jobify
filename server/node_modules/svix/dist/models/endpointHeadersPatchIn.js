"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndpointHeadersPatchInSerializer = void 0;
exports.EndpointHeadersPatchInSerializer = {
    _fromJsonObject(object) {
        return {
            headers: object["headers"],
        };
    },
    _toJsonObject(self) {
        return {
            headers: self.headers,
        };
    },
};
//# sourceMappingURL=endpointHeadersPatchIn.js.map