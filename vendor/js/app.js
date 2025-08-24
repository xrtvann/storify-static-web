document.addEventListener("DOMContentLoaded", function () {
  // Get elements
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const closeSidebarButton = document.getElementById("close-sidebar");
  const mobileSidebar = document.getElementById("mobile-sidebar");
  const overlay = document.getElementById("sidebar-overlay");

  // Function to open sidebar
  function openSidebar() {
    mobileSidebar.classList.remove("translate-x-full");
    overlay.classList.remove("opacity-0", "pointer-events-none");
    overlay.classList.add("opacity-50", "pointer-events-auto");
  }

  // Function to close sidebar
  function closeSidebar() {
    mobileSidebar.classList.add("translate-x-full");
    overlay.classList.remove("opacity-50", "pointer-events-auto");
    overlay.classList.add("opacity-0", "pointer-events-none");
  }

  // Event listeners
  mobileMenuButton.addEventListener("click", openSidebar);
  closeSidebarButton.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);
});
