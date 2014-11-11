$(document).ready(function() {
	$('body').prepend('<div class="navbar navbar-inverse navbar-fixed-top" role="navigation"><div class="container-fluid"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="index.html">TL;DRecipes</a></div><div class="collapse navbar-collapse"><ul class="nav navbar-nav"><li><a href="#" class="dropdown-toggle" data-toggle="dropdown">Browse <span class="caret"></span></a><ul class="dropdown-menu" role="menu"><li><a href="browse.html?category=Recently Submitted">Recently Submitted</a></li><li><a href="browse.html?category=Most Popular">Most Popular</a></li><li><a href="browse.html?category=Highest Success Rate">Highest Success Rate</a></li></ul></li><li><a href="submit1.html">Submit A Recipe</a></li></ul><form class="navbar-form navbar-left" role="search"><div class="form-group input-group"><input type="text" class="form-control" placeholder="Find a recipe or user"><div class="input-group-btn"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"><span class="nav-search-filter">Recipes</span> <span class="caret"></span></button><ul class="dropdown-menu dropdown-menu-right" role="menu"><li><a href="#" class="no-link">Recipes</a></li><li><a href="#" class="no-link">Users</a></li></ul></div></div><button type="submit" class="btn btn-default">Search</button></form><ul class="nav navbar-nav navbar-right"><li><a href="new-user.html">Create Account</a></li><li><a href="sign-in.html">Sign In</a></li><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">User <span class="caret"></span></a><ul class="dropdown-menu" role="menu"><li><a href="userpage.html">View Profile</a></li><li><a href="#">Get Recommendations</a></li><li><a href="#">Edit Settings</a></li><li class="divider"></li><li><a href="#">Sign out</a></li></ul></li></ul></div></div></div>');
	$('head').append('<link rel="stylesheet" href="css/navbar.css" type="text/css" />');
	$('.navbar form[role="search"] a').on('click', function() {
		var filter = $(this).text();
		$('.navbar .nav-search-filter').text(filter);
	});
	$('.no-link').on('click', function(event) {
		event.preventDefault();
	});
});