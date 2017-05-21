window.onload = function() {
    /*
  需求：
    滚动的时候
    更改 header的透明度 
    滚动到 轮播图的高度之后 透明度 就不再更改了
    透明度最大 .8
  伪代码：
    页面打开时 把透明度 变为 0
    获取header dom元素
    获取轮播图的高度
    滚动的时候--滚动事件
      获取 滚动的距离
      计算透明度 并设置给dom元素  滚动距离 / 最大的距离
      获取header.style.backgroundColor = rgba()
*/
    //更改头部透明度
    scrollChangeAlpha();
    //倒计时
    countDownTime();
    //轮播图
    function scrollChangeAlpha() {
        var header = document.querySelector("header");
        var maxHeight = document.querySelector(".index-banner").offsetWidth;
        // 页面打开时 把透明度 变为 0
        header.style.backgroundColor = 'rgba(201,21,35,0)';
        window.onscroll = function() {
            var alpha = document.body.scrollTop / maxHeight;
            if (alpha > 0.8) {
                alpha = 0.8;
            }
            header.style.backgroundColor = 'rgba(201,21,35,' + alpha + ')';

        }
    }


    /*
    需求
      每隔一段时间
        递减1
        修改html页面中的显示
    伪代码
      这里写死一个时间 5个小时
      获取需要修改的dom元素
      定时器 setInterval
        时间递减
        时间没有 要提示用户 错过了机会哦
        格式化为 时分秒
        设置给 页面中的html元素
*/
    function countDownTime() {
        //1 总时长 以秒的形式设置
        var totalSec = 4 * 60 * 60;
        //2 获取对象
        var lis = document.querySelectorAll(".secondKill .top-left  ul li");
        var timeId = setInterval(function() {
            //3 时间递减
            totalSec--;
            //4 格式化时分秒
            //格式化小时   
            // 带入 具体的数字进行计算 方便 想出计算方法  3888秒进去  3888 / 3600 = 1.x
            var hour = Math.floor(totalSec / 3600);
            //分 
            // 带入 具体的数字进行计算 方便 想出计算方法  3888秒进去  3888 % 3600/60 = 4.x
            var minutes = Math.floor(totalSec % 3600 / 60);
            //秒 带入 具体的数字进行计算 方便 想出计算方法  3888秒进去  3888 % 3600 
            var second = totalSec % 60;
            //5 将时分秒分别添加到li中
            lis[0].innerHTML = Math.floor(hour / 10);
            lis[1].innerHTML = Math.floor(hour % 10);
            lis[3].innerHTML = Math.floor(minutes / 10);
            lis[4].innerHTML = Math.floor(minutes % 10);
            lis[6].innerHTML = Math.floor(second / 10);
            lis[7].innerHTML = second % 10;
        }, 100)
    }






}