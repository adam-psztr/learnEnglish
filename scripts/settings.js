selectAnchorSetHref('#menuHomeBtn', '../index.html');

function setStyle(color) {
	document.documentElement.style.setProperty('--main-color-theme-primary', `var(--theme-${color}-primary`);
	document.documentElement.style.setProperty('--main-color-theme-secondary', `var(--theme-${color}-secondary`);
	localStorage.setItem("mainStyle", color)
}

document.querySelector("#no1").addEventListener("click", () => {setStyle("bright-yellow-crayola")});
document.querySelector("#no2").addEventListener("click", () => {setStyle("fiery-rose")});
document.querySelector("#no3").addEventListener("click", () => {setStyle("lavender-floral")});
document.querySelector("#no4").addEventListener("click", () => {setStyle("lemon-yellow")});
document.querySelector("#no5").addEventListener("click", () => {setStyle("mauvelous")});
document.querySelector("#no6").addEventListener("click", () => {setStyle("morning-blue")});
document.querySelector("#no7").addEventListener("click", () => {setStyle("red-salsa")});
document.querySelector("#no8").addEventListener("click", () => {setStyle("sky-blue-crayola")});
document.querySelector("#no9").addEventListener("click", () => {setStyle("turquoise")});
document.querySelector("#no10").addEventListener("click", () => {setStyle("yellow-green")});

