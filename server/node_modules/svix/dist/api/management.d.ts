import { SvixRequestContext } from "../request";
import { ManagementAuthentication } from "./managementAuthentication";
export declare class Management {
    private readonly requestCtx;
    constructor(requestCtx: SvixRequestContext);
    get authentication(): ManagementAuthentication;
}
