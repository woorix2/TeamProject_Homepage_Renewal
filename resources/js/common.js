$(window).on('load', function () {

    new WOW().init();
});
$(document).ready(function () {

    /**사이트 작업을 완료하신 후에는 꼭 $(window).load(function()이나 $(window).resize(function () 안의 내용을 하나로 묶어서 정리해 주세요. load나 resize는 한번만 써줘야 합니다. 묶으시면서 각각의 스크립트를 주석으로 구분해서 정리해주세요.**/


    /******************** common s ********************/
    $('.wow').addClass('animated');
    // wow


    // faq 게시판 슬라이드
    $('table.faq .list_tit').parent().next().addClass('asw_td').hide();
    $('table.faq .list_tit').parent().next().children().addClass('asw_div');
    $('table.faq .list_tit').click(function () {
        $(this).parent().next('.asw_td').slideToggle(1);
    });

    $(window).resize(function () {
        var thNone = $('.non_mobile').length;
        if ($(window).width() <= 1200) {
            // td 동적 colspan
            $("table .empty_list_td").attr("colspan", $("table th").length - thNone);
        } else {
            $("table .empty_list_td").attr("colspan", $("table th").length);
        }
    }).resize();


    //이미지보드1(board_id=image1), 이미지보드2(board_id=image2)에 적용된 스크립트
    //이미지를 감싸는 부모 영역 비율에 비교해 이미지의 wide, tall을 구분해 주는 스크립트
    //아래 숫자는 부모 영역의 패딩 바텀 값과 비율이 같아야 함
    //ex. padding-bottom:75% = 0.75 (4:3비율) / padding-bottom:56.25% = 0.5625 (16:9비율)
    $(window).load(function () {
        $('.ImgCover .img, .ImgContain .img').find('img').each(function () {
            var imgClass2 = (this.height / this.width <= 0.75) ? 'wide' : 'tall';
            $(this).addClass(imgClass2);
        });
    });









    //-------------이미지 드랍다운 js : s -----------//
    //GNB가 이미지 드랍다운일 때, hover 시 header 제어
    /**********************
    $('.header > .head > .h_inner .gnb > ul > li').mouseover(function () {
        $('.header .head').addClass('on');
        $(this).children().addClass('on');

    });
    $('.header > .head > .h_inner .gnb > ul > li').mouseleave(function () {
        $('.header .head').removeClass('on');
        $(this).children().removeClass('on');
    });


    //GNB가 이미지 드랍다운일 때, 드롭다운 hover 효과
    var dpMore = $('.header > .head > .h_inner .gnb > ul > li .depth_wrap .img_wrap .txt_wrap .dp_more');
    var textWrap = $('.header > .head > .h_inner .gnb > ul > li .depth_wrap .img_wrap .txt_wrap');

    textWrap.hover(function () {
        $(this).toggleClass('hover');
        $(this).siblings('.img').toggleClass('hover');
    });
    ***********************/
    //-------------이미지 드랍다운 js : e -----------//


    //    // mobile gnb click
    //    $(document).on('click', '.ham_btn', function () {
    //        $(this).addClass('active');
    //        $('.mobile_menu').slideDown();
    //        $('body').addClass('overflow');
    //        //$('.dim_layer').slideDown();
    //    });
    //
    //    $(document).on('click', '.ham_btn.active', function () {
    //        $(this).removeClass('active');
    //        $('.mobile_menu').stop().slideUp();
    //        $('body').removeClass('overflow');
    //        //$('.dim_layer').stop().slideUp();
    //    });
    //
    //
    //    // hammenu s
    //    $(window).resize(function () {
    //        //****** pc, mobile 둘 다 있는 경우 *****//
    //
    //        // $('.mobile_menu').removeClass('open');
    //        $('body').removeClass('overflow');
    //        $('.mobile_menu .gnb > ul > li > a').removeClass('open');
    //        if ($(window).width() <= 768) {
    //            // 768일 이하일 때
    //            $('.mobile_menu').addClass('mobileOn');
    //
    //            //***** kakao inapp broswer bug - 201105 ej *****//
    //            // 카카오톡 인앱브라우저에서 스크롤 내리면 리사이즈되면서 목록 닫힘 현상이 있음. 카카오톡이 아닌 경우를 체크해서 닫을 수 있게 작업
    //
    //            // 768이하 & 카카오 체크
    //            var userAgent = window.navigator.userAgent;
    //            var isKakao = userAgent.indexOf('KAKAOTALK');
    //            //var isChrome = userAgent.indexOf('Chrome');
    //            //var isChromeMobile = userAgent.indexOf('CriOS');
    //            //var isSamsungBrowser = userAgent.indexOf('SamsungBrowser');
    //            //var isWindows = userAgent.indexOf('Windows NT');
    //            //var isEdge = userAgent.indexOf('Edge');
    //            //var isIE = userAgent.indexOf('Trident');
    //            if (isKakao <= -1) {
    //                // kakao InAppBrowser가 아닌 경우
    //                // ex) kakao InAppBrowser일 경우 => if(isKakao > -1)
    //                $('.mobile_menu .gnb > ul > li > ul').hide();
    //                $('.mobile_menu .gnb > ul > li > a.open').removeClass('open');
    //                $('.ham_btn').removeClass('active');
    //            }
    //
    //        } else {
    //            //pc일 때
    //            //$('.ham_btn').hide();
    //            $('.mobile_menu').removeClass('mobileOn');
    //            $('.mobile_menu .gnb > ul > li > ul').show(); // pc
    //
    //
    //            //****** pc, mobile 둘 다 있는 경우 (필요 없으면 주석처리) *****//
    //            $('.mobile_menu').hide();
    //
    //
    //
    //
    //        }
    //    }).resize();
    //
    //
    //    $(document).on('click', '.mobileOn .gnb > ul > li > a', function (e) {
    //        if ($(this).next('ul').length) {
    //            e.preventDefault();
    //        }
    //        $(this).siblings().slideDown();
    //        $(this).addClass('open');
    //    });
    //
    //
    //    $(document).on('click', '.mobileOn .gnb > ul > li > a.open', function () {
    //        $(this).siblings().slideUp();
    //        $(this).removeClass('open');
    //    })
    //
    //    // hammenu e


    // 부드럽게 스크롤
    $('.top_btn').click('click', function (event) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: 0
        }, 300);
    });







    /* sub lnb s */

    // 현재 on 메뉴명 생성
    var menu_tit = $('.lnb_menu li.on a span').text();
    $(".lnb_menu").prepend("<p class='lnb_title'><span>" + menu_tit + "</span></p>");

    $(document).on('click', '.lnb_menu .lnb_title', function (e) {
        //$(this).attr({'href':'#none'});
        $('.lnb_menu ul').slideDown();
        $(this).addClass('add');
        $(".lnb_menu .more_btn").addClass('more_add');
    });

    $(document).on('click', '.lnb_menu .lnb_title.add', function (e) {
        e.preventDefault();
        $('.lnb_menu ul').slideUp();
        $(this).removeClass('add');
        $(".lnb_menu .more_btn").removeClass('more_add');
    });

    /* sub lnb e */





    /* flicking */
    var scrollStartPos = 0;
    $('.flicking').each(function (index, element) {
        $(this).wrap('<div id="f_wrapper_' + index + '" class="f_wrapper"></div>').wrap('<div class="f_wrapper_inner"></div>').wrap('<div class="f_scroller"></div>').before('<p class="touch">터치해서 좌우로 움직이세요</p>');
    });






    /******************** common e ********************/


    //메인 첫 로드 시 이미지 겹침현상 - 첫번째 비쥬얼만 보이도록
    $("#main_vis .vis .vis_bg").hide();
    $("#main_vis .vis1").children(".vis_bg").show();

    $(window).on('load', function () {
        $("#main_vis .vis .vis_bg").show();
    });




    //faq 자주 묻는 질문 아코디언    
    // $('.faq .faq_q').click(function () {
    //     $(this).next('.faq_a').slideToggle();
    //     $(this).parent().toggleClass('on');
    //     $(this).parent().siblings('.faq_box').children('.faq_a').slideUp();
    //     $(this).parent().parent().parent().siblings('.faq .sec').children('.faq_wrap').children('.faq_box').children('.faq_a').slideUp();
    // });
    //faq2
    $('.faq .faq_box').click(function () {
        $(this).children().next('.faq_a').slideToggle();
        $(this).toggleClass('on');
        $(this).siblings('.faq_box').children('.faq_a').slideUp();
        $(this).parent().parent().siblings('.faq .sec').children('.faq_wrap').children('.faq_box').children('.faq_a').slideUp();

        if ($('.faq_box').hasClass('on')) {
            $('.faq_box').removeClass('on');
            $(this).toggleClass('on');
        }
    });

    

    console.log('common.js');
});