const {USER_OR_PASSWORD_IS_REQUIRE, USER_IS_ALREADY} = require('../constant/error-types')
const UserService = require('../service/user.service')

async function userRegisterMiddleware(ctx, next) {
    // 获取body中的数据
    const {name, password} = ctx.request.body;

    // 判断用户名和密码
    if (!name || !password) {
        const error = new Error(USER_OR_PASSWORD_IS_REQUIRE);
        return ctx.app.emit('error', error.message, ctx)
    }

    // 判断数据库用户表中是否存在此用户存在注册失败
    const result = await UserService.findUserByName(name);
    if (result.length) {
        const error = new Error(USER_IS_ALREADY);
        return ctx.app.emit('error', error.message, ctx);
    }
    await next();
}

module.exports = {
    userRegisterMiddleware
}