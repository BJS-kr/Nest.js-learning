"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInSchema = exports.SignInDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const user_dto_1 = require("./user.dto");
const Joi = require("joi");
class SignInDto extends (0, mapped_types_1.OmitType)(user_dto_1.CreateUserDto, [
    'rePassword',
]) {
}
exports.SignInDto = SignInDto;
exports.signInSchema = Joi.object({
    userId: Joi.string().required(),
    password: Joi.string().required(),
});
//# sourceMappingURL=signIn.dto.js.map