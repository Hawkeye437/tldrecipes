//

var ingrList = ['Cup of Cheese', 'Green Onion', 'Drop of African Children Tears'];
var ctr = 0;

$(".vote-thanks").hide();
$(".add-favorite").hide();
$(".remove-favorite").hide();

$(".vote button").click(function() {
	$(".vote-thanks").fadeIn(300);
});

$("#favorite-button").click(function() {
	if ($("#favorite-button").hasClass("fav")) {
		$(".remove-favorite").hide();
		$(".add-favorite").fadeIn(300);
		$("#favorite-button").html('<i class="fa fa-star fa-2"></i> Unfavorite');
		$("#favorite-button").css("background-color", "#e6e6e6");
		$("#favorite-button").removeClass("fav");
		$("#favorite-button").addClass("unfav");
	}
	else {
		$(".add-favorite").hide();
		$(".remove-favorite").fadeIn(300);
		$("#favorite-button").html('<i class="fa fa-star fa-2"></i> Favorite');
		$("#favorite-button").css("background-color", "#fff");
		$("#favorite-button").removeClass("unfav");
		$("#favorite-button").addClass("fav");
	}
});

$('.carousel').carousel({
    interval: false
}) 

// First time
$(".swap").click(function() {
	var row = $(".swap").parent();
	row.fadeOut(300, function() {
		row.empty();
		ctr++;
		if (ctr > 2) {
			ctr = 0;
		}
		row.append('<div class="ingr-cell ingr-num">1</div><div class="ingr-cell">' + ingrList[ctr] + '</div><div class="ingr-cell swap" onclick="swapIngr(this)"><i class="fa fa-refresh"></i></div>').fadeIn(300);
	});
});	

// After first time
function swapIngr(e) {
	var self = e;
	var row = $(e).parent();
	console.log(row);
	row.fadeOut(300, function() {
		row.empty();
		ctr++;
		if (ctr > 2) {
			ctr = 0;
		}
		row.append('<div class="ingr-cell ingr-num">1</div><div class="ingr-cell">' + ingrList[ctr] + '</div><div class="ingr-cell swap" onclick="swapIngr(this)"><i class="fa fa-refresh"></i></div>').fadeIn(300);
	});
}