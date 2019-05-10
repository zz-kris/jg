$(function(){
	$(".sousuo").click(function(){
		$(".nav_dh2").fadeIn();
	})
	$(".cha").click(function(){
		$(".nav_dh2").fadeOut();
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