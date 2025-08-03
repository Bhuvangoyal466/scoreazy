// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const body = document.body;

    // Toggle mobile menu
    mobileMenuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("mobile-menu-active");
        mobileMenuToggle.classList.toggle("active");
        body.classList.toggle("menu-open");
    });

    // Close menu when clicking on a link
    const menuLinks = document.querySelectorAll(".nav-links a");
    menuLinks.forEach((link) => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("mobile-menu-active");
            mobileMenuToggle.classList.remove("active");
            body.classList.remove("menu-open");
        });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        const isClickInsideNav = navLinks.contains(event.target);
        const isClickOnToggle = mobileMenuToggle.contains(event.target);

        if (
            !isClickInsideNav &&
            !isClickOnToggle &&
            navLinks.classList.contains("mobile-menu-active")
        ) {
            navLinks.classList.remove("mobile-menu-active");
            mobileMenuToggle.classList.remove("active");
            body.classList.remove("menu-open");
        }
    });

    // Handle window resize
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            navLinks.classList.remove("mobile-menu-active");
            mobileMenuToggle.classList.remove("active");
            body.classList.remove("menu-open");
        }
    });
});
