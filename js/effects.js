$(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();
    var isMobile = window.matchMedia("(max-width: 768px)").matches; // Adjust the width for your mobile breakpoint

    var newTop;
    if (isMobile) {
        newTop = scrollTop;
    } else {
        newTop = 150 + scrollTop;
    }

    if(newTop <= 2000){
        $(".c-hand").css("transform", "translateY(-" + newTop +"px)");
    }else{
        $(".c-hand").css("transform", "translateY(-300px)");
    }
});

function getTicket(){
    window.open("https://www.eventbrite.ca/e/copy-of-youth-connection-dialogue-in-ottawa-for-the-first-time-in-forever-tickets-1011521938347?aff=oddtdtcreator");
}
