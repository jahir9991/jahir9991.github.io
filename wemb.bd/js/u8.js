//jQuery(document).ready(function($){
//	var description = "Design your next app like a Pro with design resources from UI8.",
//		url = 'http://codyhouse.co/adv-banners/130x100-1.png';
//	$('.ui8ad-text a').text(description).css('display', 'block');
//	$('.ui8ad-image img').attr('src', url);
//});
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  	ga('create', 'UA-48014931-1', 'codyhouse.co');
  	ga('send', 'pageview');

  	jQuery(document).ready(function($){
  		$('.close-ui8-adv').on('click', function(){
  			$('#ui8ads-container').hide();
  		});
  	});