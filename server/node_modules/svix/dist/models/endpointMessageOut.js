"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndpointMessageOutSerializer = void 0;
const messageStatus_1 = require("./messageStatus");
exports.EndpointMessageOutSerializer = {
    _fromJsonObject(object) {
        return {
            channels: object["channels"],
            eventId: object["eventId"],
            eventType: object["eventType"],
            id: object["id"],
            nextAttempt: object["nextAttempt"] ? new Date(object["nextAttempt"]) : null,
            payload: object["payload"],
            status: messageStatus_1.MessageStatusSerializer._fromJsonObject(object["status"]),
            tags: object["tags"],
            timestamp: new Date(object["timestamp"]),
        };
    },
    _toJsonObject(self) {
        return {
            channels: self.channels,
            eventId: self.eventId,
            eventType: self.eventType,
            id: self.id,
            nextAttempt: self.nextAttempt,
            payload: self.payload,
            status: messageStatus_1.MessageStatusSerializer._toJsonObject(self.status),
            tags: self.tags,
            timestamp: self.timestamp,
        };
    },
};
//# sourceMappingURL=endpointMessageOut.js.map