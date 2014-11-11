$(document).ready(function() {
	var type = location.search.split('type=')[1]
	if (type) {
		type = type.replace(/%20/g, ' ');
		if (type == 'users')
			$('.section').append('<div class="users" data-length="12"></div>');
		else
			$('.section').append('<div class="recipes" data-length="12"></div>');
	}

	$(window).scroll(function() {
		if ($(window).scrollTop() == $(document).height() - $(window).height()) {
			if (type == 'users')
				$('.section').append('<div class="users" data-length="6"></div>');
			else
				$('.section').append('<div class="recipes" data-length="6"></div>');
			$(window).scrollTop($(window).scrollTop() - 1);
		}
	});
});