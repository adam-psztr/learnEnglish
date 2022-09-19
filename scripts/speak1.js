let locHash = window.location.hash.split("");
locHash.shift();
let locHashNum = parseInt(locHash.join(""));

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

let variables = [true,true,true,true,true,true,true,true,true,true,];

for(let i = 0; i < 10; i++) {
	if(data.indexOf(i + locHashNum) == -1) {
		variables[i] = false;
	}
}

let n1n = variables[0];
let n2n = variables[1];
let n3n = variables[2];
let n4n = variables[3];
let n5n = variables[4];
let n6n = variables[5];
let n7n = variables[6];
let n8n = variables[7];
let n9n = variables[8];
let n10n = variables[9];

n1n == true ? selectElement("main #no1 span").classList.add("done") : "";
n2n == true ? selectElement("main #no2 span").classList.add("done") : "";
n3n == true ? selectElement("main #no3 span").classList.add("done") : "";
n4n == true ? selectElement("main #no4 span").classList.add("done") : "";
n5n == true ? selectElement("main #no5 span").classList.add("done") : "";
n6n == true ? selectElement("main #no6 span").classList.add("done") : "";
n7n == true ? selectElement("main #no7 span").classList.add("done") : "";
n8n == true ? selectElement("main #no8 span").classList.add("done") : "";
n9n == true ? selectElement("main #no9 span").classList.add("done") : "";
n10n == true ? selectElement("main #no10 span").classList.add("done") : "";