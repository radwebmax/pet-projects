//Pointer
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
cursor.setAttribute("style", "top: "+e.pageY+"px; left: "+e.pageX+"px;")
})
//Copyright
document.oncopy = function(){
  var body = document.getElementsByTagName('body')[0];
  var selection = window.getSelection();
  var div = document.createElement('div');
 
  div.style.position = 'absolute';
  div.style.left = '-99999px';
  body.appendChild(div);
  div.innerHTML = selection + ' &copy Источник: MAXON Creative Agency';
  selection.selectAllChildren(div);
 
  window.setTimeout(function(){
    body.removeChild(div);
  }, 0);
}
     
$(document).ready(function(){
  //Copyright defence
   document.oncontextmenu = function() {return false;};

  $('body').mousedown(function(e){ 
    if( e.button == 2 ) { 
      $(".copyright__defence").css('display','flex');
      $('*').on("click", function () {
        $('.copyright__defence').fadeOut(500);
      });
      return false
    } 
    
    return true; 
  }); 
  //Brand adding
  $(".position__center-center").mouseenter(function(){
    $(".position__center-center h4").hide();
    $(".position__center-center a").show();
  });
  $(".position__center-center").mouseleave(function(){
    $(".position__center-center a").hide();
    $(".position__center-center h4").show();
  });
  $('body').on('contextmenu', false);
  //On click - change pointer
  $('*').on("click", function () {
  $('.cursor').addClass('expand');
  setTimeout(function (){
    $('.cursor').removeClass('expand');
    }, 500);
  });
  jQuery(document).mousemove(function(e) {

		jQuery(".cursor-large")
		.on("mouseenter", function() {
			jQuery('.cursor').addClass("cursor-large")
		})
		.on("mouseleave", function() {
			jQuery('.cursor').removeClass("cursor-large")
		})
    jQuery(".cursor-small")
		.on("mouseenter", function() {
			jQuery('.cursor').addClass("cursor-small")
		})
		.on("mouseleave", function() {
			jQuery('.cursor').removeClass("cursor-small")
		})

	});
//Main__swiper
  $(function () {
  $(".swiper-handler span").on("click", function () {
    $(this).addClass("handler_choosen").siblings().removeClass("handler_choosen");
    $(".slide")
    .eq($(this).index())
    .addClass("show")
    .siblings()
    .removeClass("show");
    });
  });
  //Infinite carousel
  $('.abous-us__slider_endless').slick({
  infinite: true,
  autoplay: true,
  pauseOnFocus:false,
  pauseOnHover:false,
  dots:false,
  arrows:false,
  draggable:false,
  focusOnSelect:false,
  adaptiveHeight:true,
  cssEase: 'linear',
  speed: 25000,
  autoplaySpeed: 0,
  slidesToShow: 5,
  slidesToScroll:5
  });
  $('.front-slider__container').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  });
  //Smooth scrolling
  $(".scroll_smooth").on("click", "a", function (event) {
         event.preventDefault();
         var id = $(this).attr('href'),
             top = $(id).offset().top;
         
         $('body,html').animate({
             scrollTop: top
         }, 1500);
     });
  //Button to Top
  $(function () {
         $(window).scroll(function () {
             if ($(this).scrollTop() != 0) {
                 $('#to-top').fadeIn(1000);
             } else {
                 $('#to-top').fadeOut();
             }
         });
         $(function(){
	           $('#to-top').click(function(){
		         $('html, body').animate({scrollTop: 0}, 600);
	           return false;
	          });
        });
     });
     jQuery(".to-bottom").on("click", function() {
			jQuery(this).fadeOut();
		})
 //Pricing slider for mobile and tablets
  $(function(){
  if ( $(window).width() < 800 ) {
  $('.pricing__slider').slick({
  infinite: true,
  autoplay: true,
  dots:false,
  arrows:true,
  prevArrow: $('.item_prev'),
  nextArrow: $('.item_next'), 
  focusOnSelect:false,
  slidesToShow: 1,
  adaptiveHeight:true,
  });
  }
});
});

