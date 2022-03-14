$(document).ready(function () {
    // /* main vis slick s */
    var $slick = $('.main_vis #slick_vis');
    
    // /* main slick slider num s */    
    $slick.on('init', function(event, slick){
      slideCount = slick.slideCount;
      setSlideCount();
      setCurrentSlideNumber(slick.currentSlide);
    });    
    $slick.on('beforeChange', function(event, slick, currentSlide, nextSlide){
      setCurrentSlideNumber(nextSlide);
    });    
    function setSlideCount() {
        var $el = $('.main_vis').find('.page-total');
        if(slideCount < 10){
            $el.text("0" + slideCount);
        }else{
            $el.text(slideCount);
        }
    }    
    function setCurrentSlideNumber(currentSlide) {
      var $el = $('.main_vis').find('.page-current');
      var currentAdd = currentSlide + 1
        if(slideCount < 10){
            $el.text("0" + currentAdd);
        }else{
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
      if(isPause === false) {
        percentTime += 1 / (time+0.1);
        $bar.css({
          width: percentTime+"%"
        });
        
        
        if(percentTime >= 100)
          {
            $slick.slick('slickNext');
            startProgressbar();
          }
      }
    }

    /* 리셋 프로그레스 바 펑션 */
    function resetProgressbar() {
      $bar.css({
       width: 0+'%' 
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
    $('.main_vis .arw_wrap .slick-pause').on('click', function() {
        // $('.main_vis #slick_vis').slick('slickPause');
        $(".arw_wrap .slick-pause").hide();
        $(".arw_wrap .slick-play").show();
        pauseProgressbar();
    });

    $('.main_vis .arw_wrap .slick-play').on('click', function() {
        // $('.main_vis #slick_vis').slick('slickPlay');
        $(".arw_wrap .slick-play").hide();
        $(".arw_wrap .slick-pause").show();
        restartProgressbar();
    });
    /* 좌우 버튼 클릭 시, 퍼즈일 때 프로그레스바 퍼즈 / 퍼즈 아닐 때 초기화+시작 */
    $('.arw_wrap .slick-next').on('click', function() {
      if(isPause === true){
        pauseProgressbar();
      }else{
        resetProgressbar();
        startProgressbar();
      }
    })

    /* main slick progress bar e */
    // /* main vis slick e */
});