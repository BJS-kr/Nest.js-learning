import { CreateMovieDto } from './movie.dto';
declare const UpdateMovieDto_base: import("@nestjs/mapped-types").MappedType<Partial<Pick<CreateMovieDto, "name" | "desc">>>;
export declare class UpdateMovieDto extends UpdateMovieDto_base {
}
export {};
