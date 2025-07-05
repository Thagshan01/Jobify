"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventTypeUpdateSerializer = void 0;
exports.EventTypeUpdateSerializer = {
    _fromJsonObject(object) {
        return {
            archived: object["archived"],
            deprecated: object["deprecated"],
            description: object["description"],
            featureFlag: object["featureFlag"],
            groupName: object["groupName"],
            schemas: object["schemas"],
        };
    },
    _toJsonObject(self) {
        return {
            archived: self.archived,
            deprecated: self.deprecated,
            description: self.description,
            featureFlag: self.featureFlag,
            groupName: self.groupName,
            schemas: self.schemas,
        };
    },
};
//# sourceMappingURL=eventTypeUpdate.js.map