

$(document).ready(function(){
	
	var ht = $("#engtext").height();
	var lh = ht + "px";
	$("#engtitle").css({"font-size":ht/3,"line-height":lh});
	
	$("#scr2").click(function(){
		$("#engtext span:not(#engtitle)").css({"font-size":"25px","opacity":"1"});
		$("#engblack").css("opacity","0.7");
		var to = 2042;
		$("#engtext").delay(1000).animate({scrollTop : to}, 25000, function(){
			$(this).animate({scrollTop: 0}, 1000)
		});
		$("#engcont video").delay(3500).fadeIn(400);
	});
	
	$("#scr2").click(function(){
		$("#engcont video").load();
	});
	
	$("#back").click(function(){
		$("#engtext span:not(#engtitle)").css({"font-size":"8px","opacity":"0"});
		$("#engblack").css("opacity","1");
		$("#engtext")
			.stop(true,true)
			.animate({scrollTop : 0}, 1000);
	});
	
})