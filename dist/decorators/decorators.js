"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacebookUser = exports.GoogleUser = exports.User = void 0;
const common_1 = require("@nestjs/common");
exports.User = (0, common_1.createParamDecorator)((data, ctx) => {
    const res = ctx.switchToHttp().getResponse();
    return res.locals.user;
});
exports.GoogleUser = (0, common_1.createParamDecorator)((data, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    console.log('구글유저 데코레이터, 유저정보:', req.user);
    return req.user;
});
exports.FacebookUser = (0, common_1.createParamDecorator)((data, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
});
//# sourceMappingURL=decorators.js.map