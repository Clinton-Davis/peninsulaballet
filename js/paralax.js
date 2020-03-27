$(window).scroll(function() {
    parallax();
}) 

function parallax() {
    var wScroll = $(window).scrollTop();
    
    $('.parallax-bg').css('background-position','center ' +(wScroll*0.5)+'px')

    $('.parallax-box').css('top', -2+(wScroll*0.0180)+'em')

    $('.parallax-test').css('top', -10+(wScroll*0.0125)+'em')
}
