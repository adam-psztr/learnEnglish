let locHash = window.location.hash.split("");
locHash.shift();
let locHashNum = parseInt(locHash.join(""));

let menuBtn = document.querySelectorAll("main .menuBtn")

document.querySelector('#menuBackBtn').addEventListener('click', (e) => {
	prevDef(e);
	if(locHashNum>1){
		window.location.href = '../pages/speak1.html#' + (locHashNum - 10);
		location.reload();
		}
	}
)

selectAnchorSetHref('#menuHomeBtn', '../index.html')

document.querySelector('#menuForwardBtn').addEventListener('click', (e) => {
	prevDef(e);
	if(locHashNum<591){
		window.location.href = '../pages/speak1.html#' + (locHashNum + 10);
		location.reload();
		}
	}
)

function addElement(i) {
	let newPar = document.createElement("p");
	newPar.innerHTML = locHashNum + i;
	menuBtn[i].appendChild(newPar);
	menuBtn[i].setAttribute("href", "");
	let selector = '#no' + (1 + i);
	let link = '../pages/speak.html#' + (locHashNum + i);
	selectAnchorSetHref(selector, link)
}

for(let i = 0; i < 10; i++) {
	addElement(i);
}

if(locHashNum == 591){
	for(let i = 5; i < 10; i++) {
		menuBtn[i].remove()
	}
}

