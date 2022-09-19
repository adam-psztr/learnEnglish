let locHashNum = parseInt(window.location.hash[1]);

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
	newPar.innerHTML = (locHashNum * 100 + btnTextNum[i][0]) + " <span>-</span> " + (locHashNum * 100 + btnTextNum[i][1]);
	menuBtn[i].appendChild(newPar);
	let selector = '#no' + (1 + i);
	let link = '../pages/speak1.html#' + (locHashNum * 100 + btnTextNum[i][0])
	selectAnchorSetHref(selector, link)
}

for(let i = 0; i < btnTextNum.length; i++) {
	addElement(i);
}

if(locHashNum == 5) {
	selectElement(".menuBtn:last-child p").childNodes[2].data = " 595";
};

let n1n10 = true;
let n11n20 = true;
let n21n30 = true;
let n31n40 = true;
let n41n50 = true;
let n51n60 = true;
let n61n70 = true;
let n71n80 = true;
let n81n90 = true;
let n91n100 = true;

for(let i = 1; i < 11; i++) {
	if(data.indexOf(i + locHashNum * 100) == -1) {
		n1n10 = false;
		break;
	}
}

for(let i = 11; i < 21; i++) {
	if(data.indexOf(i + locHashNum * 100) == -1) {
		n11n20 = false;
		break;
	}
}

for(let i = 21; i < 31; i++) {
	if(data.indexOf(i + locHashNum * 100) == -1) {
		n21n30 = false;
		break;
	}
}

for(let i = 31; i < 41; i++) {
	if(data.indexOf(i + locHashNum * 100) == -1) {
		n31n40 = false;
		break;
	}
}

for(let i = 41; i < 51; i++) {
	if(data.indexOf(i + locHashNum * 100) == -1) {
		n41n50 = false;
		break;
	}
}

for(let i = 51; i < 61; i++) {
	if(data.indexOf(i + locHashNum * 100) == -1) {
		n51n60 = false;
		break;
	}
}

for(let i = 61; i < 71; i++) {
	if(data.indexOf(i + locHashNum * 100) == -1) {
		n61n70 = false;
		break;
	}
}

for(let i = 71; i < 81; i++) {
	if(data.indexOf(i + locHashNum * 100) == -1) {
		n71n80 = false;
		break;
	}
}

for(let i = 81; i < 91; i++) {
	if(data.indexOf(i + locHashNum * 100) == -1) {
		n81n90 = false;
		break;
	}
}

if(locHashNum != 5) {
	for(let i = 91; i < 101; i++) {
		if(data.indexOf(i + locHashNum * 100) == -1) {
			n91n100 = false;
			break;
		}
	}
} else {
	for(let i = 591; i < 596; i++) {
		if(data.indexOf(i) == -1) {
			n91n100 = false;
			break;
		}
	}
};

n1n10 == true ? selectElement("main #no1 span").classList.add("done") : "";
n11n20 == true ? selectElement("main #no2 span").classList.add("done") : "";
n21n30 == true ? selectElement("main #no3 span").classList.add("done") : "";
n31n40 == true ? selectElement("main #no4 span").classList.add("done") : "";
n41n50 == true ? selectElement("main #no5 span").classList.add("done") : "";
n51n60 == true ? selectElement("main #no6 span").classList.add("done") : "";
n61n70 == true ? selectElement("main #no7 span").classList.add("done") : "";
n71n80 == true ? selectElement("main #no8 span").classList.add("done") : "";
n81n90 == true ? selectElement("main #no9 span").classList.add("done") : "";
n91n100 == true ? selectElement("main #no10 span").classList.add("done") : "";