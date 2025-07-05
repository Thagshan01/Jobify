import { MessageStatus } from "./messageStatus";
export interface EndpointMessageOut {
    channels?: string[] | null;
    eventId?: string | null;
    eventType: string;
    id: string;
    nextAttempt?: Date | null;
    payload: any;
    status: MessageStatus;
    tags?: string[] | null;
    timestamp: Date;
}
export declare const EndpointMessageOutSerializer: {
    _fromJsonObject(object: any): EndpointMessageOut;
    _toJsonObject(self: EndpointMessageOut): any;
};
