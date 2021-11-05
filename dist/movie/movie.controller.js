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
exports.MovieController = void 0;
const common_1 = require("@nestjs/common");
const movie_interceptor_1 = require("../interceptors/movie.interceptor");
const movie_guard_1 = require("../guards/movie.guard");
const movie_service_1 = require("./movie.service");
const movie_dto_1 = require("./dto/movie.dto");
const cache_interceptor_1 = require("../interceptors/cache.interceptor");
const update_movie_dto_1 = require("./dto/update.movie.dto");
const swagger_1 = require("@nestjs/swagger");
const decorators_1 = require("../decorators/decorators");
let MovieController = class MovieController {
    constructor(movieService) {
        this.movieService = movieService;
    }
    addMovie(body, user_) {
        const user = isNaN(user_) ? { socialUser: user_ } : { localUser: user_ };
        return this.movieService.addMovie(body, user);
    }
    getOne(movieId) {
        return this.movieService.getOne(movieId);
    }
    patchMovie(movieId, movie) {
        return this.movieService.patchMovie(movieId, movie);
    }
    deleteMoive(movieId) {
        return this.movieService.deleteMovie(movieId);
    }
    like(movieId) {
        return this.movieService.like(movieId);
    }
    async myMovie(user) {
        return await this.movieService.myMovie(user);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ description: 'create movie instance' }),
    (0, swagger_1.ApiCreatedResponse)(),
    (0, swagger_1.ApiBadRequestResponse)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, decorators_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [movie_dto_1.CreateMovieDto, Object]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "addMovie", null);
__decorate([
    (0, common_1.Get)(':movieId'),
    (0, swagger_1.ApiOperation)({ description: 'get one movie information' }),
    (0, swagger_1.ApiOkResponse)(),
    (0, swagger_1.ApiConflictResponse)(),
    (0, swagger_1.ApiParam)({ description: 'movie id', required: true, name: 'movieId' }),
    (0, common_1.UseInterceptors)(cache_interceptor_1.MovieCacheInterceptor),
    __param(0, (0, common_1.Param)('movieId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "getOne", null);
__decorate([
    (0, common_1.Patch)(':movieId'),
    (0, swagger_1.ApiOperation)({ description: 'update movie information' }),
    (0, swagger_1.ApiNoContentResponse)(),
    (0, swagger_1.ApiParam)({ description: 'movie id', required: true, name: 'movieId' }),
    __param(0, (0, common_1.Param)('movieId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_movie_dto_1.UpdateMovieDto]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "patchMovie", null);
__decorate([
    (0, common_1.Delete)(':movieId'),
    (0, swagger_1.ApiOperation)({ description: 'delete movie' }),
    (0, swagger_1.ApiNoContentResponse)(),
    (0, swagger_1.ApiParam)({ description: 'movie id', required: true, name: 'movieId' }),
    __param(0, (0, common_1.Param)('movieId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "deleteMoive", null);
__decorate([
    (0, common_1.Get)('like/:movieId'),
    (0, common_1.HttpCode)(204),
    (0, swagger_1.ApiOperation)({ description: 'incrementally up like count' }),
    (0, swagger_1.ApiNoContentResponse)(),
    (0, swagger_1.ApiParam)({ description: 'movie id', required: true, name: 'movieId' }),
    __param(0, (0, common_1.Param)('movieId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "like", null);
__decorate([
    (0, common_1.Get)('my/movies'),
    (0, swagger_1.ApiOperation)({ description: 'get movies that the user uploaded' }),
    (0, swagger_1.ApiOkResponse)(),
    __param(0, (0, decorators_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "myMovie", null);
MovieController = __decorate([
    (0, swagger_1.ApiTags)('movie'),
    (0, swagger_1.ApiForbiddenResponse)(),
    (0, common_1.Controller)('movie'),
    (0, common_1.UseGuards)(movie_guard_1.MovieGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({
        transform: true,
        forbidNonWhitelisted: true,
        whitelist: true,
    })),
    (0, common_1.UseInterceptors)(movie_interceptor_1.MovieInterceptor),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], MovieController);
exports.MovieController = MovieController;
//# sourceMappingURL=movie.controller.js.map