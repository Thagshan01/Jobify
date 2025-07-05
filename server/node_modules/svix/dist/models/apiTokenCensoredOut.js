"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiTokenCensoredOutSerializer = void 0;
exports.ApiTokenCensoredOutSerializer = {
    _fromJsonObject(object) {
        return {
            censoredToken: object["censoredToken"],
            createdAt: new Date(object["createdAt"]),
            expiresAt: object["expiresAt"] ? new Date(object["expiresAt"]) : null,
            id: object["id"],
            name: object["name"],
            scopes: object["scopes"],
        };
    },
    _toJsonObject(self) {
        return {
            censoredToken: self.censoredToken,
            createdAt: self.createdAt,
            expiresAt: self.expiresAt,
            id: self.id,
            name: self.name,
            scopes: self.scopes,
        };
    },
};
//# sourceMappingURL=apiTokenCensoredOut.js.map