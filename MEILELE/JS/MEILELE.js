$(function(){
	initEnvents();
})

function initEnvents(){
	$("#login").hover(function(){
		$(this).css("text-decoration","underline");
		$(this).css("color","#ff8400");
	},function(){
		$(this).css("text-decoration","none");
		$(this).css("color","rgb(81, 81, 81)");
	});

	$("#register").hover(function(){
		$(this).css("text-decoration","underline");
		$(this).css("color","#ff8400");
	},function(){
		$(this).css("text-decoration","none");
		$(this).css("color","rgb(81, 81, 81)");
	});

	$("#order_list").hover(function(){
		$(this).css("text-decoration","underline");
		$(this).css("color","#ff8400");
	},function(){
		$(this).css("text-decoration","none");
		$(this).css("color","rgb(81, 81, 81)");
	});

	$("#client").hover(function(){
		$(this).css("text-decoration","underline");
		$(this).css("color","#ff8400");
	},function(){
		$(this).css("text-decoration","none");
		$(this).css("color","rgb(81, 81, 81)");
	});

	$("#shoucang").hover(function(){
		$(this).css("text-decoration","underline");
		$(this).css("color","#ff8400");
	},function(){
		$(this).css("text-decoration","none");
		$(this).css("color","rgb(81, 81, 81)");
	});

	$("#hp_c").hover(function(){
		$("#head_help").css("background-position","0px -171px");
		$("#helpcenter").show();
	},function(){
		$("#head_help").css("background-position","0px -146px");
		$("#helpcenter").hide();
	});

	$("#hp1").hover(function(){
		$(this).css("color","rgb(201, 3, 59)");
	},function(){
		$(this).css("color","rgb(81, 81, 81)");
	});
	$("#hp2").hover(function(){
		$(this).css("color","rgb(201, 3, 59)");
	},function(){
		$(this).css("color","rgb(81, 81, 81)");
	});

	var txt;
	$("#search_txt").keyup(function(){
		txt=$(this).val();
		if (txt=="") {
			$(this).css("background-image",'url("Imgs/search_pic.gif")');
		}else{
			$(this).css("background-image","none");
		}
	});

	$("#s1").hover(function(){
		$(this).css("text-decoration","underline");
	},function(){
		$(this).css("text-decoration","none");
	});

	$("#s2").hover(function(){
		$(this).css("text-decoration","underline");
		$(this).css("color","rgb(255, 102, 0)");
	},function(){
		$(this).css("text-decoration","none");
		$(this).css("color","rgb(153, 153, 153)");
	});
	$("#s3").hover(function(){
		$(this).css("text-decoration","underline");
		$(this).css("color","rgb(255, 102, 0)");
	},function(){
		$(this).css("text-decoration","none");
		$(this).css("color","rgb(153, 153, 153)");
	});
	$("#s4").hover(function(){
		$(this).css("text-decoration","underline");
		$(this).css("color","rgb(255, 102, 0)");
	},function(){
		$(this).css("text-decoration","none");
		$(this).css("color","rgb(153, 153, 153)");
	});
	$("#s5").hover(function(){
		$(this).css("text-decoration","underline");
		$(this).css("color","rgb(255, 102, 0)");
	},function(){
		$(this).css("text-decoration","none");
		$(this).css("color","rgb(153, 153, 153)");
	});
	$("#s6").hover(function(){
		$(this).css("text-decoration","underline");
		$(this).css("color","rgb(255, 102, 0)");
	},function(){
		$(this).css("text-decoration","none");
		$(this).css("color","rgb(153, 153, 153)");
	});

	$("#cartLink").hover(function(){
		$("#carlink_notice").show();
	},function(){
		$("#carlink_notice").hide();
	});

	$("#jiaju").hover(function(){
		$(this).css("background-image","url('Imgs/bg2.png')");
		$(this).css("background-position","0px -71px");
	},function(){
		$(this).css("background-image","none");
	});
	$("#jiancai").hover(function(){
		$(this).css("background-image","url('Imgs/bg2.png')");
		$(this).css("background-position","0px -71px");
	},function(){
		$(this).css("background-image","none");
	});
	$("#jiafang").hover(function(){
		$(this).css("background-image","url('Imgs/bg2.png')");
		$(this).css("background-position","0px -71px");
	},function(){
		$(this).css("background-image","none");
	});
	$("#tehui").hover(function(){
		$(this).css("background-image","url('Imgs/bg2.png')");
		$(this).css("background-position","0px -71px");
	},function(){
		$(this).css("background-image","none");
	});
	$("#tiyan").hover(function(){
		$(this).css("background-image","url('Imgs/bg2.png')");
		$(this).css("background-position","0px -71px");
	},function(){
		$(this).css("background-image","none");
	});
	$("#zhuangxiu").hover(function(){
		$(this).css("background-image","url('Imgs/bg2.png')");
		$(this).css("background-position","0px -71px");
	},function(){
		$(this).css("background-image","none");
	});

	$("#menu1").hover(function(){
		$(this).css("color","rgb(255, 102, 0)");
	},function(){
		$(this).css("color","rgb(255, 255, 255)");
	});
	$("#menu2").hover(function(){
		$(this).css("color","rgb(255, 102, 0)");
	},function(){
		$(this).css("color","rgb(255, 255, 255)");
	});
	$("#menu3").hover(function(){
		$(this).css("color","rgb(255, 102, 0)");
	},function(){
		$(this).css("color","rgb(255, 255, 255)");
	});


	$("#list_jiaju").hover(function(){
		$(this).css("border-left-color","rgb(204, 46, 45)");
		$(this).find(".hideMap").show();
	},function(){
		$(this).css("border-left-color","rgb(255, 255, 255)");
		$(this).find(".hideMap").hide();
	});

	$("#list_jiancai").hover(function(){
		$(this).css("border-left-color","rgb(204, 46, 45)");
		$(this).find(".hideMap").show();
	},function(){
		$(this).css("border-left-color","rgb(255, 255, 255)");
		$(this).find(".hideMap").hide();
	});

	$("#list_jiashi").hover(function(){
		$(this).css("border-left-color","rgb(204, 46, 45)");
		$(this).find(".hideMap").show();
	},function(){
		$(this).css("border-left-color","rgb(255, 255, 255)");
		$(this).find(".hideMap").hide();
	});
}