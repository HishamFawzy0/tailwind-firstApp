document.documentElement.classList.toggle(
  "dark",
  localStorage.currentTheme === "dark" ||
    (("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
);
if (localStorage.currentTheme === "dark") {
  document.getElementById("choose-me").checked = true;
    document.getElementById("dark-mode-label").innerText = "Dark Mode";
}else{
    document.getElementById("dark-mode-label").innerText = "Light Mode";
}

document.getElementById("choose-me").addEventListener("change", () => {
  if (document.getElementById("choose-me").checked) {
    localStorage.currentTheme = "dark";
    document.getElementById("dark-mode-label").innerText = "Dark Mode";

  } else {
    localStorage.currentTheme = "light";
    document.getElementById("dark-mode-label").innerText = "Light Mode";

  }

  document.documentElement.classList.toggle(
    "dark",
    localStorage.currentTheme === "dark" ||
      (("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
});
