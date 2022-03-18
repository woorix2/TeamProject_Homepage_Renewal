$(document).ready(function () {

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
