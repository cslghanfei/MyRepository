$(function(){
	initEvents();
	//showadv();
});

function initEvents(){
	$("#change").hover(function(){
		$(this).css("text-decoration","underline");
	},function(){
		$(this).css("text-decoration","none");
	});

	$("#GuanZhu").hover(function(){
		$(this).css("background-color","rgb(255,255,255)");
		$("#gzpic").css("background-position","0px -542px");
		$("#gzcon").show();
	},function(){
		$(this).css("background-color","transparent");
		$("#gzpic").css("background-position","0px -536px");
		$("#gzcon").hide();
	});

	$("#gzc1").hover(function(){
		$(this).css("background-position","-130px 0px");
	},function(){
		$(this).css("background-position","0px 0px");
	});
	$("#gzc2").hover(function(){
		$(this).css("background-position","-130px -36px");
	},function(){
		$(this).css("background-position","0px -36px");
	});
	$("#gzc3").hover(function(){
		$(this).css("background-position","-130px -72px");
	},function(){
		$(this).css("background-position","0px -72px");
	});
	$("#gzc4").hover(function(){
		$(this).css("background-position","-130px -108px");
	},function(){
		$(this).css("background-position","0px -108px");
	});

	$("#DingYue").hover(function(){
		$(this).css("background-color","rgb(255,255,255)");
		$("#dypic").css("background-position","0px -542px");
		$("#dycon").show();
	},function(){
		$(this).css("background-color","transparent");
		$("#dypic").css("background-position","0px -536px");
		$("#dycon").hide();
	});

	$("#userlogin").hover(function(){
		$(this).css("text-decoration","underline");
	},function(){
		$(this).css("text-decoration","none");
	});
	$("#userzhuce").hover(function(){
		$(this).css("text-decoration","underline");
	},function(){
		$(this).css("text-decoration","none");
	});

	$("#hs1").hover(function(){
		$(this).css("text-decoration","underline");
	},function(){
		$(this).css("text-decoration","none");
	});
	$("#hs2").hover(function(){
		$(this).css("text-decoration","underline");
	},function(){
		$(this).css("text-decoration","none");
	});
	$("#hs3").hover(function(){
		$(this).css("text-decoration","underline");
	},function(){
		$(this).css("text-decoration","none");
	});
	$("#hs4").hover(function(){
		$(this).css("text-decoration","underline");
	},function(){
		$(this).css("text-decoration","none");
	});

	$("#btnmain_search").hover(function(){
		$(this).css("background-position","-920px -323px");
	},function(){
		$(this).css("background-position","-920px -273px");
	});

	$("#zuijin_tab").hover(function(){
		$("#zjtt_pic").css("background-position","0px -1116px");
		$("#zj_tab_t").css("background-color","rgb(255,255,255)");
		$("#zjtt").css("color","rgb(255, 102, 143)");	
		$("#zuijin_tab_content").show();
	},function(){
		$("#zjtt_pic").css("background-position","0px -1116px");
		$("#zj_tab_t").css("background-color","transparent");
		$("#zjtt").css("color","rgb(255, 255, 255)");
		$("#zuijin_tab_content").hide();
	});

	$("#shoppingCartNav").hover(function(){
		$("#sc_pic1").css("background-position","0px -1056px");
		$("#scn_t").css("background-color","rgb(255,255,255)");
		$("#sc_atxt").css("color","rgb(255, 102, 143)");	
		$("#sc_tab_content").show();
	},function(){
		$("#sc_pic1").css("background-position","0px -1086px");
		$("#scn_t").css("background-color","transparent");
		$("#sc_atxt").css("color","rgb(255, 255, 255)");
		$("#sc_tab_content").hide();
	});

	$("#md_txt").hover(function(){
		$(this).css("text-decoration","underline");
	},function(){
		$(this).css("text-decoration","none");
	});

	$("#btn1").click(function(){
		$(this).css("background-color","#000");
		$("#btn2").css("background-color","rgb(153, 153, 153)");
		$("#adv1").hide();
		$("#adv1").slideDown(300);
		$("#adv2").slideUp(300);
	});
	$("#btn2").click(function(){
		$(this).css("background-color","#000");
		$("#btn1").css("background-color","rgb(153, 153, 153)");
		$("#adv2").hide();
		$("#adv2").slideDown(300);
		$("#adv1").slideUp(300);
	});

	$("#t1a").hover(function(){
		$(this).css("background-color","rgb(11, 114, 164)");
		$(this).css("color","rgb(255, 255, 255)");
	},function(){
		$(this).css("background-color","transparent");
		$(this).css("color","rgb(255, 77, 136)");
	});
	$("#t2a").hover(function(){
		$(this).css("background-color","rgb(11, 114, 164)");
		$(this).css("color","rgb(255, 255, 255)");
	},function(){
		$(this).css("background-color","transparent");
		$(this).css("color","rgb(255, 77, 136)");
	});
	$("#t3a").hover(function(){
		$(this).css("background-color","rgb(11, 114, 164)");
		$(this).css("color","rgb(255, 255, 255)");
	},function(){
		$(this).css("background-color","transparent");
		$(this).css("color","rgb(11, 114, 164)");
	});
	$("#t4a").hover(function(){
		$(this).css("background-color","rgb(11, 114, 164)");
		$(this).css("color","rgb(255, 255, 255)");
	},function(){
		$(this).css("background-color","transparent");
		$(this).css("color","rgb(11, 114, 164)");
	});
	$("#t5a").hover(function(){
		$(this).css("background-color","rgb(11, 114, 164)");
		$(this).css("color","rgb(255, 255, 255)");
	},function(){
		$(this).css("background-color","transparent");
		$(this).css("color","rgb(255, 77, 136)");
	});
	$("#t6a").hover(function(){
		$(this).css("background-color","rgb(11, 114, 164)");
		$(this).css("color","rgb(255, 255, 255)");
	},function(){
		$(this).css("background-color","transparent");
		$(this).css("color","rgb(11, 114, 164)");
	});
	$("#t7a").hover(function(){
		$(this).css("background-color","rgb(11, 114, 164)");
		$(this).css("color","rgb(255, 255, 255)");
	},function(){
		$(this).css("background-color","transparent");
		$(this).css("color","rgb(11, 114, 164)");
	});
	$("#t8a").hover(function(){
		$(this).css("background-color","rgb(11, 114, 164)");
		$(this).css("color","rgb(255, 255, 255)");
	},function(){
		$(this).css("background-color","transparent");
		$(this).css("color","rgb(255, 77, 136)");
	});
	$("#t9a").hover(function(){
		$(this).css("background-color","rgb(11, 114, 164)");
		$(this).css("color","rgb(255, 255, 255)");
	},function(){
		$(this).css("background-color","transparent");
		$(this).css("color","rgb(11, 114, 164)");
	});
	$("#t10a").hover(function(){
		$(this).css("background-color","rgb(11, 114, 164)");
		$(this).css("color","rgb(255, 255, 255)");
	},function(){
		$(this).css("background-color","transparent");
		$(this).css("color","rgb(11, 114, 164)");
	});
	$("#t11a").hover(function(){
		$(this).css("background-color","rgb(11, 114, 164)");
		$(this).css("color","rgb(255, 255, 255)");
	},function(){
		$(this).css("background-color","transparent");
		$(this).css("color","rgb(11, 114, 164)");
	});

	$("#near_subway").hover(function(){
		$(this).css("background-color","rgb(11, 114, 164)");
		$("#nb_txt").css("color","rgb(255, 255, 255)");
	},function(){
		$(this).css("background-color","transparent");
		$("#nb_txt").css("color","rgb(255, 77, 136)");
	});


	$("#pricedrop").hover(function(){
		$("#pdcontent").slideDown();
	},function(){
		$("#pdcontent").slideUp();
	});

	$(".pdcontent_c").hover(function(){
		$(this).css("background-color","rgb(245, 245, 245)");
	},function(){
		$(this).css("background-color","transparent");
	});

	
	$(".border_inner").hover(function(){
		$(this).find("#production_information1").show();
	},function(){
		$(this).find("#production_information1").hide();
	});

	$(".border_inner").hover(function(){
		$(this).find("#production_information2").show();
	},function(){
		$(this).find("#production_information2").hide();
	});

	$(".page-cur").hover(function(){
		$(this).css("border","1px solid rgb(62, 113, 185)");
	},function(){
		$(this).css("border","1px solid rgb(229, 229, 229)");
	});

	$("#page-next").hover(function(){
		$(this).css("border","1px solid rgb(62, 113, 185)");
	},function(){
		$(this).css("border","1px solid rgb(229, 229, 229)");
	});

	$("#page-last").hover(function(){
		$(this).css("border","1px solid rgb(62, 113, 185)");
	},function(){
		$(this).css("border","1px solid rgb(229, 229, 229)");
	});

	$(".indent").hover(function(){
		$(this).css("color","rgb(11, 114, 164)");
	},function(){
		$(this).css("color","rgb(0, 0, 0)");
	});

	$(".information").hover(function(){
		$(this).css("color","rgb(11, 114, 164)");
	},function(){
		$(this).css("color","rgb(88, 88, 88)");
	});


	$("#cd_txt").hover(function(){
		$(this).css("text-decoration","underline");
	},function(){
		$(this).css("text-decoration","none");
	});

	$(".tj").hover(function(){
		$(this).css("text-decoration","underline");
	},function(){
		$(this).css("text-decoration","none");
	});

	$(".fnb").hover(function(){
		$(this).css("text-decoration","underline");
	},function(){
		$(this).css("text-decoration","none");
	});


};

function showadv(){
	var index=1;
	if (index==1) {
		$("#btn1").css("background-color","#000");
		$("#btn2").css("background-color","rgb(153, 153, 153)");
		$("#adv1").hide();
		$("#adv1").slideDown(1000);
		$("#adv2").slideUp(1000);
		index=index+1;
	};
	if (index==2) {
		$("#btn2").css("background-color","#000");
		$("#btn1").css("background-color","rgb(153, 153, 153)");
		$("#adv2").hide();
		$("#adv2").slideDown(1000);
		$("#adv1").slideUp(1000);
		index=index-1;
	};
	setInterval("showadv()",4000);
};

