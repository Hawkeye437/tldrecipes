$(document).ready(function() {
	$('.navbar form[role="search"] a').on('click', function() {
		var filter = $(this).text();
		$('.navbar .nav-search-filter').text(filter);
	});
});