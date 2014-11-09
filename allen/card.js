$(document).ready(function() {
	$('head').append('<link rel="stylesheet" href="../allen/card.css" type="text/css" />');
	loadCards($('.recipes'));
	$('body').on('DOMNodeInserted', function(event) {
		if ($(event.target).is('.recipes')) {
		loadCards($(event.target));
	}
	});
});

function loadCards(listings) {
	listings.each(function() {
		$(this).html('<div class="recipe-listing-wrapper"><div class="recipe-listing-inner-wrapper"><ul class="recipe-listing"></ul></div></div>');
		var listing = $(this).find('.recipe-listing');
		var numCards = $(this).data('length');
		for (var i = 0; i < numCards; i++) {
			var max = 100;
			var min = 1;
			var randSuccessRate = Math.floor(Math.random() * (max - min + 1) + min);
			listing.append('<li class="recipe-card"><a href="../will/recipe.html"><div class="recipe-card-img" style="background-image: url(\'../allen/card.jpg\')"></div></a><div class="recipe-card-info"><div class="recipe-info-top-wrapper"><div class="recipe-info-name-wrapper"><div class="recipe-name"><a href="../will/recipe.html">Pasta</a></div><div class="recipe-user">by <a href="../cassio/userpage.html">pastafreak123</a></div></div><div class="recipe-diet"><div class="diet-icon vegetarian">V</div><div class="diet-icon vegan">Vg</div><div class="diet-icon dairy">Df</div><div class="diet-icon kosher">K</div><div class="diet-icon gluten">Gl</div></div></div><div class="recipe-success"><div class="success-bar"><div class="success" style="width: ' + randSuccessRate + '%"></div></div><div class="success-text"><span class="success-rate">' + randSuccessRate + '%</span> success rate</div></div><div class="recipe-time"><span>Time: <span>1 hr</span> &amp; <span>30 min</span></span></div></div></li>');
		}
	});
};