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

    /* 스크롤 시 클래스 추가 s */
    $(window).scroll(function() {
        if ($(window).scrollTop() > 1) {
            $('.header').addClass('fixed');
        } else if ($(window).scrollTop() < 1) {
            $('.header').removeClass('fixed');
        };
    });
    /* 스크롤 시 클래스 추가 e */
    //전체메뉴 호버 시 gnb id변경
    $(window).load(function () {
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
    });
    
    $(window).load(function () {

        $('header').addClass('load');
        
    $('.header .head').on('mouseover', function () {
        $('.header').addClass('hover');
    });
    $('.header .head').on('mouseleave', function () {
        $('.header').removeClass('hover');
    });

    
    // search_slick
    $('.header .search_slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        arrows: false,
        vertical: true,
        dots: false,
        
    });
    var srchInput = $('.search_div input')
    $(srchInput).focusin(function () {
        $('.header .search_slick').hide();
        
    });
    $('.search_div input').focusout(function () {
    if(srchInput.val()==false){
        $('.header .search_slick').show();
    }else{
        $('.header .search_slick').hide();
    }
    });  
      
    });


    /* header e */
    /* footer s */
    $(window).load(function () {
          //layer popup
          $('.t_inform a.pop').click(function (e) {
            e.preventDefault();
            var cls = $(this).attr('data-pop');
            $("#" + cls).fadeIn();
    
            $('body').addClass('noneScroll');
        });
    
        $('.f_pu_wrap .close').click(function () {
            $('.f_pu_wrap').fadeOut();
            $('body').removeClass('noneScroll');
        });
    
         // // top_btn
        // 부드럽게 스크롤
            $('.top_btn').click('click', function (event) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: 0
                }, 300);
            });
    
        
    
     
        /* footer e */
            // rolling_banner
            $('.rolling_banner .f_banner').slick({
                infinite: true,
                slidesToShow: 5,
                slidesToScroll: 1,
                autoplay: true,
                speed: 500,
                autoplaySpeed: 3000,
                centerMargin: '40px',
                responsive: [{
                        breakpoint: 900,
                        settings: {
                            slidesToShow: 4,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 2,
                        }
                    }
                ]
            });
            });
    /* footer e */

});

