;(function ($) {
	'use strict';
	const handleSwiper = function (elm, obj = {}) {
		return new Swiper(elm, {
			speed: 1000,
			autoplay: {
				delay: 8000,
				disableOnInteraction: true,
			},
			loop: true,
			slidesPerView: 1,
			...obj
		});
	}

	const handleSliderPartner = function () {
		const slider = $('#slider-partner');
		if (slider.length > 0) {
			const elmSwiper = '#' + slider.attr('id')
			const objSwiper = {
				navigation: {
					nextEl: elmSwiper + " .slider-effect_next",
					prevEl: elmSwiper + " .slider-effect_prev",
				},
				autoplay: {
					delay: 6000,
					disableOnInteraction: true,
				},
				slidesPerView: 6,
				spaceBetween: 24,
			}
			handleSwiper(elmSwiper + ' .swiper', objSwiper);
		}
	}


	$(document).ready(function () {
		handleSliderPartner();
	});
})(jQuery);