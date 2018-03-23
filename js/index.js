$(document).ready(function(){
	$("#about").hide();
	$("#hello").click(function(){
		$("#home").hide();
		$("#about").show();
	});
	$("#hi").click(function(){
		$("#about").hide();
		$("#home").show();
	});
	$("#about").hide();
	$("#step1").click(function(){
		$("#home").hide();
		$("#about").show();
	});
	$("#about").hide();
	$("#step2").click(function(){
		$("#home").hide();
		$("#about").show();
	});
	$("#about").hide();
	$("#step3").click(function(){
		$("#home").hide();
		$("#about").show();
	});
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	$("#about").hide();
	$("#qwerty").click(function(){
		$("#home").hide();
		$("#about").show();
	});
	
	$("#about").hide();
	$("#logo").click(function(){
		$("#home").show();
		$("#about").hide();
	});
});


