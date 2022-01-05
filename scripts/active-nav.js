currentNav = document.getElementsByClassName('nav-text');
	for(i = 0; i < currentNav.length; i++) { 
		if(document.location.href.indexOf(currentNav[i].href)>=0) {
		currentNav[i].classList.add("active");
	}
}