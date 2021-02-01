const {USER_OR_PASSWORD_IS_REQUIRE, USER_IS_ALREADY} = require('../constant/error-types');

class ErrorHandler {
    async create(errorMsg, ctx) {
        let status, message;
        switch(errorMsg) {
            case USER_OR_PASSWORD_IS_REQUIRE:
                status = 400;
                message = '用户名或密码不为空';
            break;
            case USER_IS_ALREADY:
                status = 409;
                message = '用户已存在';
            break;
            default:
                status = 400;
                message = '';
        }
        ctx.status = status;
        ctx.body = message;
    }
}

module.exports = new ErrorHandler;