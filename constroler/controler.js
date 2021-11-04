// controler.js 业务处理模块
// 导入数据库模块
const dataImg = require('../db/data.json')
const category_qd = require('../db/category_qd.json')
const category_wxxcx = require('../db/category_wxxcx.json')
    // 请求根目录业务逻辑
module.exports.getRoot = (req, res) => {

    }
    // 获取全部课程逻辑接口
    // http://127.0.0.1:3001/getAllCourse
module.exports.getAllCourse = (req, res) => {
    res.send(dataImg);
}
module.exports.getCategoryData = (req, res) => {
    console.log(req.body);
    //请求的是前端课程
    if (req.body.categoryName === 'qd') return res.json(category_qd);
    //请求的是微信小程序
    if (req.body.categoryName === 'wxxcx') return res.json(category_wxxcx);
    //不是以上两个
    return res.send({
        status: "1",
        titile: req.body.categoryName
    });
}