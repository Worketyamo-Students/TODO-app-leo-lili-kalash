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
          ? "./assets/imgs/soleil.svg"
          : "./assets/imgs/lune.svg";
    });
  });




// option de cochage
let imagecoche=document.getElementById("inputcocher");
let input=document.getElementById("check_input");
input.addEventListener("input", function() {
  console.log(input.value.length);
  if (input.value.length > 4) {
    console.log("super")
    imagecoche.style.display="flex"

  } 
  else{
    imagecoche.style.display="none"
  }
});
  
