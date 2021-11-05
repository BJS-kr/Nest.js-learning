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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const app_service_1 = require("./app.service");
const swagger_1 = require("@nestjs/swagger");
const social_entity_1 = require("./entities/social.entity");
const redirect_interceptor_1 = require("./interceptors/redirect.interceptor");
const decorators_1 = require("./decorators/decorators");
const decorators_2 = require("./decorators/decorators");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    async googleOauth20() { }
    async googleOauthRedirect(user) {
        return await this.appService.googleLogin(user);
    }
    async facebookAuth() { }
    async facebookAuthRedirect(user) {
        return await this.appService.facebookLogin(user);
    }
    async makeVideoAndUpload() {
        return await this.appService.makeVideoAndUpload();
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ description: 'root' }),
    (0, swagger_1.ApiOkResponse)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('social/google'),
    (0, swagger_1.ApiOperation)({ description: 'google log in' }),
    (0, swagger_1.ApiBadRequestResponse)(),
    (0, swagger_1.ApiOkResponse)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('google')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "googleOauth20", null);
__decorate([
    (0, common_1.Get)('google/auth'),
    (0, common_1.UseInterceptors)(new redirect_interceptor_1.RedirectOrTokenInterceptor('/')),
    (0, swagger_1.ApiOperation)({ description: 'google log-in redirection address' }),
    (0, swagger_1.ApiResponse)({ status: 302, description: 'User already logged-in' }),
    (0, swagger_1.ApiCreatedResponse)({ type: social_entity_1.Social }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('google')),
    __param(0, (0, decorators_1.GoogleUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "googleOauthRedirect", null);
__decorate([
    (0, common_1.Get)('social/facebook'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('facebook')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "facebookAuth", null);
__decorate([
    (0, common_1.Get)('facebook/auth/callback'),
    (0, common_1.UseInterceptors)(new redirect_interceptor_1.RedirectOrTokenInterceptor('/')),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('facebook')),
    __param(0, (0, decorators_2.FacebookUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "facebookAuthRedirect", null);
__decorate([
    (0, common_1.Get)('video'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "makeVideoAndUpload", null);
AppController = __decorate([
    (0, swagger_1.ApiTags)('app'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map