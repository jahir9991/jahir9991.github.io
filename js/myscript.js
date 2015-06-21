$(function() {

  "use strict";

    var topoffset = 50; //variable for menu height
    var slideqty = $('#featured .item').length;
    var wheight = $(window).height(); //get the height of the window

    $('.fullheight').css('height', wheight); //set to window tallness


    //replace IMG inside carousels with a background image
    $('#featured .item img').each(function() {
      var imgSrc = $(this).attr('src');
      $(this).parent().css({'background-image': 'url('+imgSrc+')'});
      $(this).remove();
    });

    //adjust height of .fullheight elements on window resize
    $(window).resize(function() {
      wheight = $(window).height(); //get the height of the window
      $('.fullheight').css('height', wheight); //set to window tallness
    });


  //Activate Scrollspy
  $('body').scrollspy({
    target: 'header .navbar',
    offset: topoffset
  });

  // add inbody class
  var hash = $(this).find('li.active a').attr('href');
  if(hash !== '#featured') {
    $('header nav').addClass('inbody');
    $('#ui8ads-container').css('top','60px');

  } else {
    $('header nav').removeClass('inbody');
    $('#ui8ads-container').css('top','140px');
  }


  // Add an inbody class to nav when scrollspy event fires
  $('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
    var hash = $(this).find('li.active a').attr('href');
    if(hash !== '#featured') {
      $('header nav').addClass('inbody');
    } else {
      $('header nav').removeClass('inbody');
    }
  });


  //Use smooth scrolling when clicking on navigation
  $('.navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === 
      this.pathname.replace(/^\//,'') && 
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling

  //Automatically generate carousel indicators
  for (var i=0; i < slideqty; i++) {
    var insertText = '<li data-target="#featured" data-slide-to="' + i + '"></li>';
    $('#featured ol').append(insertText);
  }



  $('.carousel').carousel({
    interval:'3000',
      pause:false
  });



// /////////////////////
var btnRadius = $('.cd-modal-bg').width()/2,
	left = $('.cd-modal-bg').offset().left + btnRadius,
	top = $('.cd-modal-bg').offset().top + btnRadius - $(window).scrollTop(),
	scale = scaleValue(top, left, btnRadius, $(window).height(), $(window).width());
 
function scaleValue( topValue, leftValue, radiusValue, windowW, windowH) {
	var maxDistHor = ( leftValue > windowW/2) ? leftValue : (windowW - leftValue),
		maxDistVert = ( topValue > windowH/2) ? topValue : (windowH - topValue);
	return Math.ceil(Math.sqrt( Math.pow(maxDistHor, 2) + Math.pow(maxDistVert, 2) )/radiusValue);
}



});



