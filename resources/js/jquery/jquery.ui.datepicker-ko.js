/* Korean initialisation for the jQuery calendar extension. */
/* Written by DaeKwon Kang (ncrash.dk@gmail.com). */
jQuery(function($){

	$.datepicker.regional['ko'] = {
		closeText: '닫기',
		prevText: '이전달',
		nextText: '다음달',
		currentText: '오늘',

		showButtonPanel: true, //캘린더 하단(today, close)버튼
		closeText:"닫기",//캘린더 하단 닫기 버튼 이름

		showMonthAfterYear: true, //상단 년월 순서
		monthNames: ['1월(JAN)','2월(FEB)','3월(MAR)','4월(APR)','5월(MAY)','6월(JUN)',
		'7월(JUL)','8월(AUG)','9월(SEP)','10월(OCT)','11월(NOV)','12월(DEC)'],
		monthNamesShort: ['1월(JAN)','2월(FEB)','3월(MAR)','4월(APR)','5월(MAY)','6월(JUN)',
		'7월(JUL)','8월(AUG)','9월(SEP)','10월(OCT)','11월(NOV)','12월(DEC)'],               //달 셀랙트 박스 기능 시 표현
		dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],  //tooltip
		dayNamesShort: ['일','월','화','수','목','금','토'],
		dayNamesMin: ['일','월','화','수','목','금','토'],

		showWeek: false, //몇째주 표시
		weekHeader: '주',

		dateFormat: 'yymmdd',
		firstDay: 0,
		isRTL: false,

		showOtherMonths:true, //달력에 다른달 날짜 표시
		selectOtherMonths:false, //달력에 다른달 날짜 선택가능 여부

		changeMonth:false, //상단월 셀렉트 박스 여부
		changeYear:false,//상단년 셀랙트 박스 여부

		numberOfMonths:[1,1], //표시 달력수 행,열

		//minDate: -3,   //D,M,Y 가능 선택가능 날짜 범위 지정
		//maxDate:3,
		
		};
	$.datepicker.setDefaults($.datepicker.regional['ko']);
});
