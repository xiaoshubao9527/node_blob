const {USER_PASSWORD_NOT_EXSTIS} = require('../constant/errorMsg')

async function userRegisterMiddleware(ctx, next) {
    // 获取body中的数据
    const {name, password} = ctx.request.body;

    // 判断用户名和密码
    if (!name || !password) {
        const error = new Error(USER_PASSWORD_NOT_EXSTIS);
        return ctx.app.emit('error', error.message, ctx)
    }

    // 判断数据库用户表中是否存在此用户存在注册失败
    
    await next();
}

module.exports = {
    userRegisterMiddleware
}