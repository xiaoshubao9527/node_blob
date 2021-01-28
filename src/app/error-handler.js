const {USER_PASSWORD_NOT_EXSTIS} = require('../constant/errorMsg');

class ErrorHandler {
    async create(errorMsg, ctx) {
        let status, message;
        switch(errorMsg) {
            case USER_PASSWORD_NOT_EXSTIS:
                status = 400;
                message = '用户名或密码不为空';
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