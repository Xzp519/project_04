//入口函数
$(function() {

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

    var $right = $('.right');
    //拿到所有小li对象
    var $lis = $('.left ul li');
    //当页面被加载的时候调用
    $lis.on('click', function(e) {

            //清除其他小li的类名
            $lis.removeClass();
            $(this).addClass('selected');
            var category = $(this).attr('data-category');
            //发送ajax请求获得数据
            $.ajax({
                method: 'POST',
                url: 'http://127.0.0.1:3001/getCategoryData',
                data: {
                    categoryName: category
                },
                success: function(res) {
                    //如果状态为1则直接显示不用调用模板引擎
                    if (res.status === '1') {
                        $right.html(res.titile);
                    }

                    //如果状态为0则直接调用模板引擎
                    if (res.status === '0') {
                        var htmlStr = template('tpl-category', res);
                        $right.html(htmlStr);
                    }
                }
            })

        })
        //手动调用一次来请求第一次默认的数据
    $lis[0].click();


})