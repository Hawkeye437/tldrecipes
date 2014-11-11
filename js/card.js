$(document).ready(function() {
	$('head').append('<link rel="stylesheet" href="css/card.css" type="text/css" />');
	$('head').append('<link rel="stylesheet" href="css/container-fix.css" type="text/css" />');
	loadRecipeCards($('.recipes'));
	loadUserCards($('.users'));
	$('body').on('DOMNodeInserted', function(event) {
		if ($(event.target).is('.recipes')) {
			loadRecipeCards($(event.target));
		}
		if ($(event.target).is('.users')) {
			loadUserCards($(event.target));
		}
	});

	$('.diet-icon').on('mouseenter', function(event) {
		var tooltip = $(this).siblings('.diet-tooltip');
		var tooltipText = $(this).data('tooltip');
		var color = $(this).data('color');
		tooltip.text(tooltipText);
		tooltip.css('background-color', color);
		tooltip.show();
	});
	$('.diet-icon').on('mouseout', function(event) {
		var tooltip = $(this).siblings('.diet-tooltip');
		tooltip.text('');
		tooltip.css('background-color', 'white');
		tooltip.hide();
	});
});

function loadUserCards(listings) {
	listings.each(function() {
		$(this).html('<div class="listing-wrapper"><div class="listing-inner-wrapper"><ul class="listing"></ul></div></div>');
		var listing = $(this).find('.listing');
		var numCards = $(this).data('length');
		for (var i = 0; i < numCards; i++) {
			var card = '<li class="user card"><div class="user-info"><a href="userpage.html" class="user-card-img"><span style="background-image: url(\'img/pastafreak123.png\')"></span></a><div class="user-stats"><div class="user-name"><a href="userpage.html">pastafreak123</a></div><div>Joined: Nov 8, 2014</div><div>Last active: 2 days ago</div></div></div><div class="user-recipes"><div class="user-recipes-heading">Recipes Submitted</div><ul class="user-recipe-list">';
			var max = 999;
			var min = 1;
			var randRecipeCount = Math.floor(Math.random() * (max - min + 1) + min);
			for (var j = 0; j < Math.min(4, randRecipeCount); j++) {
				card += '<li class="recipe-img"><a href="recipe.html"><span class="recipe-img-thumb" style="background-image: url(\'img/card.jpg\')"></span></a></li>';
			}
			if (randRecipeCount > 4) {
				card += '<li class="recipe-img more"><a href="browse.html?category=pastafreak123\'s Recipes"><span class="vcenter">+' + (randRecipeCount - 4) + '</span></a></li>';
			}
			card += '</ul></div></li>';
			listing.append(card);
		}
	});
};

function loadRecipeCards(listings) {
	listings.each(function() {
		$(this).html('<div class="listing-wrapper"><div class="listing-inner-wrapper"><ul class="listing"></ul></div></div>');
		var listing = $(this).find('.listing');
		var numCards = $(this).data('length');
		var diets = [
			'<a href="browse.html?category=Vegetarian Recipes" class="diet-icon vegetarian" data-tooltip="Vegetarian" data-color="#096b00">V</a>',
			'<a href="browse.html?category=Vegan Recipes" class="diet-icon vegan" data-tooltip="Vegan" data-color="#2a0">Vg</a>',
			'<a href="browse.html?category=Dairy-Free Recipes" class="diet-icon dairy" data-tooltip="Dairy-Free" data-color="#008a8a">Df</a>',
			'<a href="browse.html?category=Kosher Recipes" class="diet-icon kosher" data-tooltip="Kosher" data-color="#ab9210">K</a>',
			'<a href="browse.html?category=Gluten-Free Recipes" class="diet-icon gluten" data-tooltip="Gluten-Free" data-color="#c46f0e">Gl</a>'
		];
		for (var i = 0; i < numCards; i++) {
			var max = 100;
			var min = 1;
			var randSuccessRate = Math.floor(Math.random() * (max - min + 1) + min);
			shuffle(diets);
			var card = '<li class="recipe card"><a href="recipe.html"><div class="recipe-card-img" style="background-image: url(\'img/card.jpg\')"></div></a><div class="recipe-card-info"><div class="recipe-info-top-wrapper"><div class="recipe-info-name-wrapper"><div class="recipe-name"><a href="recipe.html">Pasta</a></div><div class="recipe-user">by <a href="userpage.html">pastafreak123</a></div></div><div class="recipe-diet">'
					+ diets[0] + diets[1] + diets[2]
					+ '<div class="diet-tooltip"></div></div></div><div class="recipe-success"><div class="success-bar"><div class="success" style="width: '
					+ randSuccessRate + '%"></div></div><div class="success-text"><span class="success-rate">'
					+ randSuccessRate + '%</span> success rate</div></div><div class="recipe-time"><span>Time: <span>1 hr</span> &amp; <span>30 min</span></span></div></div></li>';
			listing.append(card);
		}
	});
};


/*
 * Shuffle the items in an array 'a'
 * Source: http://stackoverflow.com/a/25984542
 */
function shuffle(a, b, c, d) {
	c = a.length;
	while (c) {
		b = Math.random() * c-- | 0;
		d = a[c];
		a[c] = a[b];
		a[b] = d;
	}
}