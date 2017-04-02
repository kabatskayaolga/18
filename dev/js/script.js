var buttonSearch = document.querySelector(".search-button-open");
var formSearch = document.querySelector(".search-form");
buttonSearch.onclick = function(){
	this.style.display = 'none';
	formSearch.style.display = 'flex';
};
// window.onload = function() {
var slides = document.getElementsByClassName('slides');
for (var i = 0; i < slides.length; i++) {
	var slidesChildrenLength = slides[i].children.length;
	var slidesChildrenWidth = slides[i].children[i].width;
	slides[i].style.width = slidesChildrenWidth*slidesChildrenLength + 'px';
}

// };
var arrowRight = document.getElementsByClassName('right');
var arrowLeft = document.querySelectorAll('.left');


for (var i = 0; i < arrowRight.length; i++) {
	arrowRight[i].onclick = function() {
		var sliderInner = this.previousSibling;
		var sliderImagesLength = sliderInner.children.length;
		var currentMargin = parseInt(sliderInner.style.marginLeft || 0);
		if ((sliderImagesLength-1)*-198 != currentMargin & currentMargin > -1188) {
			sliderInner.style.marginLeft = currentMargin - 198 + 'px';
		} else {
			sliderInner.style.marginLeft = 0;
		}
	
	}
}

for (var i = 0; i < arrowLeft.length; i++) {
	arrowLeft[i].onclick = function() {
		var sliderInner = this.nextSibling;
		var sliderImagesLength = sliderInner.children.length;
		var currentMargin = parseInt(sliderInner.style.marginLeft || 0);
		if (currentMargin) {
			sliderInner.style.marginLeft = currentMargin + 198 + 'px';
			console.log(sliderInner.style.marginLeft = currentMargin + 198 + 'px')	
		} else {
			sliderInner.style.marginLeft = -1188 + 'px';
		}
	}
}