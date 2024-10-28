const aboutpositionTop = $("#about").offset().top;

$(window).on("scroll" , function() {
    if($(window).scrollTop() > aboutpositionTop ) {
      $(".navbar").addClass("nav-fixed");
      $(".icon").removeClass("d-none");
      $(".scroll-to-top").fadeIn(500);
    } else {
        $(".navbar").removeClass("nav-fixed");
        $(".icon").addClass("d-none");
        $(".scroll-to-top").fadeOut(500);
    }
});

// ### scrool to top 
$(".scroll-to-top").on("click" , function () {
    $("html").animate({ scrollTop : 0 } , 2000);
});

///  ^ scroll to specific section

$(".navbar ul li a").on("click" ,  function() {
    const currentlink = $(this).attr("href");
    const currentlinkpostop = $(currentlink).offset().top;
    $( "html , body").animate({scrollTop : currentlinkpostop } , 1000)
})
////  *  color box
const colorBoxWidth = $(".settings").outerWidth();
$(".settings").css({left:`-${colorBoxWidth}px`});

colorBoxstatus = false;
$(".gear-icon").on("click" , function() {
   if(colorBoxstatus == true) {
               // shown
    $(".settings").animate({left:`-${colorBoxWidth}px`} , 500);
    $(".gear-icon i").removeClass("fa-xmark").addClass(" fa-gear fa-spin");
  colorBoxstatus = false;
} else {
                // hidden
    $(".settings").animate({left:"0px"} , 500);
    $(".gear-icon i").addClass("fa-xmark").removeClass(" fa-gear fa-spin");
    colorBoxstatus = true;
}
});

$(".colors li").on("click" , function() {
    const currentcolor = $(this).css("backgroundColor");
    $("*").css({color: currentcolor});
    $(":root").css("--main-color" , currentcolor);
}); 
jQuery (function() {
    $(".loading").fadeOut(3000 , ()=> {
        $("body").css({overflow : "auto"});
    });
})