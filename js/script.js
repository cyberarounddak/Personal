
// =========================
// Mobile Navigation
// =========================
const nav = document.querySelector(".nav-links");
function toggleMenu() {
    nav.classList.toggle("show");
}

// =========================
// Close Menu After Clicking
// =========================
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("show");
    });
});

// =========================
// Current Year
// =========================
const year = document.querySelector("#year");
if (year) {
    year.textContent = new Date().getFullYear();
}
