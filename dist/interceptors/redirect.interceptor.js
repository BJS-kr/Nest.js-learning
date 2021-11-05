"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedirectOrTokenInterceptor = exports.RedirectInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const jsonwebtoken_1 = require("jsonwebtoken");
let RedirectInterceptor = class RedirectInterceptor {
    constructor(target) {
        this.target = target;
    }
    intercept(context, next) {
        const ctx = context.switchToHttp();
        const req = ctx.getRequest();
        const res = ctx.getResponse();
        if (req.cookies.accessToken) {
            console.log('token found... redirecting...');
            return (0, rxjs_1.of)(res.redirect(this.target));
        }
        return next.handle();
    }
};
RedirectInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [String])
], RedirectInterceptor);
exports.RedirectInterceptor = RedirectInterceptor;
let RedirectOrTokenInterceptor = class RedirectOrTokenInterceptor {
    constructor(target) {
        this.target = target;
    }
    intercept(context, next) {
        const ctx = context.switchToHttp();
        const req = ctx.getRequest();
        const res = ctx.getResponse();
        if (req.cookies.accessToken) {
            console.log('token found... redirecting...');
            return (0, rxjs_1.of)(res.redirect(this.target));
        }
        const { user } = req;
        const accessToken = (0, jsonwebtoken_1.sign)({ id: user.id }, 'test', {
            expiresIn: 9999999,
        });
        console.log(accessToken);
        return next
            .handle()
            .pipe((0, rxjs_1.tap)(res
            .status(201)
            .cookie('accessToken', accessToken)
            .send('로그인 성공!')));
    }
};
RedirectOrTokenInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [String])
], RedirectOrTokenInterceptor);
exports.RedirectOrTokenInterceptor = RedirectOrTokenInterceptor;
//# sourceMappingURL=redirect.interceptor.js.map