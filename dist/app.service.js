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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const social_entity_1 = require("./entities/social.entity");
const transaction_1 = require("./functions/transaction");
const got_1 = require("got");
let AppService = class AppService {
    constructor(connection) {
        this.connection = connection;
    }
    getHello() {
        return 'J들의 연습용프로젝트!!!';
    }
    async googleLogin(googleUser) {
        if (!googleUser) {
            throw new common_1.HttpException('구글에 등록되지 않은 사용자입니다', 403);
        }
        const socialUser = Object.assign(new social_entity_1.Social(), googleUser, { from: 'g' });
        const QR = this.connection.createQueryRunner();
        const isExists = (await QR.query(`SELECT EXISTS (SELECT 1 FROM socials WHERE id = '${googleUser.id}');`))[0].exists;
        if (!isExists) {
            await (0, transaction_1.transaction)(QR, [() => QR.manager.save(socialUser)]);
        }
        return;
    }
    async facebookLogin(facebookuser) {
        if (!facebookuser) {
            throw new common_1.HttpException('페이스북에 등록되지 않은 사용자 입니다.', 403);
        }
        const socialUser = Object.assign(new social_entity_1.Social(), facebookuser);
        const QR = this.connection.createQueryRunner();
        const isExists = await QR.manager.findOne(social_entity_1.Social, socialUser.id);
        if (!isExists) {
            await (0, transaction_1.transaction)(QR, [() => QR.manager.save(socialUser)]);
        }
        return;
    }
    async makeVideoAndUpload() {
        try {
            if ((await (0, got_1.default)('http://host.docker.internal:3001/video')).statusCode === 200)
                return (await (0, got_1.default)('http://host.docker.internal:3001/upload')).body;
            else
                throw new Error('Error ocurred while processing videos!(Http Status Code is NOT 200)');
        }
        catch (e) {
            console.error('왜 에러가 나는거징?' + e);
        }
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.Connection])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map