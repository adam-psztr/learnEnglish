let videoElement = document.querySelector("main video");
let videoContainerElement = document.querySelector("main .vidContainer");

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

if(locHashNum%5==0 && locHashNum<91) {
	let newPar = document.createElement("a");
	newPar.innerText = "szószedet";
	newPar.style.padding = "1rem";
	newPar.style.fontWeight = "500";
	newPar.style.letterSpacing = ".1rem";
	newPar.style.position = "absolute";
	newPar.style.left = "50%";
	newPar.style.transform = "translate(-50%)";
	newPar.setAttribute("href", "#");
	videoContainerElement.appendChild(newPar);
	selectAnchorSetHref("main .vidContainer a", ('../pages/glossary.html#' + (locHashNum / 5)))
}
