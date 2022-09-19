selectAnchorSetHref('#menuVideoBtn', './pages/speak100.html')
selectAnchorSetHref('#menuVocabularyBtn', './pages/glossary.html')
selectAnchorSetHref('#menuWordcardBtn', './pages/wordcard.html')
selectAnchorSetHref('#menuPracticeBtn', './pages/practice.html')

selectElement("#menuSetBtn").addEventListener('click', () => {
	localStorage.clear();
})