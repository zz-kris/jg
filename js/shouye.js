$(function(){
	
	$(".sousuo").click(function(){
		$(".nav_dh2").fadeIn();
	})
	$(".cha").click(function(){
		$(".nav_dh2").fadeOut();
	})
	
	$(".header_zhong_right").animate({"top":"10%","right":"0"},900).show();
	
	/*向左按钮*/
	$(".section1_zhong_xia_left").click(function () {
	    $(".section1_zhong_xia_zhong>ul").stop().animate({"margin-left":"-283px"},function(){
		    $(".section1_zhong_xia_zhong>ul>li:eq(0)").appendTo($(".section1_zhong_xia_zhong>ul"))
		    $(".section1_zhong_xia_zhong>ul").css({"margin-left":0})
		})
	})
	/*向右按钮*/
	$(".section1_zhong_xia_right").click(function () {
	   	$(".section1_zhong_xia_zhong>ul").stop().animate({"margin-left":"283px"},function(){
		    $(".section1_zhong_xia_zhong>ul>li:eq(7)").prependTo($(".section1_zhong_xia_zhong>ul"))
		    $(".section1_zhong_xia_zhong>ul").css({"margin-left":0})
		})
	})
	
	
	$(".section1_zhong_xia_zhong>ul>li").hover(function(){
		$(this).children(".zhe").css("animation","tupian 1.5s infinite");
	},function(){
		$(this).children(".zhe").css("animation","");
	})
	$(".section2_zhong_xia>li").hover(function(){
		$(this).children(".zhe").css("animation","tupian 1.5s infinite");
	},function(){
		$(this).children(".zhe").css("animation","");
	})
	
	var te=$(".jiazai>span>span")
	$(".jiazai>span").click(function(){
		if (te.text()=="加载") {
			$(".jia").show();
			te.text("收起")
			$(".jiazai>span>img").attr("src","img/loading-icon.gif")
		}else{
			$(".jia").hide();
			te.text("加载")
			$(".jiazai>span>img").attr("src","img/more.png")
		}
	})
	
	$(document).on('scroll',function(){
		var src=$(document).scrollTop();
//		console.log(src);
		if(src>=140){
			$('.you').show();
		}else{
			$('.you').hide();
		}
		
		$('.fh').click(function(){
			$(document).scrollTop(0);
		})
		
	})
	$(".t").hover(function(){
		$(this).children(".tli").toggle();
	})
	
	
	
})