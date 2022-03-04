$(document).ready(function () {

    /*링크 복사 s*/
    var clipboard = new ClipboardJS('.location .share');
    clipboard.on('success', function (e) {
        alert("링크 복사가 완료되었습니다.")
    });

    clipboard.on('error', function (e) {
        alert("링크 복사 에러")
    });
    /*링크 복사 e*/
    /*탭 s*/
    $('.location .sec').hide();
    $('.location #tab1').show();

    $(document).on('click', '.location .tab_box a', function (e) {
        var activeTab = $(this).attr("data-tab");
        e.preventDefault();
        $('.location .tab_box a').removeClass('on');
        $(this).addClass('on');

        console.log(activeTab);

        if ($('.location .tab_box a').hasClass('on')) {

            $('.location .sec').fadeOut();
            $("#" + activeTab).fadeIn();
        };
    });
    /*탭 e*/


});
