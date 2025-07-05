import { MessageStatus } from "./messageStatus";
export interface MessageEndpointOut {
    channels?: string[] | null;
    createdAt: Date;
    description: string;
    disabled?: boolean;
    filterTypes?: string[] | null;
    id: string;
    nextAttempt?: Date | null;
    rateLimit?: number | null;
    status: MessageStatus;
    uid?: string | null;
    updatedAt: Date;
    url: string;
    version: number;
}
export declare const MessageEndpointOutSerializer: {
    _fromJsonObject(object: any): MessageEndpointOut;
    _toJsonObject(self: MessageEndpointOut): any;
};
