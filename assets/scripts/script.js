document.addEventListener("DOMContentLoaded", () => {
  const darkModeButton = document.querySelector(".dark_mode");
  let currentTheme = localStorage.getItem("theme") || "light";

  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    darkModeButton.src = "";
  }

  darkModeButton.addEventListener("click", () => {
    const newTheme =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    darkModeButton.src =
      newTheme === "dark"
        ? "./assets/imgs/soleil.jpg"
        : "./assets/imgs/lune.svg";
  });
});
