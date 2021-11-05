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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const bcryptjs_1 = require("bcryptjs");
const user_entity_1 = require("../entities/user.entity");
const jsonwebtoken_1 = require("jsonwebtoken");
const transaction_1 = require("../functions/transaction");
let UserService = class UserService {
    constructor(connection) {
        this.connection = connection;
    }
    async signUp(user) {
        const rounds = 10;
        const password = user.password;
        const hashedPassword = await (0, bcryptjs_1.hash)(password, rounds);
        const salt = await (0, bcryptjs_1.genSalt)();
        const user_ = Object.assign(new user_entity_1.User(), {
            userId: user.userId,
            hashedPassword,
            salt,
        });
        const QR = this.connection.createQueryRunner();
        if (!(await (0, transaction_1.transaction)(QR, [() => QR.manager.save(user_)])))
            throw new common_1.HttpException('이미 가입된 아이디입니다', 409);
        return '가입완료';
    }
    async signIn(user, res) {
        const { userId, password } = user;
        const QR = this.connection.createQueryRunner();
        const signInUser = (await (0, transaction_1.transaction)(QR, [
            () => QR.manager.findOne(user_entity_1.User, { where: { userId } }),
        ]))[0];
        if (!signInUser)
            throw new common_1.HttpException('유저를 찾을 수 없습니다', common_1.HttpStatus.CONFLICT);
        else if (!(await (0, bcryptjs_1.compare)(password, signInUser.hashedPassword)))
            throw new common_1.HttpException('아이디 혹은 비밀번호가 일치하지 않습니다', common_1.HttpStatus.BAD_REQUEST);
        else
            res
                .status(201)
                .cookie('accessToken', (0, jsonwebtoken_1.sign)({ id: signInUser.id }, 'test', { expiresIn: 9999999 }))
                .send('로그인 성공!');
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.Connection])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map