let locHashNum = parseInt(window.location.hash[1]);

let btnTextNum = [
	[1,5],[6,10],[11,15],[16,20],[21,25],[26,30],[31,35],[36,40],[41,45]
]

document.querySelector('#menuBackBtn').addEventListener('click', (e) => {
	prevDef(e);
	if(locHashNum>0){
		window.location.href = '../pages/glossary5.html#' + (locHashNum - 1);
		location.reload();
		}
	}
)

selectAnchorSetHref('#menuHomeBtn', '../index.html')

document.querySelector('#menuForwardBtn').addEventListener('click', (e) => {
	prevDef(e);
	if(locHashNum<1){
		window.location.href = '../pages/glossary5.html#' + (locHashNum + 1);
		location.reload();
		}
	}
)

function addElement(i) {
	let newPar = document.createElement("p");
	newPar.innerHTML = (locHashNum * 45 + btnTextNum[i][0]) + " <span>-</span> " + (locHashNum * 45 + btnTextNum[i][1]);
	menuBtn[i].appendChild(newPar);
	let selector = '#no' + (1 + i);
	let link = '../pages/glossary.html#' + (locHashNum * 9 + i +1);
	selectAnchorSetHref(selector, link)
}

for(let i = 0; i < 9; i++) {
	addElement(i);
}
