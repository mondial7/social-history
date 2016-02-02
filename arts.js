
$(document).ready(function(){
	
	var ht = $("#artlock2").height();
	var lh = ht + "px";
	$("#artlock2 span").css({"font-size":ht/4,"line-height":lh});
	
	$("#scr6").click(function(){
		$("#artcont").fadeIn(1000,function(){
			var xh = $("#arttext").height();
			$("#arttext").animate({scrollTop : xh},4000,function(){
				$(this).animate({scrollTop: 0},700)
			});
		});
		$("#artlock2").fadeOut(800,function(){
			var hc = $("#artimagecont").height();
			var nw = hc * 7/4 ;
			$("#artimg").width(nw);
		});
	});
	
	$("#back").click(function(){
		$("#artlock2").fadeIn(1000);
		$("#artcont").fadeOut(800);
	});
	
})