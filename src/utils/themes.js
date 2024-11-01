function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

function keepTheme() {
  let theme = localStorage.getItem("theme");
  if (localStorage.getItem("theme")) {
    switch (theme) {
      case "theme--clean":
        setTheme("theme--clean");
        break;
      case "theme--light":
        setTheme("theme--light");
        break;
      case "theme--dark":
        setTheme("theme--dark"); // Corrected this line
        break;
      default:
        setTheme("theme--dark");
        break;
    }
  } else {
    setTheme("theme--clean");
  }
  console.log(theme);
}

module.exports = {
  setTheme,
  keepTheme,
};
