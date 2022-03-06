$(document).ready(function () {
    /* tab_sec s */
    /*탭 s*/
    $('.tab_sec').hide();
    $('#tab1').show();

    $(document).on('click', '.tab_box a', function (e) {
        var activeTab = $(this).attr("data-tab");
        e.preventDefault();
        $('.tab_box a').removeClass('on');
        $(this).addClass('on');
        $('html, body, div').clearQueue();
        console.log(activeTab);

        if ($('.tab_box a').hasClass('on')) {

            $('.tab_sec').hide();
            $("#" + activeTab).fadeIn();
            $("#" + activeTab).addClass("wow fadeInDown animated");
            $("#" + activeTab).attr("style", "visibility: visible; animation-name: fadeInDown;");
        };
    });
    /*탭 e*/
    /* tab_sec e */
    /* cscenter>location s*/
    /*링크 복사 s*/
    var clipboard = new ClipboardJS('.location .share');
    clipboard.on('success', function (e) {
        alert("링크 복사가 완료되었습니다.")
    });

    clipboard.on('error', function (e) {
        alert("링크 복사 에러")
    });
    /*링크 복사 e*/

    /* cscenter>location e */
});