function prevDef(event) {
	event.preventDefault();
};

function locHref(href) {
	setTimeout(()=>{
		window.location.href = href;
	},250);
};

function selectAnchorSetHref(selector, href) {
	document.querySelector(selector).addEventListener('click', (e) => {
		prevDef(e);
		locHref(href);
		}
	);
};

selectAnchorSetHref('#menuVideoBtn', './pages/speak.html')
selectAnchorSetHref('#menuVocabularyBtn', './pages/glossary.html')
selectAnchorSetHref('#menuWordcardBtn', './pages/wordcard.html')
selectAnchorSetHref('#menuPracticeBtn', './pages/practice.html')

