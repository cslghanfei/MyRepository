$(function(){
	initEvents();
});
var picnum=0;
var index=0;
function initEvents(){
	$("#queuedcarousel-nav-right").click(function(){
		if (index<7) {
			picnum=picnum-943;
			index=index+1;
			$(".panel-pane-node").css("left",picnum+"px");
		};
	});

	$("#queuedcarousel-nav-left").click(function(){
		if (index>0) {
			picnum=picnum+943;
			index=index-1;
			$(".panel-pane-node").css("left",picnum+"px");
		};
	});



	$("#block-locale-0").hover(function(){
		$("#choose_language").show();
	},function(){
		$("#choose_language").hide();
	});

	$("#en-AU").click(function(){
		$("#current-language").css("background-position","0px -276px");
	});
	$("#en-CA").click(function(){
		$("#current-language").css("background-position","0px -805px");
	});
	$("#en-CZ").click(function(){
		$("#current-language").css("background-position","0px -1242px");
	});
	$("#de-DE").click(function(){
		$("#current-language").css("background-position","0px -1265px");
	});
	$("#hu-HU").click(function(){
		$("#current-language").css("background-position","0px -2300px");
	});
	$("#it-IT").click(function(){
		$("#current-language").css("background-position","0px -2507px");
	});

	$("#ja-JP").click(function(){
		$("#current-language").css("background-position","0px -2576px");
	});
	$("#en-MY").click(function(){
		$("#current-language").css("background-position","0px -3565px");
	});
	$("#es-MX").click(function(){
		$("#current-language").css("background-position","0px -3542px");
	});
	$("#nb-NO").click(function(){
		$("#current-language").css("background-position","0px -3772px");
	});
	$("#pt-PT").click(function(){
		$("#current-language").css("background-position","0px -4163px");
	});
	$("#ru-RU").click(function(){
		$("#current-language").css("background-position","0px -4324px");
	});

	$("#en-SG").click(function(){
		$("#current-language").css("background-position","0px -4508px");
	});
	$("#es-ES").click(function(){
		$("#current-language").css("background-position","0px -1541px");
	});
	$("#en-UK").click(function(){
		$("#current-language").css("background-position","0px -5244px");
	});
	$("#en-last").click(function(){
		$("#current-language").css("background-position","0px -5290px");
	});


	$("#ll_div").hover(function(){
		$("#login-popup").show();
	},function(){
		$("#login-popup").hide();
	});

	$(".lp_button").hover(function(){
		$(this).css("background-position","-80px 0px");
		$(this).css("color","rgb(41, 40, 37)");
	},function(){
		$(this).css("background-position","0px 0px");
		$(this).css("color","rgb(251, 251, 249)");
	});

	$("#videos").hover(function(){
		$("#vd_menu").show();
	},function(){
		$("#vd_menu").hide();
	});

	$(".menu_astyle").hover(function(){
		$(this).css("color","rgb(135, 180, 181)");
	},function(){
		$(this).css("color","rgb(255, 255, 255)");
	});

	$("#photos").hover(function(){
		$("#ph_menu").show();
	},function(){
		$("#ph_menu").hide();
	});

	$(".quicktabs_tabs_astyle").hover(function(){
		$(this).css("text-decoration","underline");
	},function(){
		$(this).css("text-decoration","none");
	});

	$(".links_astyle").hover(function(){
		$(this).css("text-decoration","none");
	},function(){
		$(this).css("text-decoration","underline");
	});

	$(".pager-item").hover(function(){
		$(this).css("background-position","0px 0px");
		$(this).css("color","rgb(41, 40, 37)");
	},function(){
		$(this).css("background-position","-73px 0px");
		$(this).css("color","rgb(196, 193, 178)");
	});

	$("#pager-next").hover(function(){
		$(this).css("background-position","-95px 0px");
		$(this).css("color","rgb(41, 40, 37)");
	},function(){
		$(this).css("background-position","0px 0px");
		$(this).css("color","rgb(196, 193, 178)");
	});

	$("#pager-last").hover(function(){
		$(this).css("background-position","-95px 0px");
		$(this).css("color","rgb(41, 40, 37)");
	},function(){
		$(this).css("background-position","0px 0px");
		$(this).css("color","rgb(196, 193, 178)");
	});
};