"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMovieDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const movie_dto_1 = require("./movie.dto");
class UpdateMovieDto extends (0, mapped_types_1.PartialType)((0, mapped_types_1.PickType)(movie_dto_1.CreateMovieDto, ['desc', 'name'])) {
}
exports.UpdateMovieDto = UpdateMovieDto;
//# sourceMappingURL=update.movie.dto.js.map