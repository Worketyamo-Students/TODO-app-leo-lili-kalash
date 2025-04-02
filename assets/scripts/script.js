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
let text=document.querySelectorAll(".text");
input.addEventListener("input", function() {
  if (input.value.length > 4) {
    imagecoche.style.display="flex"

  } 
  else{
    imagecoche.style.display="none"
  }
});
// option de recuperation de la valeur de l'input au clic
input.addEventListener('keydown', function(event) {
  if (event.key === "Enter") {
    console.log(input.value)
    input.value=""
    imagecoche.style.display="none"
  }
})

  
