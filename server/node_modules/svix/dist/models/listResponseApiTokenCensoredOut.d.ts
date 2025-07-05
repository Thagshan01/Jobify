import { ApiTokenCensoredOut } from "./apiTokenCensoredOut";
export interface ListResponseApiTokenCensoredOut {
    data: ApiTokenCensoredOut[];
    done: boolean;
    iterator: string | null;
    prevIterator?: string | null;
}
export declare const ListResponseApiTokenCensoredOutSerializer: {
    _fromJsonObject(object: any): ListResponseApiTokenCensoredOut;
    _toJsonObject(self: ListResponseApiTokenCensoredOut): any;
};
