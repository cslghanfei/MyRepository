$(function(){
	initEvents();
});

function initEvents(){
	$(".hc_astyle").hover(function(){
		$(this).css("color","rgb(255, 234, 6)");
		$(this).css("text-decoration","underline");
	},function(){
		$(this).css("color","rgb(219, 192, 155)");
		$(this).css("text-decoration","none");
	});

	$(".rh_pic").hover(function(){
		$("#role-head a").css("opacity","0.5");
		$(this).css("opacity","1");
		var num = $(this).attr("numflag");
		$("#arrow").css("left",(num*49)+245+"px");
		if (num==0) {
			$(".name").text("弓箭手");
		};
		if (num==1) {
			$(".name").text("战士");
		};
		if (num==2) {
			$(".name").text("牧师");
		};
		if (num==3) {
			$(".name").text("魔法师");
		};
		if (num==4) {
			$(".name").text("学者");
		};
		if (num==5) {
			$(".name").text("舞娘");
		};
	},function(){
		$(this).css("opacity","1");
	});

	$(".pm_pic").hover(function(){
		$(this).css("opacity","1");
	},function(){
		$(this).css("opacity","0.5");
	});

	$(".pm_pic").click(function(){
		$("#mengban").show();
		var pnum=$(this).attr("pnum");
		if (pnum==1) {
			$("#bigpic").css("background-image",'url("Imgs/1.jpg")');
		};
		if (pnum==2) {
			$("#bigpic").css("background-image",'url("Imgs/2.jpg")');
		};
		if (pnum==3) {
			$("#bigpic").css("background-image",'url("Imgs/3.jpg")');
		};
		if (pnum=="zs1") {
			$("#bigpic").css("background-image",'url("Imgs/zs1.jpg")');
		};
		if (pnum=="zs2") {
			$("#bigpic").css("background-image",'url("Imgs/zs2.jpg")');
		};
		if (pnum=="zs3") {
			$("#bigpic").css("background-image",'url("Imgs/zs3.jpg")');
		};
		if (pnum=="ms1") {
			$("#bigpic").css("background-image",'url("Imgs/ms1.jpg")');
		};
		if (pnum=="ms2") {
			$("#bigpic").css("background-image",'url("Imgs/ms2.jpg")');
		};
		if (pnum=="ms3") {
			$("#bigpic").css("background-image",'url("Imgs/ms3.jpg")');
		};
		if (pnum=="mfs1") {
			$("#bigpic").css("background-image",'url("Imgs/mfs1.jpg")');
		};
		if (pnum=="mfs2") {
			$("#bigpic").css("background-image",'url("Imgs/mfs2.jpg")');
		};
		if (pnum=="mfs3") {
			$("#bigpic").css("background-image",'url("Imgs/mfs3.jpg")');
		};
		if (pnum=="xz1") {
			$("#bigpic").css("background-image",'url("Imgs/xz1.jpg")');
		};
		if (pnum=="xz2") {
			$("#bigpic").css("background-image",'url("Imgs/xz2.jpg")');
		};
		if (pnum=="xz3") {
			$("#bigpic").css("background-image",'url("Imgs/xz3.jpg")');
		};
		if (pnum=="wn1") {
			$("#bigpic").css("background-image",'url("Imgs/wn1.jpg")');
		};
		if (pnum=="wn2") {
			$("#bigpic").css("background-image",'url("Imgs/wn2.jpg")');
		};
		if (pnum=="wn3") {
			$("#bigpic").css("background-image",'url("Imgs/wn3.jpg")');
		};
	});

	$("#bigpic").click(function(){
		$("#mengban").hide();
	});

	$(".adda").hover(function(){
		$(this).css("text-decoration","underline");
	},function(){
		$(this).css("text-decoration","none");
	});

	$(".rh_pic").click(function(){
		var rhpnum=$(this).attr("numflag");
		if (rhpnum==0) {
			$(".main-content-gjs-bg").show();
			$(".main-content-zs-bg").hide();
			$(".main-content-ms-bg").hide();
			$(".main-content-mfs-bg").hide();
			$(".main-content-xz-bg").hide();
			$(".main-content-wn-bg").hide();
		};
		if (rhpnum==1) {
			$(".main-content-gjs-bg").hide();
			$(".main-content-zs-bg").show();
			$(".main-content-ms-bg").hide();
			$(".main-content-mfs-bg").hide();
			$(".main-content-xz-bg").hide();
			$(".main-content-wn-bg").hide();
		};
		if (rhpnum==2) {
			$(".main-content-gjs-bg").hide();
			$(".main-content-zs-bg").hide();
			$(".main-content-ms-bg").show();
			$(".main-content-mfs-bg").hide();
			$(".main-content-xz-bg").hide();
			$(".main-content-wn-bg").hide();
		};
		if (rhpnum==3) {
			$(".main-content-gjs-bg").hide();
			$(".main-content-zs-bg").hide();
			$(".main-content-ms-bg").hide();
			$(".main-content-mfs-bg").show();
			$(".main-content-xz-bg").hide();
			$(".main-content-wn-bg").hide();
		};
		if (rhpnum==4) {
			$(".main-content-gjs-bg").hide();
			$(".main-content-zs-bg").hide();
			$(".main-content-ms-bg").hide();
			$(".main-content-mfs-bg").hide();
			$(".main-content-xz-bg").show();
			$(".main-content-wn-bg").hide();
		};
		if (rhpnum==5) {
			$(".main-content-gjs-bg").hide();
			$(".main-content-zs-bg").hide();
			$(".main-content-ms-bg").hide();
			$(".main-content-mfs-bg").hide();
			$(".main-content-xz-bg").hide();
			$(".main-content-wn-bg").show();
		};
	});
};