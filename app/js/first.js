$(document).ready(function() {
	$('.scroll-btn').on('click', function() {
		$('html, body').animate({
			'scrollTop' : 0
		}, 500);
	});

	$(window).scroll(function() {
		if($(window).scrollTop() > 250) {
			$('.scroll-btn').addClass('scroll-btn__active');
		} else {
			$('.scroll-btn').removeClass('scroll-btn__active');
		}
	});
});