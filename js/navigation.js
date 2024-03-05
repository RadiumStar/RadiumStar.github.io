document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      const dropdownMenu = this.nextElementSibling;
      dropdownMenu.classList.toggle("active");
    });
  });
});
