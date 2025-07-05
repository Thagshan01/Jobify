"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Management = void 0;
const managementAuthentication_1 = require("./managementAuthentication");
class Management {
    constructor(requestCtx) {
        this.requestCtx = requestCtx;
    }
    get authentication() {
        return new managementAuthentication_1.ManagementAuthentication(this.requestCtx);
    }
}
exports.Management = Management;
//# sourceMappingURL=management.js.map