$(document).ready(function(){
	
	$("#scr1").click(function(event){
		$("#socialback").hide();
		$(this).off(event);
	});
	$(".socialbox").click(function(){
		var im = $(this).find("img").attr("src");
		$(this).css("opacity","0.6");
		$(".socialfocus").fadeIn(300);
		$("#socialback").show();
		$(".socialfocus img").attr("src",im);
		var txt = $(this).find("span").text();
		$(".socialfocus p").empty().append(txt);
	});
	$("#socialback").click(function(){
		$(this).hide();
		$(".socialfocus").fadeOut(200);
		$(".socialbox").css("opacity","1");
	});	
});