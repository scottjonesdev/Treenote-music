currentNav = document.getElementsByClassName('nav-text');
homeNav = document.getElementById('home');

for(i = 0; i < currentNav.length; i++) { 
	if(document.location.href.indexOf(currentNav[i].href) >= 0) {
		homeNav.classList.remove("active");
		currentNav[i].classList.add("active");
	}
}