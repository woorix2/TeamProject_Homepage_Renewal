$(document).ready(function () {
    /* header s */

    /******************** common s ********************/

    // mobile gnb click
    $(document).on('click', '.ham_btn', function () {
        $(this).toggleClass('active');
        $('html, body').toggleClass('noneScroll');
        if ($(this).hasClass('active')) {
            $('.mobile_menu .ham_bg2').stop().animate({
                left: 0
            }, 500);
            $('.mobile_menu .gnb').stop().animate({
                top: 0
            }, 500);
            $('.mobile_menu').stop().fadeIn();
        } else {
            $('.mobile_menu .ham_bg2').stop().animate({
                left: '-40%'
            }, 500);
            $('.mobile_menu .gnb').stop().animate({
                top: '-80%'
            }, 500);
            $('.mobile_menu').stop().fadeOut();
        }


        $('.mobile_menu .close').on('click', function () {
            $('.ham_btn').trigger('click');
        })

        //전체 메뉴 시 컨텐츠 쪽 스크롤 방지
    });



    $('.gnb_wrap').hover(function () {
        $('.header').toggleClass('hover');
    });


    $(window).resize(function () {

        var swidth = (window.innerWidth - $(window).width());

        if ($(window).width() <= 500 - swidth) {
            $('.mobile_menu').addClass('mobileOn');
            $('.mobile_menu .gnb > ul > li > .two_depth').hide();

            $(document).on('click', '.ham_btn.active', function () {
                $('.mobile_menu.mobileOn .gnb > ul > li > .two_depth').slideUp();
                $('.mobileOn .gnb > ul > li > a').removeClass('open');
            });


        } else if ($(window).width() > 500 - swidth) {
            $('.mobile_menu').removeClass('mobileOn');
            $('.mobile_menu .gnb > ul > li > .two_depth').show();
            $('.mobile_menu .gnb > ul > li > a').removeClass('open');

        }


    }).resize();

    $(document).on('click', '.mobileOn .gnb > ul > li > a', function (e) {
        /*2depth 존재 유무로 a태그 이동 막기*/
        if ($(this).next('ul').length) {
            e.preventDefault();
        }

        $('.mobileOn .gnb > ul > li > a').removeClass('open');
        $(this).addClass('open');
        if ($(this).hasClass('open')) {
            $('.mobileOn .gnb > ul > li > a').siblings().stop().slideUp();
            $(this).siblings().stop().slideDown();
        }
    });


    $(document).on('click', '.mobileOn .gnb > ul > li > a.open', function () {
        $(this).siblings().slideUp();
        $(this).removeClass('open');
    });

    // hammenu e



    //전체메뉴 호버 시 gnb id변경
    
    var target = $('.mobile_menu .gnb > ul > li');
    $(target).addClass(function (index) {
        return 'linum_' + index;
    });
    // $(target).on('click mouseover', function () {
    //     console.log('hover');
    // });
    // $(target).on('click mouseover', function () {
    //     var indexNum = $(this).index();
    //     var liClass = $(this).attr('class');
    //     /* $('.mobile_menu .ham_bg2').prepend("<p>새로운 목록</p>"); */
    //     $('.mobile_menu .ham_bg2').attr('id', liClass);
    //     $('.mobile_menu .ham_bg2').css({backgroundImage:"url(img/ham_bg"+indexNum+".jpg)"})
    // });

    // $('.mobile_menu .gnb > ul > li').addClass(function (index) {
    //     return 'linum_' + index;
    // });
    $('.mobile_menu .gnb > ul > li').on('click', function () {
        var liClass = $(this).attr('class');
        $('.mobile_menu .ham_bg2').attr('id', liClass);
        console.log('click')
    });

    $('.mobile_menu .gnb > ul > li').hover(function () {
        var liClass = $(this).attr('class');
        $('.mobile_menu .ham_bg2').attr('id', liClass);
        console.log('hover')
    });


    



    $(window).load(function () {

        $('header').addClass('load');
    });

    /* header e */

    /* footer s */
    
        //layer popup
        $('.t_inform a').click(function (e) {
            e.preventDefault();
            var cls = $(this).attr('class');
            $("#" + cls).fadeIn();

            $('body').addClass('noneScroll');
        });

        $('.f_pu_wrap .close').click(function () {
            $('.f_pu_wrap').fadeOut();
            $('body').removeClass('noneScroll');
        });


    // top_btn
    $('.top_btn').click('click', function (event) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: 0
        }, 300);
    });

    /* footer e */
});