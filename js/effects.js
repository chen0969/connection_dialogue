$(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();
    var newTop = 150 + scrollTop;
    if(newTop <= 2000){
        $(".c-hand").css("transform", "translateY(-" + newTop +"px)");
    }else{
        $(".c-hand").css("transform", "translateY(-300px)");
    }
});