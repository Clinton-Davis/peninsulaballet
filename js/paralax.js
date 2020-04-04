$(window).scroll(function() {
    /* This check to see if the page is bigger that 600px wide
    if its not parallax is canceled */
    var width = $(window).width();
    console.log(width);  
    if (width > 900) {
        parallax();
    } else {
        return
    }
    
}) 

function parallax() {
    var wScroll = $(window).scrollTop();
    
    $('.parallax-bg').css('background-position','center ' +(wScroll*0.5)+'px')

    $('.parallax-box').css('top', +(wScroll*0.0150)+'em')

    $('.parallax-test').css('top', -10+(wScroll*0.0125)+'em')
    
}
