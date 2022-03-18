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
    $(document).on('click', '.on_style a', function (e) {
        var activeTab = $(this).attr("data-tab");
        e.preventDefault();
        $('.on_style a').removeClass('on');
        $(this).addClass('on');
        $('html, body, div').clearQueue();
        console.log(activeTab);

        if ($('.on_style a').hasClass('on')) {

            $('.tab_sec').hide();
            $("#" + activeTab).fadeIn();
            $("#" + activeTab).addClass("wow fadeInDown animated");
            $("#" + activeTab).attr("style", "visibility: visible; animation-name: fadeInDown;");
        };
    });
    /*탭 e*/
    /* tab_sec e */
    /* seletbox처럼 바뀌는 탭 s */
    
    var menu_tit = $('.sel_tab .ul_box li.active a').text();
    $(".sel_tab").prepend("<p class='lnb_title'><span>" + menu_tit + "</span></p>");

    $(window).resize(function () {
        if ($(window).width() <= 768) {
            $('.sel_tab').addClass('sel_active');

            $('.sel_active .ul_box li a').click('click', function (e) {
                $(this).parents('.ul_box').siblings('.lnb_title').children('span').empty();
                var menu_tit = $(this).text();
                var sec_title = $(this).parents('.ul_box').siblings('.lnb_title').children('span');
                $(sec_title).prepend(menu_tit);
                $('.sel_active .ul_box').stop().slideUp();
                $('.sel_active .lnb_title.add').removeClass('add');
                $('.sel_active .more_btn').removeClass('more_add');
                e.preventDefault();
            });

            $('.sel_active .ul_box').stop().slideUp();
            $('.sel_active .lnb_title.add').removeClass('add');
            $(".sel_active .more_btn").removeClass('more_add');

            $(document).on('click', '.sel_active .lnb_title', function (e) {
                $('.sel_active .ul_box').stop().slideDown();
                $(this).addClass('add');
                $(".sel_active .more_btn").addClass('more_add');
            });
            
            $(document).on('click', '.sel_active .lnb_title.add', function (e) {
                $('.sel_active .ul_box').stop().slideUp();
                $('.sel_active .lnb_title.add').removeClass('add');
                $('.sel_active .more_btn').removeClass('more_add');              
                console.log('click');
                e.preventDefault();
            });
        }else{
            $('.sel_tab').removeClass('sel_active');
            $('.sel_tab .ul_box').stop().show();
            $('.sel_tab .ul_box').css('height','auto');
        }
    });
    /* seletbox처럼 바뀌는 탭 e */


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
        .on('init', function (event, slick) {
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

    $('.HRshop_view .slider-single').on('afterChange', function (event, slick, currentSlide) {
        $('.slider-nav').slick('slickGoTo', currentSlide);
        var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
        $('.slider-nav .slick-slide.is-active').removeClass('is-active');
        $(currrentNavSlideElem).addClass('is-active');
    });

    $('.HRshop_view .slider-nav').on('click', '.slick-slide', function (event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data('slick-index');

        $('.slider-single').slick('slickGoTo', goToSingleSlide);
    });

    $(window).load(function () {
        $(window).resize(function () {
            var headerheight = $('.header').outerHeight(); //헤더 높이 
            var tabheight = $('.tab_main').outerHeight(); //tab main 높이 
            $('.hierarchy_view .tab_main .sel_tab a[href^=#]').click(function () {
                var href = $(this).attr("href");
                var target = $(href == "#" || href == "" ? 'html' : href);
                var position = target.offset().top - headerheight - tabheight - 10;
                $("html, body").stop().animate({
                    scrollTop: position
                }, 200, "easeInQuad");
                return false;
            });
        });
    });


    $(window).load(function () {
        $(window).resize(function () {
            var headerheight = $('.header').outerHeight(); //헤더 높이 
            var visHeight = ($('.sub_vis').height() + $('.path_wrap').outerHeight(true) + $('.hie_box').outerHeight(true) + 50) - headerheight; /* 920 */
            var tabHeight2 = $('.tab_main').outerHeight() + headerheight;
            $(window).on("scroll", function () {
                if ($(window).scrollTop() < visHeight) {
                    $('.tab_main').removeClass('fixed');
                    $('.hie_cont').css({
                        'padding-top': 0
                    });

                } else if ($(window).scrollTop() >= visHeight) {
                    $('.tab_main').addClass('fixed');
                    $('.hie_cont').css({
                        'padding-top': tabHeight2
                    });
                }
            });
        }).resize();

    });
    /* open>hrshop_view e */

    /* open > list페이지 s */

    $(window).load(function () {
        $('.hierarchy .edu_area .img_box').find('img').each(function () {
            var imgClass3 = (this.height / this.width <= 1.2631) ? 'wide' : 'tall';
            $(this).addClass(imgClass3);
        });
    });
    /* open > list페이지 e */
    /* open > month_list s */
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    /* open > month_list e */
    
    /*링크 복사 s*/
    // var clipboard = new ClipboardJS('button.share');
    // clipboard.on('success', function (e) {
    //     alert("링크 복사가 완료되었습니다.")
    // });

    // clipboard.on('error', function (e) {
    //     alert("링크 복사 에러")
    // });
    /*링크 복사 e*/
    /*링크 복사 s*/
    var linkCopy = () => {

        var url = '';
        var textarea = document.createElement("textarea");
        document.body.appendChild(textarea);
        url = window.document.location.href;
        textarea.value = url;
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        alert("URL이 복사되었습니다.")
    }
    $(window).load(function () {
        $('button.linkCopy').on('click', function (event) {
            linkCopy();
        });
    });
    /*링크 복사 e*/
});