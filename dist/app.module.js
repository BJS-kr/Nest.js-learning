"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const movie_entity_1 = require("./entities/movie.entity");
const movie_module_1 = require("./movie/movie.module");
const user_module_1 = require("./user/user.module");
const redisStore = require("cache-manager-redis-store");
const user_entity_1 = require("./entities/user.entity");
const core_1 = require("@nestjs/core");
const all_exceptions_filter_1 = require("./filters/all-exceptions.filter");
const google_strategy_1 = require("./passport/google.strategy");
const facebook_strategy_1 = require("./passport/facebook.strategy");
const social_entity_1 = require("./entities/social.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'postgres',
                port: 5432,
                username: 'user',
                password: 'password',
                database: 'db',
                entities: [movie_entity_1.Movie, user_entity_1.User, social_entity_1.Social],
                retryAttempts: 3,
                retryDelay: 3000,
                autoLoadEntities: false,
                keepConnectionAlive: true,
                synchronize: true,
                extra: {
                    connectionLimit: 5,
                },
                logging: true,
            }),
            common_1.CacheModule.register({
                store: redisStore,
                host: 'redis',
                port: 6379,
                ttl: 99000,
                isGlobal: true,
            }),
            movie_module_1.MovieModule,
            user_module_1.UserModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            { provide: core_1.APP_FILTER, useClass: all_exceptions_filter_1.AllExceptionsFilter },
            google_strategy_1.GoogleStrategy,
            facebook_strategy_1.FacebookStrategy,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map