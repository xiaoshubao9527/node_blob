const bodyParser = require('koa-bodyparser')
const app = require('./app');
const ErrorHandler = require('./app/error-handler')
const {APP_PORT} = require('./app/config');
const userRouter = require('./router/user.router');
require('./service/index');

app.use(bodyParser()); // 解析post请求的body数据
app.use(userRouter.routes()); // 把user中的所有路由注入到app中
app.use(userRouter.allowedMethods()); // user中没有的请求办法做出对应的提示

app.on('error', ErrorHandler.create)

app.listen(APP_PORT, () => {
    console.log(`服务器${APP_PORT}开启成功`)
})