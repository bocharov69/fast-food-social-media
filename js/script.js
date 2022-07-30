//auto aspect ratio
function ratio_change() {
	var vh = $(window).height();
	var vw = $(window).width();
	var ratio = vh / vw + 0.1;
	$(":root").css("--aspect_ratio", ratio);
}

$(document).ready(function() {
	ratio_change();
	$(window).resize(function() {
		ratio_change();
	});
});

//scroll tip
$(window).on('wheel', (function(e) {
	e.preventDefault();
	$('.scroll-tip').removeClass('active');
}));
$(window).on('swipe', (function(e) {
	e.preventDefault();
	$('.scroll-tip').removeClass('active');
}));