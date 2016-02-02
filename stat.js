$(document).ready(function(){
	
	var ht = $("#pridown").height();
	var lh = ht + "px";
	$("#pridown").css({"font-size":ht/4,"line-height":lh});
	
	$("#scr7").click(function(){
		$("#pridown").fadeOut(500);
	});
	
	$("#back").click(function(){
		$("#pridown").fadeIn(1000);
	});
	
	$("#pris1").click(function(){
		$("#pris1").animate({left:"100%"},700);
		$("#pris2").animate({left:"0"},700);
	});
	
	$("#pris2").click(function(){
		$("#pris1").animate({left:"0"},700);
		$("#pris2").animate({left:"100%"},700);
	});
	
});