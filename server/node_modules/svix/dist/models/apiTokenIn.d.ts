export interface ApiTokenIn {
    name: string;
    scopes?: string[] | null;
}
export declare const ApiTokenInSerializer: {
    _fromJsonObject(object: any): ApiTokenIn;
    _toJsonObject(self: ApiTokenIn): any;
};
