import { ApiTokenExpireIn } from "../models/apiTokenExpireIn";
import { ApiTokenIn } from "../models/apiTokenIn";
import { ApiTokenOut } from "../models/apiTokenOut";
import { ListResponseApiTokenCensoredOut } from "../models/listResponseApiTokenCensoredOut";
import { Ordering } from "../models/ordering";
import { SvixRequestContext } from "../request";
export interface ManagementAuthenticationListApiTokensOptions {
    limit?: number;
    iterator?: string | null;
    order?: Ordering;
}
export interface ManagementAuthenticationCreateApiTokenOptions {
    idempotencyKey?: string;
}
export interface ManagementAuthenticationExpireApiTokenOptions {
    idempotencyKey?: string;
}
export declare class ManagementAuthentication {
    private readonly requestCtx;
    constructor(requestCtx: SvixRequestContext);
    listApiTokens(options?: ManagementAuthenticationListApiTokensOptions): Promise<ListResponseApiTokenCensoredOut>;
    createApiToken(apiTokenIn: ApiTokenIn, options?: ManagementAuthenticationCreateApiTokenOptions): Promise<ApiTokenOut>;
    expireApiToken(keyId: string, apiTokenExpireIn: ApiTokenExpireIn, options?: ManagementAuthenticationExpireApiTokenOptions): Promise<void>;
}
