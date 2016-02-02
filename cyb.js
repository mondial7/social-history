
$(document).ready(function(){
	
	var ht = $("#pridown").height();
	var lh = ht + "px";
	$("#cybdown").css({"font-size":ht/4,"line-height":lh});
	
	$("#scr5").click(function(){
		$("#cybdown").fadeOut(500);
	});
	
	$("#cb3 video").click(function(){
		$("#cb3 video").load();
	});
	
	$("#back").click(function(){
		$("#cybdown").fadeIn(1000);
	})
	
});