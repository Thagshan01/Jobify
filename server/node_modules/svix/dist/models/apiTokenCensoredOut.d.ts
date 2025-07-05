export interface ApiTokenCensoredOut {
    censoredToken: string;
    createdAt: Date;
    expiresAt?: Date | null;
    id: string;
    name?: string | null;
    scopes?: string[] | null;
}
export declare const ApiTokenCensoredOutSerializer: {
    _fromJsonObject(object: any): ApiTokenCensoredOut;
    _toJsonObject(self: ApiTokenCensoredOut): any;
};
