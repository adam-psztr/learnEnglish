selectAnchorSetHref('#menuVideoBtn', './pages/speak100.html')
selectAnchorSetHref('#menuVocabularyBtn', './pages/glossary5.html#0')
selectAnchorSetHref('#menuWordcardBtn', './pages/wordcard.html')
selectAnchorSetHref('#menuPracticeBtn', './pages/practice.html')

selectElement("#menuSetBtn").addEventListener('click', () => {
	localStorage.clear();
})