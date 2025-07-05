"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiTokenExpireInSerializer = void 0;
exports.ApiTokenExpireInSerializer = {
    _fromJsonObject(object) {
        return {
            expiry: object["expiry"],
        };
    },
    _toJsonObject(self) {
        return {
            expiry: self.expiry,
        };
    },
};
//# sourceMappingURL=apiTokenExpireIn.js.map