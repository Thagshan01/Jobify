"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagementAuthentication = void 0;
const apiTokenExpireIn_1 = require("../models/apiTokenExpireIn");
const apiTokenIn_1 = require("../models/apiTokenIn");
const apiTokenOut_1 = require("../models/apiTokenOut");
const listResponseApiTokenCensoredOut_1 = require("../models/listResponseApiTokenCensoredOut");
const request_1 = require("../request");
class ManagementAuthentication {
    constructor(requestCtx) {
        this.requestCtx = requestCtx;
    }
    listApiTokens(options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.GET, "/api/v1/management/authentication/api-token");
        request.setQueryParam("limit", options === null || options === void 0 ? void 0 : options.limit);
        request.setQueryParam("iterator", options === null || options === void 0 ? void 0 : options.iterator);
        request.setQueryParam("order", options === null || options === void 0 ? void 0 : options.order);
        return request.send(this.requestCtx, listResponseApiTokenCensoredOut_1.ListResponseApiTokenCensoredOutSerializer._fromJsonObject);
    }
    createApiToken(apiTokenIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/management/authentication/api-token");
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(apiTokenIn_1.ApiTokenInSerializer._toJsonObject(apiTokenIn));
        return request.send(this.requestCtx, apiTokenOut_1.ApiTokenOutSerializer._fromJsonObject);
    }
    expireApiToken(keyId, apiTokenExpireIn, options) {
        const request = new request_1.SvixRequest(request_1.HttpMethod.POST, "/api/v1/management/authentication/api-token/{key_id}/expire");
        request.setPathParam("key_id", keyId);
        request.setHeaderParam("idempotency-key", options === null || options === void 0 ? void 0 : options.idempotencyKey);
        request.setBody(apiTokenExpireIn_1.ApiTokenExpireInSerializer._toJsonObject(apiTokenExpireIn));
        return request.sendNoResponseBody(this.requestCtx);
    }
}
exports.ManagementAuthentication = ManagementAuthentication;
//# sourceMappingURL=managementAuthentication.js.map