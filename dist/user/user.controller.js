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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_interceptor_1 = require("../interceptors/user.interceptor");
const signIn_dto_1 = require("./dto/signIn.dto");
const user_dto_1 = require("./dto/user.dto");
const user_service_1 = require("./user.service");
const user_validation_pipe_1 = require("../pipes/user.validation.pipe");
const swagger_1 = require("@nestjs/swagger");
const redirect_interceptor_1 = require("../interceptors/redirect.interceptor");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async signUp(user) {
        return await this.userService.signUp(user);
    }
    async signIn(user, res) {
        return await this.userService.signIn(user, res);
    }
    async signOut(res) {
        res.status(204).clearCookie('accessToken');
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)(new redirect_interceptor_1.RedirectInterceptor('/')),
    (0, swagger_1.ApiOperation)({ description: 'Sign-Up!' }),
    (0, swagger_1.ApiCreatedResponse)(),
    (0, swagger_1.ApiBadRequestResponse)(),
    (0, swagger_1.ApiBody)({
        type: user_dto_1.CreateUserDto,
        description: 'Sign Up!',
    }),
    (0, common_1.UsePipes)(new user_validation_pipe_1.JoiValidationPipe(user_dto_1.registerSchema)),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('signIn'),
    (0, common_1.UseInterceptors)(new redirect_interceptor_1.RedirectInterceptor('/')),
    (0, swagger_1.ApiOperation)({ description: 'Sign-In!' }),
    (0, swagger_1.ApiCreatedResponse)(),
    (0, swagger_1.ApiBadRequestResponse)(),
    (0, swagger_1.ApiConflictResponse)(),
    (0, swagger_1.ApiBody)({
        type: signIn_dto_1.SignInDto,
        description: 'Sign In!',
    }),
    (0, common_1.UsePipes)(new user_validation_pipe_1.JoiValidationPipe(signIn_dto_1.signInSchema)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signIn_dto_1.SignInDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signIn", null);
__decorate([
    (0, common_1.Get)('signOut'),
    (0, swagger_1.ApiOperation)({ description: 'Sign-Out!' }),
    (0, swagger_1.ApiNoContentResponse)(),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signOut", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)('user'),
    (0, common_1.Controller)('user'),
    (0, common_1.UseInterceptors)(user_interceptor_1.UserInterceptor),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map