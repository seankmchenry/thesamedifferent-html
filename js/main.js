/* Preview */
var preview = document.getElementById('preview');
var image = new Image();
image.onload = function() {
	preview.appendChild(image);
}
image.src = 'img/preview.gif';
