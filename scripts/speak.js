selectAnchorSetHref('#menuHomeBtn', '../index.html');

document.querySelector("main video").setAttribute("src", allVideos[1]);


document.querySelector("main > video").onloadeddata = () => {
	document.querySelector("main > video").currentTime= 12;
};