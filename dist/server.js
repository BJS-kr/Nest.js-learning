/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.controller.ts":
/*!*******************************!*\
  !*** ./src/app.controller.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AppController = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst passport_1 = __webpack_require__(/*! @nestjs/passport */ \"@nestjs/passport\");\nconst app_service_1 = __webpack_require__(/*! ./app.service */ \"./src/app.service.ts\");\nlet AppController = class AppController {\n    constructor(appService) {\n        this.appService = appService;\n    }\n    getHello() {\n        return this.appService.getHello();\n    }\n    async googleOauth20(req) { }\n    googleOauthRedirect(req, res) {\n        return this.appService.googleLogin(req, res);\n    }\n};\n__decorate([\n    (0, common_1.Get)(),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", []),\n    __metadata(\"design:returntype\", String)\n], AppController.prototype, \"getHello\", null);\n__decorate([\n    (0, common_1.Get)('social/google'),\n    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('google')),\n    __param(0, (0, common_1.Req)()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object]),\n    __metadata(\"design:returntype\", Promise)\n], AppController.prototype, \"googleOauth20\", null);\n__decorate([\n    (0, common_1.Get)('google/auth'),\n    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('google')),\n    __param(0, (0, common_1.Req)()),\n    __param(1, (0, common_1.Res)({ passthrough: true })),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object, Object]),\n    __metadata(\"design:returntype\", void 0)\n], AppController.prototype, \"googleOauthRedirect\", null);\nAppController = __decorate([\n    (0, common_1.Controller)(),\n    __metadata(\"design:paramtypes\", [app_service_1.AppService])\n], AppController);\nexports.AppController = AppController;\n\n\n//# sourceURL=webpack://board/./src/app.controller.ts?");

/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AppModule = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst app_controller_1 = __webpack_require__(/*! ./app.controller */ \"./src/app.controller.ts\");\nconst app_service_1 = __webpack_require__(/*! ./app.service */ \"./src/app.service.ts\");\nconst movie_entity_1 = __webpack_require__(/*! ./entities/movie.entity */ \"./src/entities/movie.entity.ts\");\nconst movie_module_1 = __webpack_require__(/*! ./movie/movie.module */ \"./src/movie/movie.module.ts\");\nconst user_module_1 = __webpack_require__(/*! ./user/user.module */ \"./src/user/user.module.ts\");\nconst redisStore = __webpack_require__(/*! cache-manager-redis-store */ \"cache-manager-redis-store\");\nconst user_entity_1 = __webpack_require__(/*! ./entities/user.entity */ \"./src/entities/user.entity.ts\");\nconst core_1 = __webpack_require__(/*! @nestjs/core */ \"@nestjs/core\");\nconst all_exceptions_filter_1 = __webpack_require__(/*! ./filters/all-exceptions.filter */ \"./src/filters/all-exceptions.filter.ts\");\nconst google_strategy_1 = __webpack_require__(/*! ./passport/google.strategy */ \"./src/passport/google.strategy.ts\");\nconst social_entity_1 = __webpack_require__(/*! ./entities/social.entity */ \"./src/entities/social.entity.ts\");\nlet AppModule = class AppModule {\n};\nAppModule = __decorate([\n    (0, common_1.Module)({\n        imports: [\n            typeorm_1.TypeOrmModule.forRoot({\n                type: 'postgres',\n                host: 'postgres',\n                port: 5432,\n                username: 'user',\n                password: 'password',\n                database: 'db',\n                entities: [movie_entity_1.Movie, user_entity_1.User, social_entity_1.Social],\n                retryAttempts: 3,\n                retryDelay: 3000,\n                autoLoadEntities: false,\n                keepConnectionAlive: true,\n                synchronize: true,\n                extra: {\n                    connectionLimit: 5,\n                },\n                logging: true,\n            }),\n            common_1.CacheModule.register({\n                store: redisStore,\n                host: 'redis',\n                port: 6379,\n                ttl: 99000,\n                isGlobal: true,\n            }),\n            movie_module_1.MovieModule,\n            user_module_1.UserModule,\n        ],\n        controllers: [app_controller_1.AppController],\n        providers: [\n            app_service_1.AppService,\n            { provide: core_1.APP_FILTER, useClass: all_exceptions_filter_1.AllExceptionsFilter },\n            google_strategy_1.GoogleStrategy,\n        ],\n    })\n], AppModule);\nexports.AppModule = AppModule;\n\n\n//# sourceURL=webpack://board/./src/app.module.ts?");

/***/ }),

/***/ "./src/app.service.ts":
/*!****************************!*\
  !*** ./src/app.service.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AppService = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst social_entity_1 = __webpack_require__(/*! ./entities/social.entity */ \"./src/entities/social.entity.ts\");\nconst transaction_1 = __webpack_require__(/*! ./functions/transaction */ \"./src/functions/transaction.ts\");\nconst jsonwebtoken_1 = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nlet AppService = class AppService {\n    constructor(connection) {\n        this.connection = connection;\n    }\n    getHello() {\n        return 'J들의 연습용프로젝트!!!';\n    }\n    async googleLogin(req, res) {\n        if (req.cookies.accessToken) {\n            console.log('이미 토큰을 가지고 있습니다.');\n            return res.redirect('/');\n        }\n        if (!req.user) {\n            throw new common_1.HttpException('구글에 등록되지 않은 사용자입니다', 403);\n        }\n        req.user.id = req.user.email;\n        delete req.user.email;\n        const socialUser = Object.assign(new social_entity_1.Social(), req.user, { from: 'g' });\n        const QR = this.connection.createQueryRunner();\n        const isExsits = (await QR.query(`SELECT EXISTS (SELECT 1 FROM socials WHERE id = '${req.user.email}');`))[0].exists;\n        if (!isExsits) {\n            await (0, transaction_1.transaction)(QR, [() => QR.manager.save(socialUser)]);\n        }\n        const accessToken = (0, jsonwebtoken_1.sign)({ id: req.user.id }, 'test', {\n            expiresIn: 9999999,\n        });\n        console.log(accessToken);\n        res.cookie('accessToken', accessToken).send('로그인 성공!');\n    }\n};\nAppService = __decorate([\n    (0, common_1.Injectable)(),\n    __metadata(\"design:paramtypes\", [typeorm_1.Connection])\n], AppService);\nexports.AppService = AppService;\n\n\n//# sourceURL=webpack://board/./src/app.service.ts?");

/***/ }),

/***/ "./src/entities/movie.entity.ts":
/*!**************************************!*\
  !*** ./src/entities/movie.entity.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Movie = void 0;\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst social_entity_1 = __webpack_require__(/*! ./social.entity */ \"./src/entities/social.entity.ts\");\nconst user_entity_1 = __webpack_require__(/*! ./user.entity */ \"./src/entities/user.entity.ts\");\nlet Movie = class Movie {\n};\n__decorate([\n    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),\n    __metadata(\"design:type\", Number)\n], Movie.prototype, \"id\", void 0);\n__decorate([\n    (0, typeorm_1.Column)('varchar', { length: 40, unique: true }),\n    __metadata(\"design:type\", String)\n], Movie.prototype, \"title\", void 0);\n__decorate([\n    (0, typeorm_1.Column)('varchar', { length: 100, nullable: true, default: null }),\n    __metadata(\"design:type\", String)\n], Movie.prototype, \"desc\", void 0);\n__decorate([\n    (0, typeorm_1.Column)('varchar', { length: 20, nullable: true, default: null, array: true }),\n    __metadata(\"design:type\", Array)\n], Movie.prototype, \"name\", void 0);\n__decorate([\n    (0, typeorm_1.Column)('int', { default: 0 }),\n    __metadata(\"design:type\", Number)\n], Movie.prototype, \"like\", void 0);\n__decorate([\n    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.movies),\n    (0, typeorm_1.JoinColumn)({ name: 'local_user_id', referencedColumnName: 'id' }),\n    __metadata(\"design:type\", user_entity_1.User)\n], Movie.prototype, \"localUser\", void 0);\n__decorate([\n    (0, typeorm_1.ManyToOne)(() => social_entity_1.Social, (social) => social.movies),\n    (0, typeorm_1.JoinColumn)({ name: 'social_user_id', referencedColumnName: 'id' }),\n    __metadata(\"design:type\", social_entity_1.Social)\n], Movie.prototype, \"socialUser\", void 0);\n__decorate([\n    (0, typeorm_1.CreateDateColumn)(),\n    __metadata(\"design:type\", Date)\n], Movie.prototype, \"createdAt\", void 0);\n__decorate([\n    (0, typeorm_1.UpdateDateColumn)(),\n    __metadata(\"design:type\", Date)\n], Movie.prototype, \"updatedAt\", void 0);\n__decorate([\n    (0, typeorm_1.DeleteDateColumn)(),\n    __metadata(\"design:type\", Date)\n], Movie.prototype, \"deletedAt\", void 0);\nMovie = __decorate([\n    (0, typeorm_1.Entity)({ database: 'db', name: 'movies' })\n], Movie);\nexports.Movie = Movie;\n\n\n//# sourceURL=webpack://board/./src/entities/movie.entity.ts?");

/***/ }),

/***/ "./src/entities/social.entity.ts":
/*!***************************************!*\
  !*** ./src/entities/social.entity.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Social = void 0;\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst movie_entity_1 = __webpack_require__(/*! ./movie.entity */ \"./src/entities/movie.entity.ts\");\nlet Social = class Social {\n};\n__decorate([\n    (0, typeorm_1.PrimaryColumn)(),\n    (0, class_validator_1.IsEmail)(),\n    __metadata(\"design:type\", String)\n], Social.prototype, \"id\", void 0);\n__decorate([\n    (0, typeorm_1.Column)('varchar', { length: 20, nullable: false }),\n    __metadata(\"design:type\", String)\n], Social.prototype, \"firstName\", void 0);\n__decorate([\n    (0, typeorm_1.Column)('varchar', { length: 20, nullable: false }),\n    __metadata(\"design:type\", String)\n], Social.prototype, \"lastName\", void 0);\n__decorate([\n    (0, typeorm_1.Column)('varchar', { length: 300, nullable: true }),\n    __metadata(\"design:type\", String)\n], Social.prototype, \"photo\", void 0);\n__decorate([\n    (0, typeorm_1.Column)('char', { length: 1, nullable: false }),\n    __metadata(\"design:type\", String)\n], Social.prototype, \"from\", void 0);\n__decorate([\n    (0, typeorm_1.OneToMany)(() => movie_entity_1.Movie, (movie) => movie.socialUser, {\n        cascade: ['update', 'remove'],\n        createForeignKeyConstraints: true,\n    }),\n    __metadata(\"design:type\", Array)\n], Social.prototype, \"movies\", void 0);\n__decorate([\n    (0, typeorm_1.CreateDateColumn)({ type: 'date' }),\n    __metadata(\"design:type\", Date)\n], Social.prototype, \"registeredAt\", void 0);\nSocial = __decorate([\n    (0, typeorm_1.Entity)({ database: 'db', name: 'socials' })\n], Social);\nexports.Social = Social;\n\n\n//# sourceURL=webpack://board/./src/entities/social.entity.ts?");

/***/ }),

/***/ "./src/entities/user.entity.ts":
/*!*************************************!*\
  !*** ./src/entities/user.entity.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.User = void 0;\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst movie_entity_1 = __webpack_require__(/*! ./movie.entity */ \"./src/entities/movie.entity.ts\");\nlet User = class User {\n};\n__decorate([\n    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),\n    __metadata(\"design:type\", Number)\n], User.prototype, \"id\", void 0);\n__decorate([\n    (0, typeorm_1.Column)('varchar', { length: 20, nullable: false }),\n    __metadata(\"design:type\", String)\n], User.prototype, \"userId\", void 0);\n__decorate([\n    (0, typeorm_1.Column)('varchar', { length: 100, nullable: false }),\n    __metadata(\"design:type\", String)\n], User.prototype, \"hashedPassword\", void 0);\n__decorate([\n    (0, typeorm_1.Column)('varchar', { length: 50, nullable: false }),\n    __metadata(\"design:type\", String)\n], User.prototype, \"salt\", void 0);\n__decorate([\n    (0, typeorm_1.OneToMany)(() => movie_entity_1.Movie, (movie) => movie.localUser, {\n        cascade: ['update', 'remove'],\n        createForeignKeyConstraints: true,\n    }),\n    __metadata(\"design:type\", Array)\n], User.prototype, \"movies\", void 0);\n__decorate([\n    (0, typeorm_1.CreateDateColumn)({ type: 'date' }),\n    __metadata(\"design:type\", Date)\n], User.prototype, \"registeredAt\", void 0);\nUser = __decorate([\n    (0, typeorm_1.Entity)({ database: 'db', name: 'users' }),\n    (0, typeorm_1.Unique)(['userId'])\n], User);\nexports.User = User;\n\n\n//# sourceURL=webpack://board/./src/entities/user.entity.ts?");

/***/ }),

/***/ "./src/filters/all-exceptions.filter.ts":
/*!**********************************************!*\
  !*** ./src/filters/all-exceptions.filter.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AllExceptionsFilter = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nlet AllExceptionsFilter = class AllExceptionsFilter {\n    catch(exception, host) {\n        const ctx = host.switchToHttp();\n        const res = ctx.getResponse();\n        const req = ctx.getRequest();\n        const status = exception instanceof common_1.HttpException\n            ? exception.getStatus()\n            : common_1.HttpStatus.INTERNAL_SERVER_ERROR;\n        const response = exception instanceof common_1.HttpException\n            ? exception.getResponse()\n            : 'Error ocurred';\n        console.log(exception);\n        res.status(status).json({\n            status,\n            timestamp: new Date().toISOString(),\n            requestedURL: req.url,\n            error: response,\n        });\n    }\n};\nAllExceptionsFilter = __decorate([\n    (0, common_1.Catch)()\n], AllExceptionsFilter);\nexports.AllExceptionsFilter = AllExceptionsFilter;\n\n\n//# sourceURL=webpack://board/./src/filters/all-exceptions.filter.ts?");

/***/ }),

/***/ "./src/functions/transaction.ts":
/*!**************************************!*\
  !*** ./src/functions/transaction.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.transaction = void 0;\nasync function transaction(QR, anonymousReturnsQueryRunnerMethod) {\n    const result = [];\n    await QR.connect();\n    await QR.startTransaction();\n    try {\n        for (let i = 0; i < anonymousReturnsQueryRunnerMethod.length; i++) {\n            result.push(await anonymousReturnsQueryRunnerMethod[i]());\n        }\n        await QR.commitTransaction();\n        return result;\n    }\n    catch (e) {\n        await QR.rollbackTransaction();\n    }\n    finally {\n        await QR.release();\n    }\n}\nexports.transaction = transaction;\n\n\n//# sourceURL=webpack://board/./src/functions/transaction.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst core_1 = __webpack_require__(/*! @nestjs/core */ \"@nestjs/core\");\nconst app_module_1 = __webpack_require__(/*! ./app.module */ \"./src/app.module.ts\");\nconst cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\nasync function bootstrap() {\n    const app = await core_1.NestFactory.create(app_module_1.AppModule);\n    app.use(cookieParser());\n    if (true) {\n        module.hot.accept();\n        module.hot.dispose(() => app.close());\n    }\n    await app.listen(3000);\n}\nbootstrap();\n\n\n//# sourceURL=webpack://board/./src/main.ts?");

/***/ }),

/***/ "./src/movie/dto/movie.dto.ts":
/*!************************************!*\
  !*** ./src/movie/dto/movie.dto.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CreateMovieDto = void 0;\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\nclass CreateMovieDto {\n    constructor() {\n        this.desc = '내용을 입력해주세요';\n    }\n}\n__decorate([\n    (0, class_validator_1.IsString)(),\n    __metadata(\"design:type\", String)\n], CreateMovieDto.prototype, \"title\", void 0);\n__decorate([\n    (0, class_validator_1.IsString)(),\n    (0, class_validator_1.MinLength)(10),\n    (0, class_validator_1.MaxLength)(50),\n    __metadata(\"design:type\", String)\n], CreateMovieDto.prototype, \"desc\", void 0);\n__decorate([\n    (0, class_validator_1.IsOptional)(),\n    (0, class_validator_1.IsString)({ each: true }),\n    __metadata(\"design:type\", Array)\n], CreateMovieDto.prototype, \"name\", void 0);\nexports.CreateMovieDto = CreateMovieDto;\n\n\n//# sourceURL=webpack://board/./src/movie/dto/movie.dto.ts?");

/***/ }),

/***/ "./src/movie/dto/update.movie.dto.ts":
/*!*******************************************!*\
  !*** ./src/movie/dto/update.movie.dto.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.UpdateMovieDto = void 0;\nconst mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ \"@nestjs/mapped-types\");\nconst movie_dto_1 = __webpack_require__(/*! ./movie.dto */ \"./src/movie/dto/movie.dto.ts\");\nclass UpdateMovieDto extends (0, mapped_types_1.PartialType)((0, mapped_types_1.PickType)(movie_dto_1.CreateMovieDto, ['desc', 'name'])) {\n}\nexports.UpdateMovieDto = UpdateMovieDto;\n\n\n//# sourceURL=webpack://board/./src/movie/dto/update.movie.dto.ts?");

/***/ }),

/***/ "./src/movie/movie.controller.ts":
/*!***************************************!*\
  !*** ./src/movie/movie.controller.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MovieController = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst movie_interceptor_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'src/interceptors/movie.interceptor'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nconst movie_guard_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'src/guards/movie.guard'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nconst movie_service_1 = __webpack_require__(/*! ./movie.service */ \"./src/movie/movie.service.ts\");\nconst movie_dto_1 = __webpack_require__(/*! ./dto/movie.dto */ \"./src/movie/dto/movie.dto.ts\");\nconst cache_interceptor_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'src/interceptors/cache.interceptor'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nconst update_movie_dto_1 = __webpack_require__(/*! ./dto/update.movie.dto */ \"./src/movie/dto/update.movie.dto.ts\");\nlet MovieController = class MovieController {\n    constructor(movieService) {\n        this.movieService = movieService;\n    }\n    addMovie(body, res) {\n        const user = isNaN(res.locals.user)\n            ? { socialUser: res.locals.user }\n            : { localUser: res.locals.user };\n        res.send({\n            result: this.movieService.addMovie(body, user),\n        });\n    }\n    getOne(movieId) {\n        return this.movieService.getOne(movieId);\n    }\n    patchMovie(movieId, movie) {\n        return this.movieService.patchMovie(movieId, movie);\n    }\n    deleteMoive(movieId) {\n        return this.movieService.deleteMovie(movieId);\n    }\n    like(movieId) {\n        return this.movieService.like(movieId);\n    }\n    async myMovie(res) {\n        return await this.movieService.myMovie(res.locals.user);\n    }\n};\n__decorate([\n    (0, common_1.Post)(),\n    __param(0, (0, common_1.Body)()),\n    __param(1, (0, common_1.Res)()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [movie_dto_1.CreateMovieDto, Object]),\n    __metadata(\"design:returntype\", void 0)\n], MovieController.prototype, \"addMovie\", null);\n__decorate([\n    (0, common_1.Get)(':movieId'),\n    (0, common_1.UseInterceptors)(cache_interceptor_1.MovieCacheInterceptor),\n    __param(0, (0, common_1.Param)('movieId')),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [String]),\n    __metadata(\"design:returntype\", void 0)\n], MovieController.prototype, \"getOne\", null);\n__decorate([\n    (0, common_1.Patch)(':movieId'),\n    __param(0, (0, common_1.Param)('movieId')),\n    __param(1, (0, common_1.Body)()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [String, update_movie_dto_1.UpdateMovieDto]),\n    __metadata(\"design:returntype\", void 0)\n], MovieController.prototype, \"patchMovie\", null);\n__decorate([\n    (0, common_1.Delete)(':movieId'),\n    __param(0, (0, common_1.Param)('movieId')),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [String]),\n    __metadata(\"design:returntype\", void 0)\n], MovieController.prototype, \"deleteMoive\", null);\n__decorate([\n    (0, common_1.Get)('like/:movieId'),\n    __param(0, (0, common_1.Param)('movieId')),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [String]),\n    __metadata(\"design:returntype\", void 0)\n], MovieController.prototype, \"like\", null);\n__decorate([\n    (0, common_1.Get)('my/movies'),\n    __param(0, (0, common_1.Res)({ passthrough: true })),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object]),\n    __metadata(\"design:returntype\", Promise)\n], MovieController.prototype, \"myMovie\", null);\nMovieController = __decorate([\n    (0, common_1.Controller)('movie'),\n    (0, common_1.UseGuards)(movie_guard_1.MovieGuard),\n    (0, common_1.UsePipes)(new common_1.ValidationPipe({\n        transform: true,\n        forbidNonWhitelisted: true,\n        whitelist: true,\n    })),\n    (0, common_1.UseInterceptors)(movie_interceptor_1.MovieInterceptor),\n    __metadata(\"design:paramtypes\", [movie_service_1.MovieService])\n], MovieController);\nexports.MovieController = MovieController;\n\n\n//# sourceURL=webpack://board/./src/movie/movie.controller.ts?");

/***/ }),

/***/ "./src/movie/movie.module.ts":
/*!***********************************!*\
  !*** ./src/movie/movie.module.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MovieModule = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst movie_entity_1 = __webpack_require__(/*! ../entities/movie.entity */ \"./src/entities/movie.entity.ts\");\nconst movie_controller_1 = __webpack_require__(/*! ./movie.controller */ \"./src/movie/movie.controller.ts\");\nconst movie_service_1 = __webpack_require__(/*! ./movie.service */ \"./src/movie/movie.service.ts\");\nconst ioredis_1 = __webpack_require__(/*! ioredis */ \"ioredis\");\nconst movie_subscriber_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'src/subscribers/movie.subscriber'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nlet MovieModule = class MovieModule {\n};\nMovieModule = __decorate([\n    (0, common_1.Module)({\n        imports: [typeorm_1.TypeOrmModule.forFeature([movie_entity_1.Movie])],\n        providers: [\n            movie_service_1.MovieService,\n            {\n                provide: 'REDIS',\n                useValue: new ioredis_1.default({\n                    host: 'redis',\n                    port: 6379,\n                    showFriendlyErrorStack: true,\n                }),\n            },\n            movie_subscriber_1.MovieSubscriber,\n        ],\n        controllers: [movie_controller_1.MovieController],\n    })\n], MovieModule);\nexports.MovieModule = MovieModule;\n\n\n//# sourceURL=webpack://board/./src/movie/movie.module.ts?");

/***/ }),

/***/ "./src/movie/movie.repository.ts":
/*!***************************************!*\
  !*** ./src/movie/movie.repository.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MovieRepository = void 0;\nconst movie_entity_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'src/entities/movie.entity'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nlet MovieRepository = class MovieRepository extends typeorm_1.Repository {\n};\nMovieRepository = __decorate([\n    (0, typeorm_1.EntityRepository)(movie_entity_1.Movie)\n], MovieRepository);\nexports.MovieRepository = MovieRepository;\n\n\n//# sourceURL=webpack://board/./src/movie/movie.repository.ts?");

/***/ }),

/***/ "./src/movie/movie.service.ts":
/*!************************************!*\
  !*** ./src/movie/movie.service.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MovieService = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst typeorm_2 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst movie_entity_1 = __webpack_require__(/*! ../entities/movie.entity */ \"./src/entities/movie.entity.ts\");\nconst movie_repository_1 = __webpack_require__(/*! ./movie.repository */ \"./src/movie/movie.repository.ts\");\nconst transaction_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'src/functions/transaction'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nconst update_movie_dto_1 = __webpack_require__(/*! ./dto/update.movie.dto */ \"./src/movie/dto/update.movie.dto.ts\");\nlet MovieService = class MovieService {\n    constructor(movieRepository, redis, connection) {\n        this.movieRepository = movieRepository;\n        this.redis = redis;\n        this.connection = connection;\n    }\n    async addMovie(movie, user) {\n        const movie_ = Object.assign(new movie_entity_1.Movie(), movie, user);\n        const QR = this.connection.createQueryRunner();\n        return await (0, transaction_1.transaction)(QR, [\n            () => QR.manager.save(movie_),\n        ]);\n    }\n    async getOne(movieId) {\n        const QR = this.connection.createQueryRunner();\n        const movie = (await (0, transaction_1.transaction)(QR, [\n            () => QR.manager.findOne(movie_entity_1.Movie, { where: { id: movieId } }),\n        ]))[0];\n        if (!movie)\n            throw new common_1.HttpException('Cannot Find Movie!!!', common_1.HttpStatus.CONFLICT);\n        await this.redis\n            .multi()\n            .sadd('movies', movieId)\n            .hset(movieId, 'createdAt', movie.createdAt.toISOString(), 'updatedAt', movie.updatedAt.toISOString(), 'title', movie.title, 'desc', movie.desc, 'name', movie.name.join(', '), 'id', movie.id, 'like', movie.like)\n            .exec();\n        return movie;\n    }\n    async patchMovie(movieId, movie) {\n        const { desc, name } = movie;\n        const QR = this.connection.createQueryRunner();\n        const updateMovie = Object.assign(new update_movie_dto_1.UpdateMovieDto(), movie);\n        const result = await (0, transaction_1.transaction)(QR, [\n            () => QR.manager.update(movie_entity_1.Movie, { id: movieId }, updateMovie),\n            () => QR.manager.findOne(movie_entity_1.Movie, movieId),\n        ]);\n        if (await this.redis.sismember('movies', movieId)) {\n            if (desc || name)\n                await this.redis.hset(movieId, 'updatedAt', result[1].updatedAt.toISOString());\n            if (desc)\n                await this.redis.hset(movieId, 'desc', desc);\n            if (name)\n                await this.redis.hset(movieId, 'name', name.join(', '));\n        }\n        return result[1];\n    }\n    async deleteMovie(movieId) {\n        const QR = this.connection.createQueryRunner();\n        await (0, transaction_1.transaction)(QR, [() => QR.manager.softDelete(movie_entity_1.Movie, movieId)]);\n        await this.redis.multi().srem('movies', movieId).unlink(movieId).exec();\n    }\n    async like(movieId) {\n        const QR = this.connection.createQueryRunner();\n        await (0, transaction_1.transaction)(QR, [\n            () => QR.manager.increment(movie_entity_1.Movie, { id: movieId }, 'like', 1),\n        ]);\n        if (await this.redis.sismember('movies', movieId))\n            await this.redis.hincrby(movieId, 'like', 1);\n    }\n    async myMovie(user) {\n        const QR = this.connection.createQueryRunner();\n        const movieQB = QR.manager.createQueryBuilder(movie_entity_1.Movie, 'movies');\n        let selects;\n        let joinColumn;\n        let whereClause;\n        if (!isNaN(user)) {\n            selects = ['movies', 'user.id', 'user.userId', 'user.registeredAt'];\n            joinColumn = 'movies.localUser';\n            whereClause = ['movies.localUser = :localUser', { localUser: user }];\n        }\n        else {\n            selects = ['movies', 'user'];\n            joinColumn = 'movies.socialUser';\n            whereClause = ['movies.socialUser = :socialUser', { socialUser: user }];\n        }\n        return await (0, transaction_1.transaction)(QR, [\n            () => movieQB\n                .select(selects)\n                .innerJoin(joinColumn, 'user')\n                .where(...whereClause)\n                .getMany(),\n        ]);\n    }\n};\nMovieService = __decorate([\n    (0, common_1.Injectable)(),\n    __param(0, (0, typeorm_1.InjectRepository)(movie_entity_1.Movie)),\n    __param(1, (0, common_1.Inject)('REDIS')),\n    __metadata(\"design:paramtypes\", [movie_repository_1.MovieRepository, Object, typeorm_2.Connection])\n], MovieService);\nexports.MovieService = MovieService;\n\n\n//# sourceURL=webpack://board/./src/movie/movie.service.ts?");

/***/ }),

/***/ "./src/passport/google.strategy.ts":
/*!*****************************************!*\
  !*** ./src/passport/google.strategy.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.GoogleStrategy = void 0;\nconst passport_1 = __webpack_require__(/*! @nestjs/passport */ \"@nestjs/passport\");\nconst passport_google_oauth20_1 = __webpack_require__(/*! passport-google-oauth20 */ \"passport-google-oauth20\");\nconst dotenv_1 = __webpack_require__(/*! dotenv */ \"dotenv\");\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\n(0, dotenv_1.config)();\nlet GoogleStrategy = class GoogleStrategy extends (0, passport_1.PassportStrategy)(passport_google_oauth20_1.Strategy, 'google') {\n    constructor() {\n        super({\n            clientID: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n            callbackURL: 'http://localhost:3000/google/auth',\n            scope: ['email', 'profile'],\n        });\n    }\n    async validate(accessToken, refreshToken, profile, done) {\n        const { name, emails, photos, provider } = profile;\n        const user = {\n            email: emails[0].value,\n            firstName: name.givenName,\n            lastName: name.familyName,\n            photo: photos[0].value,\n            provider,\n        };\n        console.log(user);\n        return user;\n    }\n};\nGoogleStrategy = __decorate([\n    (0, common_1.Injectable)(),\n    __metadata(\"design:paramtypes\", [])\n], GoogleStrategy);\nexports.GoogleStrategy = GoogleStrategy;\n\n\n//# sourceURL=webpack://board/./src/passport/google.strategy.ts?");

/***/ }),

/***/ "./src/subscribers/user.subscriber.ts":
/*!********************************************!*\
  !*** ./src/subscribers/user.subscriber.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.UserSubscriber = void 0;\nconst user_entity_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'src/entities/user.entity'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nlet UserSubscriber = class UserSubscriber {\n    constructor(connection) {\n        connection.subscribers.push(this);\n    }\n    listenTo() {\n        return user_entity_1.User;\n    }\n    beforeInsert(event) {\n        console.log('Before User Insert!!' + event.entity);\n    }\n};\nUserSubscriber = __decorate([\n    (0, typeorm_1.EventSubscriber)(),\n    __metadata(\"design:paramtypes\", [typeorm_1.Connection])\n], UserSubscriber);\nexports.UserSubscriber = UserSubscriber;\n\n\n//# sourceURL=webpack://board/./src/subscribers/user.subscriber.ts?");

/***/ }),

/***/ "./src/user/dto/signIn.dto.ts":
/*!************************************!*\
  !*** ./src/user/dto/signIn.dto.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.signInSchema = exports.SignInDto = void 0;\nconst mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ \"@nestjs/mapped-types\");\nconst user_dto_1 = __webpack_require__(/*! ./user.dto */ \"./src/user/dto/user.dto.ts\");\nconst Joi = __webpack_require__(/*! joi */ \"joi\");\nclass SignInDto extends (0, mapped_types_1.OmitType)(user_dto_1.CreateUserDto, [\n    'rePassword',\n]) {\n}\nexports.SignInDto = SignInDto;\nexports.signInSchema = Joi.object({\n    userId: Joi.string().required(),\n    password: Joi.string().required(),\n});\n\n\n//# sourceURL=webpack://board/./src/user/dto/signIn.dto.ts?");

/***/ }),

/***/ "./src/user/dto/user.dto.ts":
/*!**********************************!*\
  !*** ./src/user/dto/user.dto.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.registerSchema = exports.CreateUserDto = void 0;\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\nconst Joi = __webpack_require__(/*! joi */ \"joi\");\nclass CreateUserDto {\n}\n__decorate([\n    (0, class_validator_1.IsNotEmpty)(),\n    (0, class_validator_1.IsString)(),\n    __metadata(\"design:type\", String)\n], CreateUserDto.prototype, \"userId\", void 0);\n__decorate([\n    (0, class_validator_1.IsNotEmpty)(),\n    (0, class_validator_1.IsString)(),\n    __metadata(\"design:type\", String)\n], CreateUserDto.prototype, \"password\", void 0);\n__decorate([\n    (0, class_validator_1.IsNotEmpty)(),\n    (0, class_validator_1.IsString)(),\n    __metadata(\"design:type\", String)\n], CreateUserDto.prototype, \"rePassword\", void 0);\nexports.CreateUserDto = CreateUserDto;\nexports.registerSchema = Joi.object({\n    userId: Joi.string().required().min(6, 'utf8').max(14, 'utf8'),\n    password: Joi.string().required().min(10, 'utf8').max(30, 'utf8'),\n    rePassword: Joi.ref('password'),\n});\n\n\n//# sourceURL=webpack://board/./src/user/dto/user.dto.ts?");

/***/ }),

/***/ "./src/user/user.controller.ts":
/*!*************************************!*\
  !*** ./src/user/user.controller.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.UserController = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst user_interceptor_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'src/interceptors/user.interceptor'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nconst signIn_dto_1 = __webpack_require__(/*! ./dto/signIn.dto */ \"./src/user/dto/signIn.dto.ts\");\nconst user_dto_1 = __webpack_require__(/*! ./dto/user.dto */ \"./src/user/dto/user.dto.ts\");\nconst user_service_1 = __webpack_require__(/*! ./user.service */ \"./src/user/user.service.ts\");\nconst user_validation_pipe_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'src/pipes/user.validation.pipe'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nlet UserController = class UserController {\n    constructor(userService) {\n        this.userService = userService;\n    }\n    async signUp(user, req, res) {\n        return await this.userService.signUp(user, req, res);\n    }\n    async signIn(user, req, res) {\n        return await this.userService.signIn(user, req, res);\n    }\n    async signOut(res) {\n        res.clearCookie('accessToken');\n    }\n};\n__decorate([\n    (0, common_1.Post)(),\n    (0, common_1.UsePipes)(new user_validation_pipe_1.JoiValidationPipe(user_dto_1.registerSchema)),\n    __param(0, (0, common_1.Body)()),\n    __param(1, (0, common_1.Req)()),\n    __param(2, (0, common_1.Res)({ passthrough: true })),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [user_dto_1.CreateUserDto, Object, Object]),\n    __metadata(\"design:returntype\", Promise)\n], UserController.prototype, \"signUp\", null);\n__decorate([\n    (0, common_1.Post)('signIn'),\n    (0, common_1.UsePipes)(new user_validation_pipe_1.JoiValidationPipe(signIn_dto_1.signInSchema)),\n    __param(0, (0, common_1.Body)()),\n    __param(1, (0, common_1.Req)()),\n    __param(2, (0, common_1.Res)({ passthrough: true })),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [signIn_dto_1.SignInDto, Object, Object]),\n    __metadata(\"design:returntype\", Promise)\n], UserController.prototype, \"signIn\", null);\n__decorate([\n    (0, common_1.Get)('SignOut'),\n    __param(0, (0, common_1.Res)({ passthrough: true })),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object]),\n    __metadata(\"design:returntype\", Promise)\n], UserController.prototype, \"signOut\", null);\nUserController = __decorate([\n    (0, common_1.Controller)('user'),\n    (0, common_1.UseInterceptors)(user_interceptor_1.UserInterceptor),\n    __metadata(\"design:paramtypes\", [user_service_1.UserService])\n], UserController);\nexports.UserController = UserController;\n\n\n//# sourceURL=webpack://board/./src/user/user.controller.ts?");

/***/ }),

/***/ "./src/user/user.module.ts":
/*!*********************************!*\
  !*** ./src/user/user.module.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.UserModule = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst user_controller_1 = __webpack_require__(/*! ./user.controller */ \"./src/user/user.controller.ts\");\nconst user_repository_1 = __webpack_require__(/*! ./user.repository */ \"./src/user/user.repository.ts\");\nconst user_service_1 = __webpack_require__(/*! ./user.service */ \"./src/user/user.service.ts\");\nconst user_subscriber_1 = __webpack_require__(/*! ../subscribers/user.subscriber */ \"./src/subscribers/user.subscriber.ts\");\nlet UserModule = class UserModule {\n};\nUserModule = __decorate([\n    (0, common_1.Module)({\n        imports: [typeorm_1.TypeOrmModule.forFeature([user_repository_1.UserRepository])],\n        providers: [user_service_1.UserService, user_subscriber_1.UserSubscriber],\n        controllers: [user_controller_1.UserController],\n    })\n], UserModule);\nexports.UserModule = UserModule;\n\n\n//# sourceURL=webpack://board/./src/user/user.module.ts?");

/***/ }),

/***/ "./src/user/user.repository.ts":
/*!*************************************!*\
  !*** ./src/user/user.repository.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.UserRepository = void 0;\nconst user_entity_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'src/entities/user.entity'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nlet UserRepository = class UserRepository extends typeorm_1.Repository {\n};\nUserRepository = __decorate([\n    (0, typeorm_1.EntityRepository)(user_entity_1.User)\n], UserRepository);\nexports.UserRepository = UserRepository;\n\n\n//# sourceURL=webpack://board/./src/user/user.repository.ts?");

/***/ }),

/***/ "./src/user/user.service.ts":
/*!**********************************!*\
  !*** ./src/user/user.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.UserService = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst bcryptjs_1 = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\nconst user_entity_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'src/entities/user.entity'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nconst jsonwebtoken_1 = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nconst transaction_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'src/functions/transaction'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nlet UserService = class UserService {\n    constructor(connection) {\n        this.connection = connection;\n    }\n    async signUp(user, req, res) {\n        if (req.cookies.accessToken)\n            return res.redirect('/');\n        const rounds = 10;\n        const password = user.password;\n        const hashedPassword = await (0, bcryptjs_1.hash)(password, rounds);\n        const salt = await (0, bcryptjs_1.genSalt)();\n        const user_ = Object.assign(new user_entity_1.User(), {\n            userId: user.userId,\n            hashedPassword,\n            salt,\n        });\n        const QR = this.connection.createQueryRunner();\n        if (!(await (0, transaction_1.transaction)(QR, [() => QR.manager.save(user_)])))\n            throw new common_1.HttpException('이미 가입된 아이디입니다', 409);\n        return '가입완료';\n    }\n    async signIn(user, req, res) {\n        if (req.cookies.accessToken)\n            return res.redirect('/');\n        const { userId, password } = user;\n        const QR = this.connection.createQueryRunner();\n        const signInUser = (await (0, transaction_1.transaction)(QR, [\n            () => QR.manager.findOne(user_entity_1.User, { where: { userId } }),\n        ]))[0];\n        if (!signInUser)\n            throw new common_1.HttpException('유저를 찾을 수 없습니다', common_1.HttpStatus.CONFLICT);\n        else if (!(await (0, bcryptjs_1.compare)(password, signInUser.hashedPassword)))\n            throw new common_1.HttpException('아이디 혹은 비밀번호가 일치하지 않습니다', common_1.HttpStatus.BAD_REQUEST);\n        else\n            res\n                .cookie('accessToken', (0, jsonwebtoken_1.sign)({ id: signInUser.id }, 'test', { expiresIn: 9999999 }))\n                .send('로그인 성공!');\n    }\n};\nUserService = __decorate([\n    (0, common_1.Injectable)(),\n    __metadata(\"design:paramtypes\", [typeorm_1.Connection])\n], UserService);\nexports.UserService = UserService;\n\n\n//# sourceURL=webpack://board/./src/user/user.service.ts?");

/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!******************************************************!*\
  !*** ./node_modules/webpack/hot/log-apply-result.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\nmodule.exports = function (updatedModules, renewedModules) {\n\tvar unacceptedModules = updatedModules.filter(function (moduleId) {\n\t\treturn renewedModules && renewedModules.indexOf(moduleId) < 0;\n\t});\n\tvar log = __webpack_require__(/*! ./log */ \"./node_modules/webpack/hot/log.js\");\n\n\tif (unacceptedModules.length > 0) {\n\t\tlog(\n\t\t\t\"warning\",\n\t\t\t\"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)\"\n\t\t);\n\t\tunacceptedModules.forEach(function (moduleId) {\n\t\t\tlog(\"warning\", \"[HMR]  - \" + moduleId);\n\t\t});\n\t}\n\n\tif (!renewedModules || renewedModules.length === 0) {\n\t\tlog(\"info\", \"[HMR] Nothing hot updated.\");\n\t} else {\n\t\tlog(\"info\", \"[HMR] Updated modules:\");\n\t\trenewedModules.forEach(function (moduleId) {\n\t\t\tif (typeof moduleId === \"string\" && moduleId.indexOf(\"!\") !== -1) {\n\t\t\t\tvar parts = moduleId.split(\"!\");\n\t\t\t\tlog.groupCollapsed(\"info\", \"[HMR]  - \" + parts.pop());\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t\tlog.groupEnd(\"info\");\n\t\t\t} else {\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t}\n\t\t});\n\t\tvar numberIds = renewedModules.every(function (moduleId) {\n\t\t\treturn typeof moduleId === \"number\";\n\t\t});\n\t\tif (numberIds)\n\t\t\tlog(\n\t\t\t\t\"info\",\n\t\t\t\t'[HMR] Consider using the optimization.moduleIds: \"named\" for module names.'\n\t\t\t);\n\t}\n};\n\n\n//# sourceURL=webpack://board/./node_modules/webpack/hot/log-apply-result.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!*****************************************!*\
  !*** ./node_modules/webpack/hot/log.js ***!
  \*****************************************/
/***/ ((module) => {

eval("var logLevel = \"info\";\n\nfunction dummy() {}\n\nfunction shouldLog(level) {\n\tvar shouldLog =\n\t\t(logLevel === \"info\" && level === \"info\") ||\n\t\t([\"info\", \"warning\"].indexOf(logLevel) >= 0 && level === \"warning\") ||\n\t\t([\"info\", \"warning\", \"error\"].indexOf(logLevel) >= 0 && level === \"error\");\n\treturn shouldLog;\n}\n\nfunction logGroup(logFn) {\n\treturn function (level, msg) {\n\t\tif (shouldLog(level)) {\n\t\t\tlogFn(msg);\n\t\t}\n\t};\n}\n\nmodule.exports = function (level, msg) {\n\tif (shouldLog(level)) {\n\t\tif (level === \"info\") {\n\t\t\tconsole.log(msg);\n\t\t} else if (level === \"warning\") {\n\t\t\tconsole.warn(msg);\n\t\t} else if (level === \"error\") {\n\t\t\tconsole.error(msg);\n\t\t}\n\t}\n};\n\n/* eslint-disable node/no-unsupported-features/node-builtins */\nvar group = console.group || dummy;\nvar groupCollapsed = console.groupCollapsed || dummy;\nvar groupEnd = console.groupEnd || dummy;\n/* eslint-enable node/no-unsupported-features/node-builtins */\n\nmodule.exports.group = logGroup(group);\n\nmodule.exports.groupCollapsed = logGroup(groupCollapsed);\n\nmodule.exports.groupEnd = logGroup(groupEnd);\n\nmodule.exports.setLogLevel = function (level) {\n\tlogLevel = level;\n};\n\nmodule.exports.formatError = function (err) {\n\tvar message = err.message;\n\tvar stack = err.stack;\n\tif (!stack) {\n\t\treturn message;\n\t} else if (stack.indexOf(message) < 0) {\n\t\treturn message + \"\\n\" + stack;\n\t} else {\n\t\treturn stack;\n\t}\n};\n\n\n//# sourceURL=webpack://board/./node_modules/webpack/hot/log.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/poll.js?100":
/*!**********************************************!*\
  !*** ./node_modules/webpack/hot/poll.js?100 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var __resourceQuery = \"?100\";\n/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n/*globals __resourceQuery */\nif (true) {\n\tvar hotPollInterval = +__resourceQuery.substr(1) || 0;\n\tvar log = __webpack_require__(/*! ./log */ \"./node_modules/webpack/hot/log.js\");\n\n\tvar checkForUpdate = function checkForUpdate(fromUpdate) {\n\t\tif (module.hot.status() === \"idle\") {\n\t\t\tmodule.hot\n\t\t\t\t.check(true)\n\t\t\t\t.then(function (updatedModules) {\n\t\t\t\t\tif (!updatedModules) {\n\t\t\t\t\t\tif (fromUpdate) log(\"info\", \"[HMR] Update applied.\");\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t\t__webpack_require__(/*! ./log-apply-result */ \"./node_modules/webpack/hot/log-apply-result.js\")(updatedModules, updatedModules);\n\t\t\t\t\tcheckForUpdate(true);\n\t\t\t\t})\n\t\t\t\t.catch(function (err) {\n\t\t\t\t\tvar status = module.hot.status();\n\t\t\t\t\tif ([\"abort\", \"fail\"].indexOf(status) >= 0) {\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] Cannot apply update.\");\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] \" + log.formatError(err));\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] You need to restart the application!\");\n\t\t\t\t\t} else {\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] Update failed: \" + log.formatError(err));\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t}\n\t};\n\tsetInterval(checkForUpdate, hotPollInterval);\n} else {}\n\n\n//# sourceURL=webpack://board/./node_modules/webpack/hot/poll.js?");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/mapped-types":
/*!***************************************!*\
  !*** external "@nestjs/mapped-types" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/mapped-types");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcryptjs");

/***/ }),

/***/ "cache-manager-redis-store":
/*!********************************************!*\
  !*** external "cache-manager-redis-store" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("cache-manager-redis-store");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("class-validator");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie-parser");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "ioredis":
/*!**************************!*\
  !*** external "ioredis" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("ioredis");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("joi");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");

/***/ }),

/***/ "passport-google-oauth20":
/*!******************************************!*\
  !*** external "passport-google-oauth20" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("passport-google-oauth20");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("typeorm");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("5dc6434e220c0e661948")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						blockingPromises = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = __webpack_require__.hmrS_require = __webpack_require__.hmrS_require || {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		
/******/ 		// no chunk loading
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			var update = require("./" + __webpack_require__.hu(chunkId));
/******/ 			var updatedModules = update.modules;
/******/ 			var runtime = update.runtime;
/******/ 			for(var moduleId in updatedModules) {
/******/ 				if(__webpack_require__.o(updatedModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = updatedModules[moduleId];
/******/ 					if(updatedModulesList) updatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		}
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.requireHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.require = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.requireHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			return Promise.resolve().then(function() {
/******/ 				return require("./" + __webpack_require__.hmrF());
/******/ 			}).catch(function(err) { if(err.code !== "MODULE_NOT_FOUND") throw err; });
/******/ 		}
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/webpack/hot/poll.js?100");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;