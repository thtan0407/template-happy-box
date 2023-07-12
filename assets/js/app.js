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

	const handleSliderStories = function () {
		const slider = $('#slider-stories');
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
				slidesPerView: 3,
				spaceBetween: 16,
				breakpoints: {
					320: {
						slidesPerView: 1.25,
					},
					600: {
						slidesPerView: 2.25,
					},
					1200: {
						slidesPerView: 3,
					}
				}
			}
			handleSwiper(elmSwiper + ' .swiper', objSwiper);
		}
	}


	$(document).ready(function () {
		handleSliderStories();
	});
})(jQuery);