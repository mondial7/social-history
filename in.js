$(document).ready(function(){
	
	$("#scr3").click(function(){
		$("#incontx").fadeIn(500);
	});
	
	$("#back").click(function(){
		$("#incontx").fadeOut(1000);
	})
	
	$(".intapp").click(function(){
		$("#indet").animate({
			width : 300
		},200,function(){
			$(this).animate({width : 500},200)
		});
		if($(this).attr("id") == "inlast"){
			$(".intapp").height(400);
		} else {
			$(this).height(0);
		}
	});
		
});