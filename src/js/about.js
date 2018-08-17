import "../css/about.css";

$('.skillWrap').click(function() {

    if ($(window).height() > 767) {
        return;
    } else {
        var o = this;

        $(o).animate({
            opacity: 1
        })

        setTimeout(function() {
            $(o).animate({
                opacity: 0
            })
        }, 1000);
    }
});

if ($(window).width() > 767) {
    var boxOneHeight = $('.right.one').height() + 32;
    var boxTwoHeight = $('.left.one').height() + 32;
    var boxThreeHeight = $('.right.two').height() + 32;
    var boxFourHeight = $('.left.two').height() + 32;

    $('.hisCircle.two').css('margin-top', boxOneHeight);
    $('.left.one').css('margin-top', boxOneHeight);

    $('.hisCircle.three').css('margin-top', boxOneHeight + boxTwoHeight);
    $('.right.two').css('margin-top', boxTwoHeight + 24);
    //$('.hisLeftBox').css('height', $('.hisRightBox').height());

    $('.hisCircle.four').css('margin-top', boxOneHeight + boxTwoHeight + boxThreeHeight);
    $('.left.two').css('margin-top', boxThreeHeight + 24);
    $('.left.two').css('margin-bottom', 60);

    $('.hisRightBox').css('padding-bottom', boxFourHeight);
} else {
    var boxOneHeight = $('.right.one').height() + 16;
    var boxTwoHeight = $('.hisBoxMobile').height() + 16;
    var boxThreeHeight = $('.right.two').height() + 16;

    $('.hisCircle.two').css('margin-top', boxOneHeight);
    $('.hisCircle.three').css('margin-top', boxOneHeight + boxTwoHeight);
    $('.hisCircle.four').css('margin-top', boxOneHeight + boxTwoHeight + boxThreeHeight);

}
