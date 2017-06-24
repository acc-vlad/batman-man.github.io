$(function() {

    var loaderPage = function() {
	$(".loader_inner").fadeOut();
	$(".loader").fadeOut();	
	};
 $(".toggle_mnu").click(function() {
    $(".sandwich").toggleClass("active");
});
    $(".toggle_mnu").click(function() {
     if ($(".top_mnu").is(":visible")){    
     $(".top_mnu").slideToggle(300);
        setTimeout (function(){ $('header').css({"border-bottom":"1px solid #bababa"});},300);
     } else { 
     $(".top_mnu").slideToggle(300);
     $('header').css('border-bottom','none');    
     };
	});
  $(".portfolio").mixItUp();  
  // скрипт для меню  
   var $menu = $("header");
        $(window).scroll(function(){
            if ( $(this).scrollTop() > 1 ){
                $menu.addClass("fixed for_fix");
            } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed for_fix");
            }
        });
	// Page Nav
	var clickMenu = function() {
		var topVal = ( $(window).width() < 769 ) ? 0 : 58;
		$(window).resize(function(){
			topVal = ( $(window).width() < 769 ) ? 0 : 58;		
		});
		$('header a').click(function(event){
			var section = $(this).data('nav-section');
				if ( $('section[data-section="' + section + '"]').length ) {
					$('html, body').animate({
			        	scrollTop: $('section[data-section="' + section + '"]').offset().top - topVal
			    	}, 400);		
			   }
		    event.preventDefault();
		    // return false;
		});
	};
	// Reflect scrolling in navigation
	var navActive = function(section) {	
		$('header ul li a').removeClass('active');
		$('header').find('a[data-nav-section="'+section+'"]').addClass('active');
	};
	var navigationSection = function() {
		var $section = $('section[data-section]');
		$section.waypoint(function(direction) {
		  	if (direction === 'down') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
	  		offset: '150px'
		});
		$section.waypoint(function(direction) {
		  	if (direction === 'up') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
		  	offset: function() { return -$(this.element).height() + 155; }
		});
	};
// скрипт для меню
 
var groups = {};
$('.galleryItem').each(function() {
  var id = parseInt($(this).attr('data-group'), 10);
  if(!groups[id]) {
    groups[id] = [];
  }  
  groups[id].push( this );
});
$.each(groups, function() {
  
  $(this).magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      gallery: { enabled:true }
  })  
});
$('.flexslider').flexslider({
    animation: "slide"
  });
	// Document on load.
	$(function(){
		clickMenu();  // для меню
		navigationSection(); // для меню
	});




		

	});  
