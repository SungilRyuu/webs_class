(function($){
    //서브메뉴

    // //첫 번째 유형 (자신의 li만 보여줌)
    // $(".nav > ul > li").mouseover(function(){
    //     $(this).find(".submenu").css("display","block");
    // })
    // $(".nav > ul > li").mouseout(function(){
    //     $(this).find(".submenu").css("display","none");
    // })

    // //두 번째 유형 (전체 li 보여줌)
    // $(".nav > ul > li").mouseover(function(){
    //     $(".nav > ul > li").find(".submenu").css("display","block");
    // })
    // $(".nav > ul > li").mouseout(function(){
    //     $(".nav > ul > li").find(".submenu").css("display","none");
    // })

    // //세 번째 유형 (슬라이딩으로 li 보여줌 -> 버그 같음)
    // $(".nav > ul > li").mouseover(function(){
    //     $(this).find(".submenu").stop().show(500);
    // })
    // $(".nav > ul > li").mouseout(function(){
    //     $(this).find(".submenu").stop().hide(500);
    // })

    // //네 번째 유형 (슬라이딩으로 각각 li 보여줌)
    // $(".nav > ul > li").mouseover(function(){
    //     $(this).find(".submenu").stop().slideDown(500);
    // })
    // $(".nav > ul > li").mouseout(function(){
    //     $(this).find(".submenu").stop().slideUp(500);
    // })

    // //다섯 번째 유형 (슬라이딩으로 전체 li 보여줌)
    $(".nav > ul > li").mouseover(function(){
        $(".nav > ul > li").find(".submenu").stop().slideDown(500);
    })
    $(".nav > ul > li").mouseout(function(){
        $(".nav > ul > li").find(".submenu").stop().slideUp(500);
    })

    //탭 메뉴
    var tabMenu = $(".notice");

    tabMenu.find("ul > li > ul").hide();
    tabMenu.find("ul > li.active > ul").show();

    function tabList(e){
        e.preventDefault();
        var target = $(this); //사용자가 클릭한 메뉴
        target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide(); // 메소드 체인 : 연속해서 사용 가능(show + addClass)
    }

    tabMenu.find("ul > li > a").click(tabList);

})(jQuery);