/*
 * Snow script
 * Source : http://stackoverflow.com/a/13983965
 */


var flakes = null,
    bodyHeight = null,
    bodyWidth = null;

function snow() {
	for (var i = 0; i < 50; i++) {
		var flake = flakes[i];

		flake.y += flake.velY;

		if (flake.y > bodyHeight - (flake.size + 6)) {
			flake.y = 0;
		}

		flake.el.style.top = flake.y + 'px';
		flake.el.style.left = ~~flake.x + 'px';

		flake.step += flake.stepSize;
		flake.velX = Math.cos(flake.step);

		flake.x += flake.velX;

		if (flake.x > bodyWidth - 40 || flake.x < 30) {
			flake.y = 0;
		}
	}
	setTimeout(snow, 10);
};


function init() {
	var docFrag = document.createDocumentFragment();
	for (var i = 0; i < 50; i++) {
		var flake = document.createElement("div"),
			x = Math.floor(Math.random() * bodyWidth),
			y = Math.floor(Math.random() * bodyHeight),
			size = (Math.random() * 100) + 50,
			speed = (Math.random() * 1) + 1;

		flake.style.position = 'absolute';

		flake.style['z-index'] = '9999';

		flake.style.width = size + 'px';
		flake.style.height = size + 'px';
		flake.style.background = "url('img/pasta.png')";
		flake.style['background-size'] = 'contain';
		flake.style['background-repeat'] = 'no-repeat';

		flake.style.left = x + 'px';
		flake.style.top = y;
		flake.classList.add("flake");

		flakes.push({
			el: flake,
			speed: speed,
			velY: speed,
			velX: 0,
			x: x,
			y: y,
			size: 2,
			stepSize: (Math.random() * 5) / 100,
			step: 0
		});
		docFrag.appendChild(flake);
	}

	document.body.appendChild(docFrag);
	snow();
};

document.addEventListener("mousemove", function(e) {
	var x = e.clientX,
		y = e.clientY,
		minDist = 150;

	for (var i = 0; i < flakes.length; i++) {
		var x2 = flakes[i].x,
			y2 = flakes[i].y;

		var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y));

		if (dist < minDist) {
			rad = Math.atan2(y2, x2), angle = rad / Math.PI * 180;

			flakes[i].velX = (x2 / dist) * 0.2;
			flakes[i].velY = (y2 / dist) * 0.2;

			flakes[i].x += flakes[i].velX;
			flakes[i].y += flakes[i].velY;
		} else {
			flakes[i].velY *= 0.9;
			flakes[i].velX
			if (flakes[i].velY <= flakes[i].speed) {
				flakes[i].velY = flakes[i].speed;
			}
		}
	}
});

function getDocHeight() {
	return $(document).height();
	// return Math.max(Math.max(document.body.scrollHeight, document.documentElement.scrollHeight), Math.max(document.body.offsetHeight, document.documentElement.offsetHeight), Math.max(document.body.clientHeight, document.documentElement.clientHeight));
};

$(document).ready(function() {
	flakes = [],
		bodyHeight = getDocHeight(),
		bodyWidth = document.body.offsetWidth;

	$('#snow-link').on('click', function(event) {
		event.preventDefault();
		init();
	});
});