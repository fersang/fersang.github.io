$( document ).ready(function() {

	var slideShowDown=$(".slideShowDown");
	var slideShowUp=$(".slideShowUp");
	sliderText();

	setInterval(function(){
			var sliderUp=$(".slideShowUp > .slideShow-title").first();
			var sliderDown=$(".slideShowDown > .slideShow-description").first();				
			sliderUp.css({display: 'none'});				
			sliderDown.css({display: 'none'});				
			sliderUp.appendTo($(".slideShowUp"));
			sliderDown.appendTo($(".slideShowDown"));
			sliderText();
	},6000);

	function sliderText(){

		setTimeout(function(){
				slideShowUp.children().first().css('display', 'block');		
				slideShowDown.children().first().css('display', 'block');		

					slideShowUp.stop(true).animate({
						left: '26%'
						},1000,'easeOutExpo',function(){
							slideShowUp.animate({
								left: '33%'
								},2100,'linear',function(){
									slideShowUp.animate({
										left: '100%' 
									},1200,'easeInExpo',function(){
										slideShowUp.css({
											left: '-80%'
										});
									});
							});
					});	
					slideShowDown.stop(true).animate({
						left: '58%'
						},1000,'easeOutExpo',function(){
							slideShowDown.animate({
								left: '50%'
								},2100,'linear',function(){
									slideShowDown.animate({
										left: '-40%' 
									},1200,'easeInExpo',function(){
										slideShowDown.css({
											left: '100%'
										});
									});
							});
					});			
		},200);				
	}




	$(".columns-three").hover(function() {
		$(this).children(".img-circle-size").stop(true).animate({
			width: '140px',
			height: '140px',
			'margin-top': '25px',
			'padding-left': '20px'
			},500);
	}, function() {
		$(this).children(".img-circle-size").stop(true).animate({
			width: '180px',
			height: '180px',
			'margin-top': '0',
			'padding-left': '0'
			},500);
	});

	$(function() {
	    $('a[href*="#"]:not([href="#"])').click(function() {
	      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	        if (target.length) {
	          $('html, body').animate({
	            scrollTop: target.offset().top
	          }, 1000);
	          return false;
	        }
	      }
	    });
	  });



});



