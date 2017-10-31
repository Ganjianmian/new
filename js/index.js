var $navList=$(".nav .container .right .list li a");
var $navcur=$(".nav .container .right .list .cur");


$navList.mouseover(function(){
    //var index = $(this).index();
    var index = $navList.index(this);//获取index
    //移动距离 = 当前LI的宽度 - 红色盒子的宽度 / 2   +
    var move = ($navList.eq(index).parent().width() - 80) / 2;

    //用当前Li的Offsetleft - 父级的offsetleft
    var offset =$navList.eq(index).offset().left - $navList.eq(0).parent().offset().left;

    $navcur.css('left',offset + move + "px");
})
