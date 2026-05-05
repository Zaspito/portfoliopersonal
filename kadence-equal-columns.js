(function () {
	var groups = [
		'[class*="kadence-column_misServiceProCard"] > .kt-inside-inner-col > .wp-block-group',
		'[class*="kadence-column_misBenefitPro"] > .kt-inside-inner-col > .wp-block-group',
		'[class*="kadence-column_misProcessPro"] > .kt-inside-inner-col > .wp-block-group'
	];

	function debounce(fn, wait) {
		var timer;
		return function () {
			clearTimeout(timer);
			timer = setTimeout(fn, wait);
		};
	}

	function equalize(selector) {
		var items = Array.prototype.slice.call(document.querySelectorAll(selector));
		if (!items.length) return;

		items.forEach(function (item) {
			item.style.minHeight = '';
		});

		if (window.innerWidth < 768) return;

		var max = items.reduce(function (height, item) {
			return Math.max(height, item.getBoundingClientRect().height);
		}, 0);

		items.forEach(function (item) {
			item.style.minHeight = Math.ceil(max) + 'px';
		});
	}

	function runEqualizer() {
		groups.forEach(equalize);
	}

	window.addEventListener('load', runEqualizer);
	window.addEventListener('resize', debounce(runEqualizer, 160));
	document.addEventListener('DOMContentLoaded', runEqualizer);

	if (document.fonts && document.fonts.ready) {
		document.fonts.ready.then(runEqualizer);
	}

	Array.prototype.slice.call(document.querySelectorAll('img')).forEach(function (img) {
		if (!img.complete) img.addEventListener('load', runEqualizer, { once: true });
	});
})();
