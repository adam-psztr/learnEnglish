selectAnchorSetHref('#menuBackBtn', '../index.html')
selectAnchorSetHref('#menuHomeBtn', '../index.html')

document.querySelector('#menuForwardBtn').addEventListener('click', (e) => {
	prevDef(e);
	// if(locHashNum<5){
	// 	window.location.href = '../pages/speak10.html#' + (locHashNum + 1);
	// 	location.reload();
	// 	}
	}
)

let content = selectElement(".content");

content.addEventListener('click', ()=>{
	content.classList.toggle("clicked");
})