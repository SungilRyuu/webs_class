(function($){
    
    $(".header__nav > ul > li").mouseover(function(){
        $(".header__nav > ul > li").find(".subMenu").stop().slideDown(300);
    })
    $(".header__nav > ul > li").mouseout(function(){
        $(".header__nav > ul > li").find(".subMenu").stop().slideUp(300);
    })

    var tabMenu = $("#section3 .container");

    tabMenu.find("ul > li > ul.section3__body").hide();
    tabMenu.find("ul > li.active >ul.section3__body").show();

    function tabList(e){
        e.preventDefault();
        var target = $(this); //사용자가 클릭한 메뉴
        target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide(); // 메소드 체인 : 연속해서 사용 가능(show + addClass)
    }

    tabMenu.find("ul > li > a").click(tabList);
    
})(jQuery);