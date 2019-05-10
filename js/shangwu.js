$(function(){
	$(".sousuo").click(function(){
		$(".nav_dh2").fadeIn();
	})
	$(".cha").click(function(){
		$(".nav_dh2").fadeOut();
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