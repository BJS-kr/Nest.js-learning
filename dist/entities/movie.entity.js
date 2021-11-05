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
exports.Movie = void 0;
const typeorm_1 = require("typeorm");
const social_entity_1 = require("./social.entity");
const user_entity_1 = require("./user.entity");
let Movie = class Movie {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Movie.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 40, unique: true }),
    __metadata("design:type", String)
], Movie.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 100, nullable: true, default: null }),
    __metadata("design:type", String)
], Movie.prototype, "desc", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 20, nullable: true, default: null, array: true }),
    __metadata("design:type", Array)
], Movie.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { default: 0 }),
    __metadata("design:type", Number)
], Movie.prototype, "like", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.movies),
    (0, typeorm_1.JoinColumn)({ name: 'local_user_id', referencedColumnName: 'id' }),
    __metadata("design:type", user_entity_1.User)
], Movie.prototype, "localUser", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => social_entity_1.Social, (social) => social.movies),
    (0, typeorm_1.JoinColumn)({ name: 'social_user_id', referencedColumnName: 'id' }),
    __metadata("design:type", social_entity_1.Social)
], Movie.prototype, "socialUser", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Movie.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Movie.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Movie.prototype, "deletedAt", void 0);
Movie = __decorate([
    (0, typeorm_1.Entity)({ database: 'db', name: 'movies' })
], Movie);
exports.Movie = Movie;
//# sourceMappingURL=movie.entity.js.map