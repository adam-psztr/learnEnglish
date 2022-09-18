let locHashNum = parseInt(window.location.hash[1]);

let menuBtn = document.querySelectorAll("main .menuBtn")

let btnTextNum = [
	[1,10],[11,20],[21,30],[31,40],[41,50],[51,60],[61,70],[71,80],[81,90],[91,100]
]

document.querySelector('#menuBackBtn').addEventListener('click', (e) => {
	prevDef(e);
	if(locHashNum>0){
		window.location.href = '../pages/speak10.html#' + (locHashNum - 1);
		location.reload();
		}
	}
)

selectAnchorSetHref('#menuHomeBtn', '../index.html')

document.querySelector('#menuForwardBtn').addEventListener('click', (e) => {
	prevDef(e);
	if(locHashNum<5){
		window.location.href = '../pages/speak10.html#' + (locHashNum + 1);
		location.reload();
		}
	}
)

function addElement(i) {
	let newPar = document.createElement("p");
	newPar.innerHTML = (locHashNum * 100 + btnTextNum[i][0]) + " <span>-</span> " + (locHashNum != 5 ? (locHashNum * 100 + btnTextNum[i][1]) : (locHashNum * 100 -5 + btnTextNum[i][1]));
	menuBtn[i].appendChild(newPar);
	let selector = '#no' + (1 + i);
	let link = '../pages/speak1.html#' + (locHashNum * 100 + btnTextNum[i][0])
	selectAnchorSetHref(selector, link)
}

for(let i = 0; i < btnTextNum.length; i++) {
	addElement(i);
}