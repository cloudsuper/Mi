$(function() {
    var count = 0;
    if (timer) {
        clearInterval(timer);
    }
    $(".arrow-right").click(clickR).mouseenter(function() {
        clearInterval(timer);
    }).mouseleave(function() {
        timer = setInterval(clickR, 2000);
    });

    function clickR() {
        count++;
        if (count == $(".slider li").length) {
            count = 0;
        }
        //让count渐渐的显示，其他兄弟渐渐的隐藏 
        $(".slider li").eq(count).fadeIn().siblings("li").fadeOut();
    }

    var timer = setInterval(clickR, 2000);
    $(".arrow-left").click(function() {
        count--;
        if (count == -1) {
            count = $(".slider li").length - 1;
        }
        //让count渐渐的显示，其他兄弟渐渐的隐藏
        $(".slider li").eq(count).fadeIn().siblings("li").fadeOut();
    }).mouseenter(function() {
        clearInterval(timer);
    }).mouseleave(function() {
        timer = setInterval(clickR, 2000);
    });
});