let videoElement = document.querySelector("main > video");

let locHash = window.location.hash.split("");
locHash.shift();
let locHashNum = parseInt(locHash.join(""));

selectAnchorSetHref('#menuHomeBtn', '../index.html');

videoElement.setAttribute("src", allVideos[locHashNum]);

videoElement.onloadeddata = () => {
	videoElement.currentTime= 12;
};