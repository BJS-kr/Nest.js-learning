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
exports.Social = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const movie_entity_1 = require("./movie.entity");
let Social = class Social {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], Social.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 20, nullable: false }),
    __metadata("design:type", String)
], Social.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 20, nullable: false }),
    __metadata("design:type", String)
], Social.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 300, nullable: true }),
    __metadata("design:type", String)
], Social.prototype, "photo", void 0);
__decorate([
    (0, typeorm_1.Column)('char', { length: 1, nullable: false }),
    __metadata("design:type", String)
], Social.prototype, "from", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => movie_entity_1.Movie, (movie) => movie.socialUser, {
        cascade: ['update', 'remove'],
        createForeignKeyConstraints: true,
    }),
    __metadata("design:type", Array)
], Social.prototype, "movies", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'date' }),
    __metadata("design:type", Date)
], Social.prototype, "registeredAt", void 0);
Social = __decorate([
    (0, typeorm_1.Entity)({ database: 'db', name: 'socials' })
], Social);
exports.Social = Social;
//# sourceMappingURL=social.entity.js.map