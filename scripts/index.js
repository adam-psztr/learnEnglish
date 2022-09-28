selectAnchorSetHref('#menuVideoBtn', './pages/speak100.html')
selectAnchorSetHref('#menuVocabularyBtn', './pages/glossary5.html#0')
selectAnchorSetHref('#menuWordcardBtn', './pages/wordcard.html')
selectAnchorSetHref('#menuPracticeBtn', './pages/practice.html')

selectElement("#menuSetBtn").addEventListener('click', () => {
	localStorage.clear();
});



function colorRotate() {
	for (let i=0; i<=selectElement("h1").innerText.length+1; i++) {
		setTimeout(function(){
			document.querySelectorAll("main h1 span")[i==0||i==1?19:i-2].style.color = "var(--main-color-light)";
			document.querySelectorAll("main h1 span")[i==20||i==21?5:i].style.color = "var(--theme-yellow-green-primary)";
		}, 200 + i * 200);
	}
};

colorRotate();
setInterval(colorRotate, 4400);

