function prevDef(event) {
	event.preventDefault();
};

function locHref(href) {
	setTimeout(()=>{
		window.location.href = href;
	},300);
};

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