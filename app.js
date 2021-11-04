const express = require('express')
const app = express()
    // 导入跨域插件
const cors = require('cors');
// 导入路由模块
const router = require('./router/router.js');
// 启用跨域资源共享
app.use(cors());
//配置解析 `application/x-www-form-urlencoded` 格式的表单数据的中间件：
app.use(express.urlencoded({ extended: false }));
// 注册路由模块，让路由模块中的代码能够使用
app.use(router)

//注册全局错误级别中间件
//错误中间件
app.use((err, req, res, next) => {
    return res.send('服务器错误,可能是未提交categoryName参数');
})

app.use('/images', express.static('./images')) // => /images 为虚拟目录
app.use('/', express.static('./web/views')) // => /images 为虚拟目录
app.listen(3001, () => {
    console.log('runing http://127.0.0.1:3001');
})