$(document).ready(function () {
    // top_btn
    $('.top_btn').click('click', function (event) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: 0
        }, 300);
    });
});