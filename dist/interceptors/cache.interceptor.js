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
exports.MovieCacheInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let MovieCacheInterceptor = class MovieCacheInterceptor {
    constructor(redis) {
        this.redis = redis;
    }
    async intercept(context, next) {
        const ctx = context.switchToHttp();
        const req = ctx.getRequest();
        const { movieId } = req.params;
        const isCached = await this.redis.sismember('movies', movieId);
        console.log('isCached? ', isCached);
        if (isCached) {
            console.log(typeof movieId);
            const result = await this.redis.hgetall(movieId);
            console.log(`캐쉬를 반환합니다. 캐쉬의 content:`, result);
            return (0, rxjs_1.of)(result);
        }
        else
            console.log('Cache를 찾지 못했습니다. DB에서 데이터를 찾습니다.');
        return next.handle();
    }
};
MovieCacheInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('REDIS')),
    __metadata("design:paramtypes", [Object])
], MovieCacheInterceptor);
exports.MovieCacheInterceptor = MovieCacheInterceptor;
//# sourceMappingURL=cache.interceptor.js.map