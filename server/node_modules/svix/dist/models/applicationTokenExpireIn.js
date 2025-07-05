"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationTokenExpireInSerializer = void 0;
exports.ApplicationTokenExpireInSerializer = {
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
//# sourceMappingURL=applicationTokenExpireIn.js.map