$(document).ready(function () {

    /*링크 복사 s*/
    var clipboard = new ClipboardJS('.location2 .share');
    clipboard.on('success', function (e) {
        alert("링크 복사가 완료되었습니다.")
    });

    clipboard.on('error', function (e) {
        alert("링크 복사 에러")
    });
    /*링크 복사 e*/
    /*탭 s*/
    $('.location2 .sec').hide();
    $('.location2 #tab1').show();

    $(document).on('click', '.location2 .tab_box a', function (e) {
        var activeTab = $(this).attr("data-tab");
        e.preventDefault();
        $('.location2 .tab_box a').removeClass('on');
        $(this).addClass('on');

        console.log(activeTab);

        if ($('.location2 .tab_box a').hasClass('on')) {

            $('.location2 .sec').fadeOut();
            $("#" + activeTab).fadeIn();
        };
    });
    /*탭 e*/


});
