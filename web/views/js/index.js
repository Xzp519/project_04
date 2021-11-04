//入口函数
$(function() {



    //调用初始化页面的方法
    initdata();
    //给首页和分类绑定事件

    var $home = $('footer .home');
    var $category = $('footer .category');
    //当首页被点击的时候
    $home.on('click', () => {
            //跳转到首页
            location.href = './index.html';

        })
        //当首页被点击的时候
    $category.on('click', () => {
            //跳转到首页
            location.href = './category.html';

        })
        //初始化首页的方法
    function initdata() {
        var $floor2 = $('.floor2');
        //发送ajax请求获取相应的数据
        $.ajax({
            method: 'GET',
            url: 'http://127.0.0.1:3001/getAllCourse',
            success: function(res) {
                console.log(JSON.parse('{"name":"zahngsan"}'));
                if (res.result.data.length < 1) return console.log('初始化页面失败!');
                //获取数据成功
                //调用模板引擎
                var htmlStr = template('tpl-category', res.result);
                // console.log(htmlStr);
                //
                $floor2.html(htmlStr);
            }

        })
    }



})