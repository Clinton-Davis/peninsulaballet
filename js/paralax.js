$(window).scroll(function () {
    /* This check to see if the page is bigger that 600px wide
    if its not parallax is canceled */
    var width = $(window).width();
    if (width > 900) {
        parallax();
    } else {
        return
    }
})

function parallax() {
    var wScroll = $(window).scrollTop();

    $('.parallax-bg').css('background-position', 'top ' + (wScroll * 0.1) + 'px')

    $('.parallax-box').css('top', +(wScroll * 0.0105) + 'em')

}