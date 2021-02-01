const UserService = require('../service/user.service');

class UserController {
    async create(ctx, next) {
        const result = await UserService.create(ctx.request.body);
        console.log(result);
        if (result.affectedRows === 1) {
            ctx.status = 200;
            ctx.body = '创建用户成功';
        } else {

        }   
    }
}

module.exports = new UserController;