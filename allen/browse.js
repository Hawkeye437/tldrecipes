$(document).ready(function() {
	var category = location.search.split('category=')[1]
	if (category) {
		category = category.replace(/%20/g, ' ');
		$('.browse-title').text(category);
	}

	$(window).scroll(function() {
		if ($(window).scrollTop() == $(document).height() - $(window).height()) {
			$('.section').append('<div class="recipes" data-length="6"></div>');
			$(window).scrollTop($(window).scrollTop() - 1);
		}
	});
});