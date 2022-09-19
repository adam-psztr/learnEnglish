function prevDef(event) {
	event.preventDefault();
};

function locHref(href) {
	setTimeout(()=>{
		window.location.href = href;
	},300);
};

selectElement = selector => document.querySelector(selector);

function selectAnchorSetHref(selector, href) {
	let clickedItem = false;
	document.querySelector(selector).addEventListener('click', (e) => {
		prevDef(e);
		if(!clickedItem){
			locHref(href);
			clickedItem = true;
		};
		}
	);
};

let menuBtn = document.querySelectorAll("main .menuBtn")

if(!localStorage.getItem("played")){
	localStorage.setItem("played","[]");
};

let data = localStorage.getItem("played");

data = JSON.parse(data);

function saveData() {
	localStorage.setItem("played", JSON.stringify(data));
}

let progressBar = (data.length / 595 * 100).toFixed(2);
selectElement("header .innerbar").style.width = progressBar + "%";
