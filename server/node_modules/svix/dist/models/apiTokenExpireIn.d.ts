export interface ApiTokenExpireIn {
    expiry?: number;
}
export declare const ApiTokenExpireInSerializer: {
    _fromJsonObject(object: any): ApiTokenExpireIn;
    _toJsonObject(self: ApiTokenExpireIn): any;
};
