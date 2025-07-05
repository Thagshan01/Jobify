import { ApplicationIn } from "./applicationIn";
export interface AppPortalAccessIn {
    application?: ApplicationIn | null;
    expiry?: number | null;
    featureFlags?: string[];
    readOnly?: boolean | null;
}
export declare const AppPortalAccessInSerializer: {
    _fromJsonObject(object: any): AppPortalAccessIn;
    _toJsonObject(self: AppPortalAccessIn): any;
};
