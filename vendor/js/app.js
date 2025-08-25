document.addEventListener("DOMContentLoaded", function () {
  // Get elements
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const closeSidebarButton = document.getElementById("close-sidebar");
  const mobileSidebar = document.getElementById("mobile-sidebar");
  const overlay = document.getElementById("sidebar-overlay");

  // Cart elements
  const cartToggleButton = document.getElementById("cart-toggle-button");
  const cartSidebar = document.getElementById("cart-sidebar");
  const closeCartButton = document.getElementById("close-cart-sidebar");
  const continueShoppingButton = document.getElementById("continue-shopping");
  const mobileViewCartButton = document.getElementById("mobile-view-cart");
  const fullscreenCartButton = document.getElementById("fullscreen-sidebar");

  // Function to open mobile menu sidebar
  function openMobileSidebar() {
    mobileSidebar.classList.remove("translate-x-full");
    overlay.classList.remove("opacity-0", "pointer-events-none");
    overlay.classList.add("opacity-50", "pointer-events-auto");
  }

  // Function to close mobile menu sidebar
  function closeMobileSidebar() {
    mobileSidebar.classList.add("translate-x-full");
    overlay.classList.remove("opacity-50", "pointer-events-auto");
    overlay.classList.add("opacity-0", "pointer-events-none");
  }

  // Function to open cart sidebar
  function openCartSidebar() {
    cartSidebar.classList.remove("translate-x-full");
    overlay.classList.remove("opacity-0", "pointer-events-none");
    overlay.classList.add("opacity-50", "pointer-events-auto");
  }

  // Function to close cart sidebar
  function closeCartSidebar() {
    cartSidebar.classList.add("translate-x-full");
    overlay.classList.remove("opacity-50", "pointer-events-auto");
    overlay.classList.add("opacity-0", "pointer-events-none");
  }

  // Function to toggle cart fullscreen
  function toggleCartFullscreen() {
    if (cartSidebar.classList.contains("w-full")) {
      // Exit fullscreen - return to normal width
      cartSidebar.classList.remove("w-full");
      cartSidebar.classList.add("w-100");
      fullscreenCartButton.innerHTML =
        '<i class="bx bx-fullscreen text-2xl"></i>';
    } else {
      // Enter fullscreen - expand to full width
      cartSidebar.classList.remove("w-100");
      cartSidebar.classList.add("w-full");
      fullscreenCartButton.innerHTML =
        '<i class="bx bx-shrink-right text-2xl"></i>';
    }
  }

  // Function to close all sidebars
  function closeAllSidebars() {
    closeMobileSidebar();
    closeCartSidebar();
  }

  // Event listeners for mobile menu
  mobileMenuButton.addEventListener("click", openMobileSidebar);
  closeSidebarButton.addEventListener("click", closeMobileSidebar);

  // Event listeners for cart
  cartToggleButton.addEventListener("click", openCartSidebar);
  if (closeCartButton) {
    closeCartButton.addEventListener("click", closeCartSidebar);
  }
  if (continueShoppingButton) {
    continueShoppingButton.addEventListener("click", closeCartSidebar);
  }
  if (mobileViewCartButton) {
    mobileViewCartButton.addEventListener("click", function (e) {
      e.preventDefault();
      openCartSidebar();
    });
  }
  if (fullscreenCartButton) {
    fullscreenCartButton.addEventListener("click", toggleCartFullscreen);
  }

  // Overlay closes all sidebars
  overlay.addEventListener("click", closeAllSidebars);
});
