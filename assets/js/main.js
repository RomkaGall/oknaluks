$(document).ready(function() {
	// horizontal scroll
	$(".main").onepage_scroll({
		easing: "cubic-bezier(0.490, 0.580, 0.000, 0.955)",
	    direction: "horizontal",
	    animationTime: 800, 
	    loop: false, 
	    keyboard: false,
	    responsiveFallback: 768,
	    beforeMove: function(index) {
	    	// появление кнопок навигации на первой и последней странице
      		if (index === 5) {
				$('.btn-nav--next').hide('fast');
				$('.to-start').fadeIn('slow');
      		} else {
      			$('.btn-nav--next').show('fast');
      			$('.to-start').fadeOut('fast');
      		}

      		if (index === 1) {
				$('.btn-nav--prev').hide('fast');
      		} else {
      			$('.btn-nav--prev').show('fast');
      		}

      		// Анимация блоков в зависимости от страницы
      		if (index === 2) {
				$('body .onepage-wrapper .section.section--second .section__block').addClass('fadeInRight');
				$('body .onepage-wrapper .section.section--third .preanimated').addClass('fadeInUp');
				$('body .onepage-wrapper .section.section--second .img-wr img').addClass('parallax');				
      		} 

      		if (index === 3) {
				$('body .onepage-wrapper .section.section--third .section__block').addClass('fadeInUpBig');
				$('body .onepage-wrapper .section.section--third .img-wr').addClass('fadeInDownBig');
				$('body .onepage-wrapper .section.section--fourth .section__third-text .preanimated').addClass('fadeInLeftBig');
				$('body .onepage-wrapper .section.section--third .img-wr img').addClass('parallax');		
      		} 

      		if (index === 4) {
				
				$('body .onepage-wrapper .section.section--fourth .section__block').addClass('fadeInDown');
				$('body .onepage-wrapper .section.section--fourth .afteranimated').addClass('fadeInUp');
				$('body .onepage-wrapper .section.section--fifth .preanimated').addClass('fadeInLeftBig');
				$('body .onepage-wrapper .section.section--fourth .img-wr img').addClass('parallax');
      		}

      		if (index === 5) {
				
				$('body .onepage-wrapper .section.section--fifth .section__block').addClass('fadeInRight');
				$('body .onepage-wrapper .section.section--fifth .afteranimated').addClass('fadeInUp');
				$('body .onepage-wrapper .section.section--fifth .img-wr img').addClass('parallax')
      		}
    	}, 

    	afterMove: function(index) {
    		if (index === 1) {
				$('body .onepage-wrapper .section.section--second .img-wr img').removeClass('parallax');				
      		} 

      		if (index === 2) {	
				$('body .onepage-wrapper .section.section--third .img-wr img').removeClass('parallax');				
      		} 

      		if (index === 3) {		
				$('body .onepage-wrapper .section.section--fourth .img-wr img').removeClass('parallax');				
      		} 

      		if (index === 4) {		
				$('body .onepage-wrapper .section.section--fifth .img-wr img').removeClass('parallax');				
      		} 
    	}
	});

	// Swipe on mobile
	$(function() {      

		var main = $(".main");
        main.swipe( {
	        swipe:function(event, direction, distance) {
				if (direction === "left") {
		      		main.moveDown();
		      	
		      	} else main.moveUp();
	        },
	        
	        threshold: 100,
	        excludedElements: $('.section__slider')
	       	
	     });
	    if (innerWidth < 768) {
		      	$(".main").swipe("disable")
		    } else {
			    $(".main").swipe("enable");
			}
        $(window).resize(function() {
        	 if (innerWidth < 768) {
		      	$(".main").swipe("disable")
		    } else {
			    $(".main").swipe("enable");
			}
        });
	   
    });

    

	

	// next-page
	(function () {
		var main = $(".main");
		$('.btn-nav--next').click(function() {
			if (true) {}
			main.moveDown();
		});

		$('.btn-nav--prev').click(function() {
			main.moveUp();
		});

		$('.to-start').click(function() {
			main.moveTo(1);
		});
	})();
	

	// left menu
	$(".sidebar__menu--desktop").css('display', 'none');
	// $(".sidebar__menu--mobile").css('display', 'none');

	$(".sidebar__button--desktop").click(function(e) {
		$(".sidebar__menu--desktop").addClass('active').fadeToggle("fast");
		
	}); 

	$(".sidebar__button--mobile").click(function(e) {
		$(".sidebar__menu--mobile").addClass('toRight');
		$(".overlay").fadeIn('slow');
	});

	$(".btn-close").click(function(e) {
		$(".sidebar__menu--mobile").removeClass('toRight');
		$(".overlay").fadeOut('slow');
	});

	$(".overlay").click(function(e) {
		$(".sidebar__menu--mobile").removeClass('toRight');
		$(".overlay").fadeOut('slow');
	});

	$(".sidebar__bar-btn").click(function(e) {
		$(".sidebar__menu--tablet, .sidebar__price").toggleClass('toLeft');
		$(".btn-icon").toggleClass('rotate');

	});  

	 $(window).resize(function() {
    	 if (innerWidth > 768) {
	      	$(".overlay").fadeOut('slow');
	      	 $(".sidebar__menu--mobile").removeClass('toRight');
	    } 
    });            

	// main section__slider
	$('.section__slider').slick({
	    infinite: true,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    prevArrow: $('.slider__btn--prev'),
	    nextArrow: $('.slider__btn--next'),
	  });

	// // preloader
	
	// $(".preloader__btn").click(function(event) {
	// 	$(".preloader").fadeOut('slow');
	// });
});

