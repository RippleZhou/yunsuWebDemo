/**
 * Created by HUCC on 2016/12/11.
 */
//动画函数

$(function() {

    var li = $(".nav-menu").find("li"),
        ol = $(".menu-content").find("li")
    li.on("click", function() {
        console.log(1);
        var $this = $(this),
            index = $this.index();
        $this.addClass("active").siblings().removeClass("active");
        ol.eq(index).addClass("active").siblings().removeClass("active");
    })
    /**跳转到关于我们界面**/
    function selectTab(i){
    window.location.href='about-us.html?selectTab='+i;
    };
})