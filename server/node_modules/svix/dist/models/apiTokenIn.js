"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiTokenInSerializer = void 0;
exports.ApiTokenInSerializer = {
    _fromJsonObject(object) {
        return {
            name: object["name"],
            scopes: object["scopes"],
        };
    },
    _toJsonObject(self) {
        return {
            name: self.name,
            scopes: self.scopes,
        };
    },
};
//# sourceMappingURL=apiTokenIn.js.map