const getDeviceType = () => {
  const ua = window.navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    localStorage.setItem("deviceType","tablet");
  } else if (/Mobile|iPhone|iPod|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
		localStorage.setItem("deviceType","mobile");
  } else {
		localStorage.setItem("deviceType","desktop");
	}
};

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

if(localStorage.getItem("mainStyle")){
	let color = localStorage.getItem("mainStyle");
	document.documentElement.style.setProperty('--main-color-theme-primary', `var(--theme-${color}-primary`);
	document.documentElement.style.setProperty('--main-color-theme-secondary', `var(--theme-${color}-secondary`);
};

let language = localStorage.getItem("mainLang") || "hun";

let menuBtn = document.querySelectorAll("main .menuBtn")

if(!localStorage.getItem("played")){
	localStorage.setItem("played","[]");
};

if(!localStorage.getItem("deviceType")){
	getDeviceType();
};

let data = localStorage.getItem("played");
let deviceType = localStorage.getItem("deviceType");

selectElement("body").classList.add(deviceType);

data = JSON.parse(data);

function saveData() {
	localStorage.setItem("played", JSON.stringify(data));
}

let progressBar = (data.length / 595 * 100).toFixed(2);
selectElement("header .innerbar").style.width = progressBar + "%";
