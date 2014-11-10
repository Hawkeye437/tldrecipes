$(document).ready(function() {
	$('head').append('<link rel="stylesheet" href="../allen/card.css" type="text/css" />');
	$('head').append('<link rel="stylesheet" href="../allen/container-fix.css" type="text/css" />');
	loadCards($('.recipes'));
	$('body').on('DOMNodeInserted', function(event) {
		if ($(event.target).is('.recipes')) {
			loadCards($(event.target));
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

function loadCards(listings) {
	listings.each(function() {
		$(this).html('<div class="listing-wrapper"><div class="listing-inner-wrapper"><ul class="listing"></ul></div></div>');
		var listing = $(this).find('.listing');
		var numCards = $(this).data('length');
		var diets = [
			'<a href="../allen/browse.html?category=Vegetarian Recipes" class="diet-icon vegetarian" data-tooltip="Vegetarian" data-color="#096b00">V</a>',
			'<a href="../allen/browse.html?category=Vegan Recipes" class="diet-icon vegan" data-tooltip="Vegan" data-color="#2a0">Vg</a>',
			'<a href="../allen/browse.html?category=Dairy-Free Recipes" class="diet-icon dairy" data-tooltip="Dairy-Free" data-color="#008a8a">Df</a>',
			'<a href="../allen/browse.html?category=Kosher Recipes" class="diet-icon kosher" data-tooltip="Kosher" data-color="#ab9210">K</a>',
			'<a href="../allen/browse.html?category=Gluten-Free Recipes" class="diet-icon gluten" data-tooltip="Gluten-Free" data-color="#c46f0e">Gl</a>'
		];
		for (var i = 0; i < numCards; i++) {
			var max = 100;
			var min = 1;
			var randSuccessRate = Math.floor(Math.random() * (max - min + 1) + min);
			shuffle(diets);
			var card = '<li class="recipe-card"><a href="../will/recipe.html"><div class="recipe-card-img" style="background-image: url(\'../allen/card.jpg\')"></div></a><div class="recipe-card-info"><div class="recipe-info-top-wrapper"><div class="recipe-info-name-wrapper"><div class="recipe-name"><a href="../will/recipe.html">Pasta</a></div><div class="recipe-user">by <a href="../cassio/userpage.html">pastafreak123</a></div></div><div class="recipe-diet">'
					+ diets[0] + diets[1] + diets[2]
					+ '<div class="diet-tooltip"></div></div></div><div class="recipe-success"><div class="success-bar"><div class="success" style="width: '
					+ randSuccessRate + '%"></div></div><div class="success-text"><span class="success-rate">'
					+ randSuccessRate + '%</span> success rate</div></div><div class="recipe-time"><span>Time: <span>1 hr</span> &amp; <span>30 min</span></span></div></div></li>';
			listing.append(card);
		}
	});
};

function shuffle(a,b,c,d) {
	c = a.length;
	while (c) {
		b = Math.random() * c-- | 0;
		d = a[c];
		a[c] = a[b];
		a[b]=d;
	}
}