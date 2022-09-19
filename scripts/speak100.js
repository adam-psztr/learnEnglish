selectAnchorSetHref('#no1', '../pages/speak10.html#0')
selectAnchorSetHref('#no2', '../pages/speak10.html#1')
selectAnchorSetHref('#no3', '../pages/speak10.html#2')
selectAnchorSetHref('#no4', '../pages/speak10.html#3')
selectAnchorSetHref('#no5', '../pages/speak10.html#4')
selectAnchorSetHref('#no6', '../pages/speak10.html#5')
selectAnchorSetHref('#menuBackBtn', '../index.html')
selectAnchorSetHref('#menuHomeBtn', '../index.html')

let n1n100 = true;
let n101n200 = true;
let n201n300 = true;
let n301n400 = true;
let n401n500 = true;
let n501n595 = true;

for(let i = 1; i < 101; i++) {
	if(data.indexOf(i) == -1) {
		n1n100 = false;
		break;
	}
}

for(let i = 101; i < 201; i++) {
	if(data.indexOf(i) == -1) {
		n101n200 = false;
		break;
	}
}

for(let i = 201; i < 301; i++) {
	if(data.indexOf(i) == -1) {
		n201n300 = false;
		break;
	}
}

for(let i = 301; i < 401; i++) {
	if(data.indexOf(i) == -1) {
		n301n400 = false;
		break;
	}
}

for(let i = 401; i < 501; i++) {
	if(data.indexOf(i) == -1) {
		n401n500 = false;
		break;
	}
}

for(let i = 501; i <= 595; i++) {
	if(data.indexOf(i) == -1) {
		n501n595 = false;
		break;
	}
}

n1n100 == true ? selectElement("main #no1 span").classList.add("done") : "";
n101n200 == true ? selectElement("main #no2 span").classList.add("done") : "";
n201n300 == true ? selectElement("main #no3 span").classList.add("done") : "";
n301n400 == true ? selectElement("main #no4 span").classList.add("done") : "";
n401n500 == true ? selectElement("main #no5 span").classList.add("done") : "";
n501n595 == true ? selectElement("main #no6 span").classList.add("done") : "";