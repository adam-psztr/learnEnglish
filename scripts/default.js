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

selectAnchorSetHref('#menuVideoBtn', './pages/speak.html')
selectAnchorSetHref('#menuVocabularyBtn', './pages/glossary.html')
selectAnchorSetHref('#menuWordcardBtn', './pages/wordcard.html')
selectAnchorSetHref('#menuPracticeBtn', './pages/practice.html')

