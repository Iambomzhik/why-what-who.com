(function($){"use strict";jQuery(window).on('load',function(){jQuery('.dropdown-toggle').keyup(function(e){if(e.keyCode==9){$(this).dropdown('toggle')}})});function homefeatured(){jQuery(".featuredcat").owlCarousel({autoPlay:3000,pagination:!1,items:3,itemsDesktop:[1199,1],itemsDesktopSmall:[979,2],navigation:!1,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]})}
homefeatured();function homemain(){jQuery(".homemain").owlCarousel({autoPlay:3000,singleItem:!0,pagination:!1,navigation:!0,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]})}
homemain();function postcrousel(){jQuery(".postcrousel").owlCarousel({autoPlay:3000,items:1,itemsDesktop:[1199,1],itemsDesktopSmall:[979,2],pagination:!1,navigation:!0,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]})}
postcrousel();function colmnthree(){jQuery(".colmnthree").owlCarousel({autoPlay:3000,items:3,itemsDesktop:[1199,3],itemsDesktopSmall:[979,2],pagination:!1,navigation:!0,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]})}
colmnthree();function realatedpost(){jQuery(".realatedpost").owlCarousel({autoPlay:3000,items:3,itemsDesktop:[1199,3],itemsDesktopSmall:[979,2],pagination:!1,navigation:!0,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]})}
realatedpost();jQuery(".ta_upscr").hide();function taupr(){jQuery(window).on('scroll',function(){if($(this).scrollTop()>500){$('.ta_upscr').fadeIn()}else{$('.ta_upscr').fadeOut()}});$('a.ta_upscr').on('click',function(){$('body,html').animate({scrollTop:0},800);return!1})}
taupr();function marquee(){jQuery('.marquee').marquee({speed:50,direction:'left',delayBeforeStart:0,duplicated:!0,pauseOnHover:!0,startVisible:!0})}
marquee()})(jQuery);function colmnthree(){jQuery(".colmnthree").owlCarousel({autoPlay:3000,pagination:!1,items:1,itemsDesktop:[1199,1],itemsDesktopSmall:[979,1],navigation:!1,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]})}
colmnthree()