/* submit.js */

// bad practice but temporary for prototype
var HTML_INGROW = '<div class="ing-row"><div class="ing-cell"><input class="ing-num form-control" type="text" maxlength="2"></div><div class="ing-cell"><input class="ing-name form-control" type="text"></div></div>';
var HTML_STEPROW1 = '<div class="ing-row"><div class="ing-cell"><span class="step-icon">';
var HTML_STEPROW2 = '</span></div><div class="ing-cell"><textarea class="ing-name step-cell form-control" type="textarea" rows="3"></textarea></div></div>';

var num = 3;

$("#ingAdd").click(function() {
	$(".ing-wr").append(HTML_INGROW);
});

$("#stepAdd").click(function() {
	num++;
	$(".ing-wr").append(HTML_STEPROW1 + num + HTML_STEPROW2);
});

$('.dropdown-menu li a').click(function (e) {
    var newHeading = $(this).text();
    var $heading = $('.dropdown > button');
    var $caret = $('.caret', $heading);
    $heading.html(newHeading + ' ').append($caret);
});

function createUploader() {
	var thumbnailuploader = new qq.FineUploader({
	  element: document.getElementById('thumbnail-fine-uploader'),
	  template: "qq-simple-thumbnails-template",
	  thumbnails: {
	      placeholders: {
	        waitingPath: "css/placeholders/waiting-generic.png",
	        notAvailablePath: "css/placeholders/not_available-generic.png"
	      }
	  },
	  validation: {
	      allowedExtensions: ['jpeg', 'jpg', 'gif', 'png']
	  }
	});
}

var thumbnailuploader = new qq.FineUploader({
    template: "qq-simple-thumbnails-template",
    element: document.getElementById("thumbnail-fine-uploader"),
    request: {
        endpoint: 'server/success.html'
    },
    validation: {
        allowedExtensions: ['jpeg', 'jpg', 'gif', 'png']
    },
    debug: true,
    demoMode: true // Undocumented -> Only for the gh-pages demo website
});
