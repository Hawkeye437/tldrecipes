$(document).ready(function() {
	var type = location.search.split('type=')[1]
	if (type) {
		type = decodeURIComponent(type);
		if (type == 'users')
			displayUsers();
		else
			displayRecipes();
	} else {
		displayRecipes();
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

function displayRecipes() {
	$('.section').append('<div class="recipes" data-length="12"></div>');
	$('.search-filter .recipe-filter').show();
	$('.search-filter .user-filter').hide();
}

function displayUsers() {
	$('.section').append('<div class="users" data-length="12"></div>');
	$('.search-filter .user-filter').show();
	$('.search-filter .recipe-filter').hide();
}