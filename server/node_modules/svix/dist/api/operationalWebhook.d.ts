import { SvixRequestContext } from "../request";
import { OperationalWebhookEndpoint } from "./operationalWebhookEndpoint";
export declare class OperationalWebhook {
    private readonly requestCtx;
    constructor(requestCtx: SvixRequestContext);
    get endpoint(): OperationalWebhookEndpoint;
}
