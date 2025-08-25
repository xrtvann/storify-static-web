document.addEventListener("DOMContentLoaded", function () {
  // Get elements using querySelector to avoid ID conflicts
  const mobileMenuButton = document.querySelector("#mobile-menu-button");
  const closeSidebarButton = document.querySelector("#close-sidebar");
  const mobileSidebar = document.querySelector("#mobile-sidebar");
  const overlay = document.querySelector("#sidebar-overlay");

  // Cart elements
  const cartToggleButton = document.querySelector("#cart-toggle-button");
  const cartSidebar = document.querySelector("#cart-sidebar");
  const closeCartButton = document.querySelector("#close-cart-sidebar");
  const continueShoppingButton = document.querySelector("#continue-shopping");
  const mobileViewCartButton = document.querySelector("#mobile-view-cart");
  const fullscreenCartButton = document.querySelector("#fullscreen-sidebar");

  // Function to open mobile menu sidebar
  function openMobileSidebar() {
    if (mobileSidebar && overlay) {
      mobileSidebar.classList.remove("translate-x-full");
      overlay.classList.remove("opacity-0", "pointer-events-none");
      overlay.classList.add("opacity-50", "pointer-events-auto");
    }
  }

  // Function to close mobile menu sidebar
  function closeMobileSidebar() {
    if (mobileSidebar && overlay) {
      mobileSidebar.classList.add("translate-x-full");
      overlay.classList.remove("opacity-50", "pointer-events-auto");
      overlay.classList.add("opacity-0", "pointer-events-none");
    }
  }

  // Function to open cart sidebar
  function openCartSidebar() {
    if (cartSidebar && overlay) {
      cartSidebar.classList.remove("translate-x-full");
      overlay.classList.remove("opacity-0", "pointer-events-none");
      overlay.classList.add("opacity-50", "pointer-events-auto");
    }
  }

  // Function to close cart sidebar
  function closeCartSidebar() {
    if (cartSidebar && overlay) {
      cartSidebar.classList.add("translate-x-full");
      overlay.classList.remove("opacity-50", "pointer-events-auto");
      overlay.classList.add("opacity-0", "pointer-events-none");
    }
  }

  // Function to toggle cart fullscreen
  function toggleCartFullscreen() {
    if (!cartSidebar || !fullscreenCartButton) return;

    if (cartSidebar.classList.contains("w-full")) {
      // Exit fullscreen - return to responsive width
      cartSidebar.classList.remove("w-full");
      cartSidebar.classList.add("w-80", "md:w-100");
      fullscreenCartButton.innerHTML =
        '<i class="bx bx-fullscreen text-2xl"></i>';
    } else {
      // Enter fullscreen - expand to full width
      cartSidebar.classList.remove("w-80", "md:w-100");
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

  // Event listeners for mobile menu - with null checks
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener("click", openMobileSidebar);
  }
  if (closeSidebarButton) {
    closeSidebarButton.addEventListener("click", closeMobileSidebar);
  }

  // Event listeners for cart - with null checks
  if (cartToggleButton) {
    cartToggleButton.addEventListener("click", openCartSidebar);
  }
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
  if (overlay) {
    overlay.addEventListener("click", closeAllSidebars);
  }
});
