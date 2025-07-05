"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppPortalAccessInSerializer = void 0;
const applicationIn_1 = require("./applicationIn");
exports.AppPortalAccessInSerializer = {
    _fromJsonObject(object) {
        return {
            application: object["application"]
                ? applicationIn_1.ApplicationInSerializer._fromJsonObject(object["application"])
                : undefined,
            expiry: object["expiry"],
            featureFlags: object["featureFlags"],
            readOnly: object["readOnly"],
        };
    },
    _toJsonObject(self) {
        return {
            application: self.application
                ? applicationIn_1.ApplicationInSerializer._toJsonObject(self.application)
                : undefined,
            expiry: self.expiry,
            featureFlags: self.featureFlags,
            readOnly: self.readOnly,
        };
    },
};
//# sourceMappingURL=appPortalAccessIn.js.map