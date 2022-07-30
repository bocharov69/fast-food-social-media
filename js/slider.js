$(document).ready(function() {
	$('.main').slick({
		arrows: false,
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
	});
	$('.main').on('wheel', (function(e) {
		e.preventDefault();
		if (e.originalEvent.deltaY > 0) {
			$(this).slick('slickNext');
		} else {
			$(this).slick('slickPrev');
		}
	}));
});