$(function(){
	
	$(".sousuo").click(function(){
		$(".nav_dh2").fadeIn();
	})
	$(".cha").click(function(){
		$(".nav_dh2").fadeOut();
	})
	
	$(".header_zhong_right").animate({"top":"10%","right":"0"},900).show();
	
	$(".section1_zhong_xia_zhong>ul>a").hover(function(){
		$(this).children(".zhe").css("animation","tupian 1.5s infinite");
	},function(){
		$(this).children(".zhe").css("animation","");
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