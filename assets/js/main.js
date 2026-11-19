(function () {
  "use strict";

  // Header turns solid once the visitor scrolls past the top of the hero.
  var header = document.getElementById("site-header");
  function updateHeader() {
    header.classList.toggle("is-solid", window.scrollY > 40);
  }
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  // Mobile menu.
  var toggle = document.getElementById("nav-toggle");
  var list = document.getElementById("nav-list");
  function setMenu(open) {
    list.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "Close" : "Menu";
  }
  toggle.addEventListener("click", function () {
    setMenu(toggle.getAttribute("aria-expanded") !== "true");
  });
  list.addEventListener("click", function (e) {
    if (e.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenu(false);
  });

  // Lightbox for the campaign pieces and screenshots.
  var box = document.getElementById("lightbox");
  var boxImg = document.getElementById("lightbox-img");
  var boxCaption = document.getElementById("lightbox-caption");

  if (box && typeof box.showModal === "function") {
    document.querySelectorAll("[data-lightbox]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        boxImg.src = btn.getAttribute("data-lightbox");
        boxImg.alt = btn.getAttribute("data-alt") || "";
        boxCaption.textContent = btn.getAttribute("data-caption") || "";
        box.showModal();
      });
    });
    // Clicking the dark area outside the image closes it.
    box.addEventListener("click", function (e) {
      if (e.target === box) box.close();
    });
  }
})();
