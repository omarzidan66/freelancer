// function toggleMenu() {
//   const menu = document.querySelector(".menu");
//   menu.classList.toggle("hidden");
// }
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const iconOpen = document.getElementById("icon-open");
const iconClose = document.getElementById("icon-close");

mobileMenuButton.addEventListener("click", () => {
  const isExpanded =
    mobileMenuButton.getAttribute("aria-expanded") === "true" || false;
  mobileMenuButton.setAttribute("aria-expanded", !isExpanded);
  mobileMenu.classList.toggle("hidden");

  // Toggle icons
  iconOpen.classList.toggle("hidden");
  iconOpen.classList.toggle("block"); // Ensure it becomes block if it was hidden (or vice-versa)
  iconClose.classList.toggle("hidden");
  iconClose.classList.toggle("block"); // Ensure it becomes block if it was hidden (or vice-versa)
});
