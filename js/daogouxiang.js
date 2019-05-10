$(function(){
	$(".sousuo").click(function(){
		$(".nav_dh2").fadeIn();
	})
	$(".cha").click(function(){
		$(".nav_dh2").fadeOut();
	})
	
	var flag="";
	$(".rightqing>.xin").hover(function(){
		if (flag=="a") {
			$(".rightqing>.xin>img").eq(2).show();
			$(".rightqing>.xin>img").eq(0).hide();
			$(".rightqing>.xin>img").eq(1).hide();
		}else if(flag=="b"){
			$(".rightqing>.xin>img").eq(1).show();
			$(".rightqing>.xin>img").eq(0).hide();
			$(".rightqing>.xin>img").eq(2).hide();
		}else{
			$(".rightqing>.xin>img").eq(1).show();
			$(".rightqing>.xin>img").eq(0).hide();
			$(".rightqing>.xin>img").eq(2).hide();
		}
	},function(){
		if (flag=="a") {
			$(".rightqing>.xin>img").eq(2).show();
			$(".rightqing>.xin>img").eq(1).hide();
			$(".rightqing>.xin>img").eq(0).hide();
		}else if(flag=="b"){
			$(".rightqing>.xin>img").eq(1).hide();
			$(".rightqing>.xin>img").eq(0).show();
			$(".rightqing>.xin>img").eq(2).hide();
		}else{
			$(".rightqing>.xin>img").eq(1).hide();
			$(".rightqing>.xin>img").eq(0).show();
			$(".rightqing>.xin>img").eq(2).hide();
		}
	})
	$(".rightqing>.xin>img").eq(1).click(function(){
		flag="a";
		$(".rightqing>.xin>p>span").text('16');
	})
	$(".rightqing>.xin>img").eq(2).click(function(){
		flag="b";
		$(".rightqing>.xin>p>span").text('15');
	})
	
	$(".rightqing>.fenxiang").hover(function(){
		$(this).children('img').attr('src','img/shareh_yj1.png');
	},function(){
		$(this).children('img').attr('src','img/share_yj1.png');
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