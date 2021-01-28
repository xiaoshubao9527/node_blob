const Router = require('koa-router');
const {userRegisterMiddleware} = require('../middleware/user.middleware');
const UserController = require('../controller/user.controller')


const userRouter = new Router({prefix: '/user'});
userRouter.post('/register', userRegisterMiddleware, UserController.create)

module.exports = userRouter;