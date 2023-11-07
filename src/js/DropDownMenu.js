document.addEventListener("DOMContentLoaded", function () {
    const userPhoto = document.getElementById("userPhoto");
    const dropdownMenu = document.querySelector(".dropdown-menu");
  
    userPhoto.addEventListener("click", () => {
      dropdownMenu.classList.toggle("show-dropdown");
    });
  });
  