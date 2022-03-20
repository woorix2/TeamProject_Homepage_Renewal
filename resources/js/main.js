$(document).ready(function () {
  // /* main vis slick s */
  var $slick = $('.main_vis #slick_vis');

  // /* main slick slider num s */    
  $slick.on('init', function (event, slick) {
    slideCount = slick.slideCount;
    setSlideCount();
    setCurrentSlideNumber(slick.currentSlide);
  });
  $slick.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    setCurrentSlideNumber(nextSlide);
  });

  function setSlideCount() {
    var $el = $('.main_vis').find('.page-total');
    if (slideCount < 10) {
      $el.text("0" + slideCount);
    } else {
      $el.text(slideCount);
    }
  }

  function setCurrentSlideNumber(currentSlide) {
    var $el = $('.main_vis').find('.page-current');
    var currentAdd = currentSlide + 1
    if (slideCount < 10) {
      $el.text("0" + currentAdd);
    } else {
      $el.text(currentAdd);
    }
  }
  // /* main slick slider num e */
  /* slick s */
  $slick.slick({
    slide: 'div', //슬라이드 되어야 할 태그 ex) div, li 
    infinite: true, //무한 반복 옵션	 
    slidesToShow: 1, // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
    speed: 500, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    fade: false,
    arrows: true, // 옆으로 이동하는 화살표 표시 여부
    dots: true, // 스크롤바 아래 점으로 페이지네이션 여부
    autoplay: false, // 자동 스크롤 사용 여부
    pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
    vertical: false, // 세로 방향 슬라이드 옵션
    prevArrow: $('.arw_wrap .slick-prev'),
    nextArrow: $('.arw_wrap .slick-next'),
    dotsClass: "slick_dots", //아래 나오는 페이지네이션(점) css class 지정
    draggable: true, //드래그 가능 여부 
  });
  /* slick e */
  /* main slick progress bar s */
  var time = 2;
  var $bar,
    $slick,
    isPause,
    tick,
    percentTime;


  $bar = $('.slider-progress .progress');

  // $('.main_vis #slick_vis .slick-track').on({
  //   mouseenter: function() {
  //     isPause = true;
  //   },
  //   mouseleave: function() {
  //     isPause = false;
  //   }
  // })

  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    isPause = false;
    tick = setInterval(interval, 20);
  }

  function interval() {
    if (isPause === false) {
      percentTime += 1 / (time + 0.1);
      $bar.css({
        width: percentTime + "%"
      });


      if (percentTime >= 100) {
        $slick.slick('slickNext');
        startProgressbar();
      }
    }
  }

  /* 리셋 프로그레스 바 펑션 */
  function resetProgressbar() {
    $bar.css({
      width: 0 + '%'
    });
    clearTimeout(tick);
  }
  /* 퍼즈 프로그레스 바 펑션 */
  function pauseProgressbar() {
    isPause = true;
  }
  /* 리스타트 프로그레스 바 펑션 */
  function restartProgressbar() {
    isPause = false;
  }
  startProgressbar();

  /* 퍼즈 버튼, 플레이 버튼 누를 때 */
  $('.main_vis .arw_wrap .slick-pause').on('click', function () {
    // $('.main_vis #slick_vis').slick('slickPause');
    $(".arw_wrap .slick-pause").hide();
    $(".arw_wrap .slick-play").show();
    pauseProgressbar();
  });

  $('.main_vis .arw_wrap .slick-play').on('click', function () {
    // $('.main_vis #slick_vis').slick('slickPlay');
    $(".arw_wrap .slick-play").hide();
    $(".arw_wrap .slick-pause").show();
    restartProgressbar();
  });
  /* 좌우 버튼 클릭 시, 퍼즈일 때 프로그레스바 퍼즈 / 퍼즈 아닐 때 초기화+시작 */
  $('.arw_wrap .slick-next').on('click', function () {
    if (isPause === true) {
      pauseProgressbar();
    } else {
      resetProgressbar();
      startProgressbar();
    }
  })

  /* main slick progress bar e */

  // /* main vis slick e */


  /*sec1 s*/
  /* tab_sec s */
  /* seletbox처럼 바뀌는 탭 s */

  var sec1_menu_tit = $('.sec1 .sel_tab li.active a').text();
  $(".sec1 .sel_tab").prepend("<p class='lnb_title'><span>" + sec1_menu_tit + "</span></p>");

  var sec2_menu_tit = $('.sec2 .sel_tab li.active a').text();
  $(".sec2 .sel_tab").prepend("<p class='lnb_title'><span>" + sec2_menu_tit + "</span></p>");

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
    } else {
      $('.sel_tab').removeClass('sel_active');
      $('.sel_tab .ul_box').stop().show();
      $('.sel_tab .ul_box').css('height', 'auto');
    }
  });
  /* seletbox처럼 바뀌는 탭 e */

  $('.sec1 .tab_sec').hide();
  $('.sec1 #tab1').show();

  $(document).on('click', '.sec1 .sel_tab a', function (e) {
    var activeTab = $(this).attr("data-tab");
    e.preventDefault();
    $('.sec1 .sel_tab a').removeClass('on');
    $('.sec1 .sel_tab li').removeClass('active');
    $(this).addClass('on');
    $(this).parents('li').addClass('active');
    $('html, body, div').clearQueue();
    console.log(activeTab);

    if ($('.sec1 .sel_tab a').hasClass('on')) {

      $('.sec1 .tab_sec').hide();
      $(".sec1 #" + activeTab).fadeIn();
      $(".sec1 #" + activeTab).addClass("wow fadeInDown animated");
      $(".sec1 #" + activeTab).attr("style", "visibility: visible; animation-name: fadeInDown;");
    };
  });
  /* tab_sec e */

  $(window).load(function () {
    $('.sec1 .edu_area .img_box').find('img').each(function () {
      var imgClass3 = (this.height / this.width <= 1.2631) ? 'wide' : 'tall';
      $(this).addClass(imgClass3);
    });
  });

  /*sec1 e*/

  /*sec2 s*/
  /* tab_sec s */

  $('.sec2 .tab_sec').hide();
  $('.sec2 #tab1').show();

  $(document).on('click', '.sec2 .sel_tab a', function (e) {
    var activeTab = $(this).attr("data-tab");
    e.preventDefault();
    $('.sec2 .sel_tab a').removeClass('on');
    $('.sec2 .sel_tab li').removeClass('active');
    $(this).addClass('on');
    $(this).parents('li').addClass('active');
    $('html, body, div').clearQueue();
    console.log(activeTab);

    if ($('.sec2 .sel_tab a').hasClass('on')) {

      $('.sec2 .tab_sec').hide();
      $(".sec2 #" + activeTab).fadeIn();
      $(".sec2 #" + activeTab).addClass("wow fadeInDown animated");
      $(".sec2 #" + activeTab).attr("style", "visibility: visible; animation-name: fadeInDown;");
    };
  });
  /* tab_sec e */

  $(window).load(function () {
    $('.sec2 .edu_area .img_box').find('img').each(function () {
      var imgClass4 = (this.height / this.width <= 0.64766) ? 'wide' : 'tall';
      $(this).addClass(imgClass4);
    });
  });

  /*sec2 e*/
  /*sec3 s*/
  // $(window).load(function () {
  //   parscroll(".parallax-item")
  // });
  /*sec3 e*/
  /*sec5 s*/
  $('.sec5 #slick1').slick({
    slide: 'div', //슬라이드 되어야 할 태그 ex) div, li 
    infinite: true, //무한 반복 옵션	 
    slidesToShow: 3, // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
    speed: 300, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows: true, // 옆으로 이동하는 화살표 표시 여부
    dots: true, // 스크롤바 아래 점으로 페이지네이션 여부
    autoplay: true, // 자동 스크롤 사용 여부
    autoplaySpeed: 2000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
    vertical: false, // 세로 방향 슬라이드 옵션
    prevArrow: $('.sec5 .arw_wrap .slick-prev'),
    nextArrow: $('.sec5 .arw_wrap .slick-next'),
    dotsClass: "slick-dots", //아래 나오는 페이지네이션(점) css class 지정
    draggable: true, //드래그 가능 여부 
    appendDots: $('.sec5 .arw_wrap'),
    responsive: [ // 반응형 웹 구현 옵션
        {
            breakpoint: 769, //화면 사이즈 768px
            settings: {
                //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                slidesToShow: 2,
                slidesToScroll: 2,
                autoplaySpeed: 4000,
            }
        },
        {
            breakpoint: 401, //화면 사이즈 400px
            settings: {
                //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

});

  /*main sec1 image*/
  
  $(window).load(function () {
  $('.sec5 #slick1').find('img').each(function () {
      var imgClass3 = (this.height / this.width <= 0.64766) ? 'wide' : 'tall';
      $(this).addClass(imgClass3);
  });
  var twHeight = $('.sec5 #slick1 .slk').outerHeight(); 
    $('.sec5 .tit_wrap').height(twHeight);
  });

  $(window).resize(function(){
    var twHeight = $('.sec5 #slick1 .slk').outerHeight(); 
    $('.sec5 .tit_wrap').height(twHeight);
  });
  /*sec5 e*/
});