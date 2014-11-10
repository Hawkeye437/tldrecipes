/* submit.js */

// bad practice but temporary for prototype
var HTML_INGROW = '<div class="ing-row"><div class="ing-cell"><input class="ing-num form-control" type="text" maxlength="2"></div><div class="ing-cell"><input class="ing-name form-control" type="text"></div></div>';

$("#ingAdd").click(function() {
	$(".ing-wr").append(HTML_INGROW);
});