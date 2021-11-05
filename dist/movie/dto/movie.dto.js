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
exports.CreateMovieDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateMovieDto {
    constructor() {
        this.desc = '내용을 입력해주세요';
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: "Movie's title",
        required: true,
        readOnly: true,
    }),
    __metadata("design:type", String)
], CreateMovieDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: "Movie's description",
        required: true,
        minLength: 10,
        maxLength: 50,
        readOnly: true,
    }),
    (0, class_validator_1.MinLength)(10),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateMovieDto.prototype, "desc", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Played actors in Movie',
        type: 'array',
        items: { type: 'string' },
        readOnly: true,
    }),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateMovieDto.prototype, "name", void 0);
exports.CreateMovieDto = CreateMovieDto;
//# sourceMappingURL=movie.dto.js.map