//

var ingrList = ['Drop of African Children Tears', 'Green Onion', 'Cup of Cheese'];
var ctr = 0;

$(".vote-thanks").hide();

$(".vote button").click(function() {
	$(".vote-thanks").fadeIn(300);
});

$('.carousel').carousel({
    interval: false
}) 

// First time
$(".swap").click(function() {
	var row = $(".swap").parent()
	console.log(row);
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