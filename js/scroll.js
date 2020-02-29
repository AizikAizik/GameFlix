$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 200){
            $('.scrollTotop').fadeIn();

        }else{
            $('.scrollTotop').fadeOut();
        }
    });
    // smooth scrolling to the top
    $('.scrollTotop').click(function(){
        $('html, body').animate({ scrollTop: 0}, 1000)
    });
});