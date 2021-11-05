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
exports.MovieService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const movie_entity_1 = require("../entities/movie.entity");
const movie_repository_1 = require("./movie.repository");
const transaction_1 = require("../functions/transaction");
const update_movie_dto_1 = require("./dto/update.movie.dto");
let MovieService = class MovieService {
    constructor(movieRepository, redis, connection) {
        this.movieRepository = movieRepository;
        this.redis = redis;
        this.connection = connection;
    }
    async addMovie(movie, user) {
        const movie_ = Object.assign(new movie_entity_1.Movie(), movie, user);
        const QR = this.connection.createQueryRunner();
        return await (0, transaction_1.transaction)(QR, [
            () => QR.manager.save(movie_),
        ]);
    }
    async getOne(movieId) {
        const QR = this.connection.createQueryRunner();
        const movie = (await (0, transaction_1.transaction)(QR, [
            () => QR.manager.findOne(movie_entity_1.Movie, { where: { id: movieId } }),
        ]))[0];
        if (!movie)
            throw new common_1.HttpException('Cannot Find Movie!!!', common_1.HttpStatus.CONFLICT);
        await this.redis
            .multi()
            .sadd('movies', movieId)
            .hset(movieId, 'createdAt', movie.createdAt.toISOString(), 'updatedAt', movie.updatedAt.toISOString(), 'title', movie.title, 'desc', movie.desc, 'name', movie.name.join(', '), 'id', movie.id, 'like', movie.like)
            .exec();
        return movie;
    }
    async patchMovie(movieId, movie) {
        const { desc, name } = movie;
        const QR = this.connection.createQueryRunner();
        const updateMovie = Object.assign(new update_movie_dto_1.UpdateMovieDto(), movie);
        const result = await (0, transaction_1.transaction)(QR, [
            () => QR.manager.update(movie_entity_1.Movie, { id: movieId }, updateMovie),
            () => QR.manager.findOne(movie_entity_1.Movie, movieId),
        ]);
        console.log(result);
        if (await this.redis.sismember('movies', movieId)) {
            if (desc || name)
                await this.redis.hset(movieId, 'updatedAt', result[1].updatedAt.toISOString());
            if (desc)
                await this.redis.hset(movieId, 'desc', desc);
            if (name)
                await this.redis.hset(movieId, 'name', name.join(', '));
        }
        return result[1];
    }
    async deleteMovie(movieId) {
        const QR = this.connection.createQueryRunner();
        await (0, transaction_1.transaction)(QR, [() => QR.manager.softDelete(movie_entity_1.Movie, movieId)]);
        await this.redis.multi().srem('movies', movieId).unlink(movieId).exec();
    }
    async like(movieId) {
        const QR = this.connection.createQueryRunner();
        await (0, transaction_1.transaction)(QR, [
            () => QR.manager.increment(movie_entity_1.Movie, { id: movieId }, 'like', 1),
        ]);
        if (await this.redis.sismember('movies', movieId))
            await this.redis.hincrby(movieId, 'like', 1);
    }
    async myMovie(user) {
        const QR = this.connection.createQueryRunner();
        const movieQB = QR.manager.createQueryBuilder(movie_entity_1.Movie, 'movies');
        let selects;
        let joinColumn;
        let whereClause;
        if (!isNaN(user)) {
            selects = ['movies', 'user.id', 'user.userId', 'user.registeredAt'];
            joinColumn = 'movies.localUser';
            whereClause = ['movies.localUser = :localUser', { localUser: user }];
        }
        else {
            selects = ['movies', 'user'];
            joinColumn = 'movies.socialUser';
            whereClause = ['movies.socialUser = :socialUser', { socialUser: user }];
        }
        return await (0, transaction_1.transaction)(QR, [
            () => movieQB
                .select(selects)
                .innerJoin(joinColumn, 'user')
                .where(...whereClause)
                .getMany(),
        ]);
    }
};
MovieService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(movie_entity_1.Movie)),
    __param(1, (0, common_1.Inject)('REDIS')),
    __metadata("design:paramtypes", [movie_repository_1.MovieRepository, Object, typeorm_2.Connection])
], MovieService);
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map