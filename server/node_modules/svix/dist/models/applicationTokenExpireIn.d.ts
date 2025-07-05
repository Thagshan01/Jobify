export interface ApplicationTokenExpireIn {
    expiry?: number | null;
}
export declare const ApplicationTokenExpireInSerializer: {
    _fromJsonObject(object: any): ApplicationTokenExpireIn;
    _toJsonObject(self: ApplicationTokenExpireIn): any;
};
