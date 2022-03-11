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

    /* open>hrshop_view s */
    $('.HRshop_view .slider-single').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        adaptiveHeight: true,
        infinite: false,
    useTransform: true,
        speed: 400,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    });

    $('.HRshop_view .slider-nav')
        .on('init', function(event, slick) {
            $('.slider-nav .slick-slide.slick-current').addClass('is-active');
        })
        .slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            focusOnSelect: false,
            infinite: false,
        //     responsive: [{
        //         breakpoint: 500,
        //         settings: {
        //             slidesToShow: 4,
        //             slidesToScroll: 4,
        //        }
        //     }, {
        //         breakpoint: 420,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 3,
        //    }
        //     }]
        });

    $('.HRshop_view .slider-single').on('afterChange', function(event, slick, currentSlide) {
        $('.slider-nav').slick('slickGoTo', currentSlide);
        var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
        $('.slider-nav .slick-slide.is-active').removeClass('is-active');
        $(currrentNavSlideElem).addClass('is-active');
    });

    $('.HRshop_view .slider-nav').on('click', '.slick-slide', function(event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data('slick-index');

        $('.slider-single').slick('slickGoTo', goToSingleSlide);
    });
    /* open>hrshop_view e */
    

});