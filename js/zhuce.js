$(function(){
	$(".sousuo").click(function(){
		$(".nav_dh2").fadeIn();
	})
	$(".cha").click(function(){
		$(".nav_dh2").fadeOut();
	})
	
	
	$("#nc").blur(nicheng);
	$("#mm").blur(mima);
	$("#mm2").blur(mima2);
	$("#sj").blur(shoujihao);
	
	//验证昵称
	function nicheng(){
		var nc=$("#nc");
		var divnc=$("#nicheng");
		divnc.html("");
		if (nc.val()=="") {
			divnc.html("不能为空");
			return false;
		}
		for (var i=0;i<nc.length;i++) {
			var j=nc.val().substring(i,i+1);
			if (j>=0) {
				divnc.html("不能有数字");
				return false;
			}
		}	
		return true;
	}
	
	//再次验证密码
	function mima2(){
		var mm2=$("#mm2");
		var mm=$("#mm");
		var divmm2=$("#mima2");
		divmm2.html("");
		if (mm.val()!==mm2.val()) {
			divmm2.html("两次输入密码不一样");
			return false;
		}	
		return true;
	}
			
	//验证密码
	function mima(){
		var mm=$("#mm");
		var divmm=$("#mima");
		divmm.html("");
		if (mm.val()=="") {
			divmm.html("不能为空");
			return false;
		}
		if (mm.val().length<6) {
			divmm.html("不能少于六位数");
			return false;
		}		
		return true;
	}
	
	//验证手机号
	function shoujihao(){
		var shouji=$("#sj").val();
		var divshouji=$("#shoujihao");
		var regModile=/^1\d{10}$/;
		if (regModile.test(shouji)==false) {
			divshouji.html("请重新输入");
			return false;
		}
		divshouji.html("");
		return true;
	}
			
	$("#myform").submit(function(){
		var flag=true;
		if (!nicheng()) {
			flag=false;
		}
		if (!mima()) {
			flag=false;
		}
		if (!mima2()) {
			flag=false;
		}
		if (!shoujihao()) {
			flag=false;
		}
		return flag;	
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