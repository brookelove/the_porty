function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

function keepTheme() {
  let theme = localStorage.getItem("theme");
  if (localStorage.getItem("theme")) {
    // if (localStorage.getItem("theme") === "theme-dark") {
    //   setTheme("theme-dark");
    // } else if (localStorage.getItem("theme") === "theme-light") {
    //   setTheme("theme-light");
    // }
    switch (theme) {
      case "theme-dark":
        setTheme("theme-dark");
        break;
      case "theme-light":
        setTheme("theme-light");
        break;
      case "theme-pink":
        setTheme("theme-pink");
        break;
      case "theme-red":
        setTheme("theme-red");
        break;
      case "theme-orange":
        setTheme("theme-orange");
        break;
      default:
        setTheme("theme-dark");
        break;
    }
  } else {
    setTheme("theme-dark");
  }
}

module.exports = {
  setTheme,
  keepTheme,
};
