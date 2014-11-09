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
		$(this).html('<div class="recipe-listing-wrapper"><div class="recipe-listing-inner-wrapper"><ul class="recipe-listing container"></ul></div></div>');
		var listing = $(this).find('.recipe-listing');
		var numCards = $(this).data('length');
		for (var i = 0; i < numCards; i++) {
			listing.append('<li class="recipe-card"><div class="recipe-card-img" style="background-image: url(\'../allen/card.jpg\')"></div><div class="recipe-card-info"><div class="recipe-info-top-wrapper"><div class="recipe-info-name-wrapper"><div class="recipe-name"><a href="#">Pasta</a></div><div class="recipe-user">by <a href="#">pastafreak123</a></div></div><div class="recipe-diet"><div class="diet-icon vegetarian">V</div><div class="diet-icon vegan">Vg</div><div class="diet-icon dairy">Df</div><div class="diet-icon kosher">K</div><div class="diet-icon gluten">Gl</div></div></div><div class="recipe-success"><div class="success-bar"><div class="success" style="width: 80%"></div></div><div class="success-text"><span class="success-rate">100%</span> success rate</div></div><div class="recipe-time"><span>Time: <span>1 hr</span> &amp; <span>30 min</span></span></div></div></li>');
		}
	});
};