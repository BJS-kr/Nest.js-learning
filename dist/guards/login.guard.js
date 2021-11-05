"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotLogInGuard = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
let NotLogInGuard = class NotLogInGuard {
    canActivate(context) {
        const ctx = context.switchToHttp();
        const req = ctx.getRequest();
        const res = ctx.getResponse();
        if (!req.cookies.accessToken)
            return true;
        try {
            (0, jsonwebtoken_1.verify)(req.cookies.accessToken, 'test');
            return false;
        }
        catch (e) {
            return true;
        }
    }
};
NotLogInGuard = __decorate([
    (0, common_1.Injectable)()
], NotLogInGuard);
exports.NotLogInGuard = NotLogInGuard;
//# sourceMappingURL=login.guard.js.map