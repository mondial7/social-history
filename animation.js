$(document).ready(function(){
	
	$("#initio").on("click",function(){
		$(this).hide();
		$(".scr").removeClass("notactive");
	});
	
	$(".scr").click(function(){
		$("#back").css("display","block");
		$("#main").children("div").removeClass("active");
		$(this).addClass("active");
		$("#main").children("div:not(.active)").addClass("notactive");
	});
	
	$("#back").click(function(){
		$(this).css("display","none");
		$(".active").removeClass("active");
		$(".lock").show();
		$("#main").children("div").removeClass("notactive");
	});
	
	$("#scr4").click(function(){
		$("#scr4in").show();
	});

	$(".scr").click(function(){
		$(this).find(".lock").hide();
	});
	
});