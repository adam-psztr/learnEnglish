let videoElement = document.querySelector("main video");

let locHash = window.location.hash.split("");
locHash.shift();
let locHashNum = parseInt(locHash.join(""));

if(locHashNum==1){
	selectElement('#menuBackBtn').style.opacity = "0";
	}

document.querySelector('#menuBackBtn').addEventListener('click', (e) => {
	prevDef(e);
	if(locHashNum>1){
		window.location.href = '../pages/speak.html#' + (locHashNum - 1);
		location.reload();
		}
	}
);

selectAnchorSetHref('#menuHomeBtn', '../index.html');

document.querySelector('#menuForwardBtn').addEventListener('click', (e) => {
	prevDef(e);
	if(locHashNum<595){
		window.location.href = '../pages/speak.html#' + (locHashNum + 1);
		location.reload();
		}
	}
);

videoElement.setAttribute("src", allVideos[locHashNum]);

selectElement("main .vidContainer p").innerHTML = `${locHashNum} / <small>595</small>`;

videoElement.onloadeddata = () => {
	videoElement.currentTime= 12;
	if(data.indexOf(locHashNum) == -1) {
		data.push(locHashNum);
	}
	saveData();
};