// Mobile Menu Toggle
document.querySelector(".mobile-menu").addEventListener("click", function () {
  document.querySelector("nav").classList.toggle("show");
});

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href") === "#") return;

    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
      });

      // Close mobile menu if open
      document.querySelector("nav").classList.remove("show");
    }
  });
});

// Hero buttons functionality
document
  .querySelector(".hero .btn-secondary")
  .addEventListener("click", function () {
    document.querySelector("#services").scrollIntoView({
      behavior: "smooth",
    });
  });
