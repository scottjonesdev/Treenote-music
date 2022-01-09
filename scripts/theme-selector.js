//Try to read from local storage, otherwise set to dark theme as default
let currentTheme = localStorage.getItem("storedTheme") || "dark";

const themeSelector = document.getElementById("theme-selector");

//set the theme
setTheme("dark", currentTheme);
themeSelector.value = currentTheme;

//add listenter to capture user selecting new theme
themeSelector.addEventListener("change", function(e) {
  const newTheme = e.currentTarget.value;
  //set new theme
  setTheme(currentTheme, newTheme);
});

function setTheme(oldTheme, newTheme) {
  const html = document.getElementsByTagName("html")[0];
  var themeColor;
  var banner;
  var mail;
  var logo;

  //determine new meta color value
  if(newTheme == 'dark'){
    themeColor = '#ff4a6a';
    banner = '/assets/svg/treenote-banner-pink.svg';
    mail = '/assets/svg/mail-pink.svg';
    logo = '/assets/svg/square-logo-pink.svg';

  }
  else if (newTheme == 'light'){
    themeColor = '#416e50';
    banner = '/assets/svg/treenote-banner.svg';
    mail = '/assets/svg/mail.svg';
    logo = '/assets/svg/square-logo.svg';
  }

  //update theme meta tag to match background of selected theme
  document.querySelector("meta[name='theme-color']").content = themeColor;

  //swap out images based on theme
  document.getElementById("header-banner").src = banner;
  document.getElementById("mail").src = mail;
  document.getElementById("treenote-logo").src = logo;

  //Remove old theme from html's class list
  html.classList.remove(oldTheme);

  //Add new theme to html's class list
  html.classList.add(newTheme);

  //set new theme as the current theme
  currentTheme = newTheme;

  //store new theme in local storage so browser remembers user's
  localStorage.setItem("storedTheme", newTheme);
}