// Smooth-scroll navigation
const scrollButtons = document.querySelectorAll("[data-target]");
const scrollBehavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";

scrollButtons.forEach(button => {
    button.addEventListener("click", () => {
        const targetId = button.dataset.target;
        const target = document.getElementById(targetId);
        if (!target) return;

        target.scrollIntoView({
            behavior: scrollBehavior,
            block: "start"
        });
    });
});

// Highlight the current section in the nav bar
const navLinks = document.querySelectorAll("#nav-list button");
const sections = Array.from(navLinks)
    .map(button => document.getElementById(button.dataset.target))
    .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                navLinks.forEach(button => {
                    button.classList.toggle("active", button.dataset.target === entry.target.id);
                });
            });
        },
        { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach(section => observer.observe(section));
}

// Gallery carousel
const galleryImage = document.getElementById("gallery-image");
const galleryCaption = document.getElementById("gallery-caption");
const galleryDots = document.getElementById("gallery-dots");
const previousButton = document.querySelector(".gallery-button.previous");
const nextButton = document.querySelector(".gallery-button.next");

const galleryImages = [
    { src: "./images/image1.jpg", alt: "Cheremshyna Mini-Hotel", caption: "Cheremshyna Mini-Hotel" },
    { src: "./images/image2.jpg", alt: "Room at Cheremshyna Mini-Hotel", caption: "A Standard room" },
    { src: "./images/image3.jpg", alt: "Hotel surroundings in Velyatyno", caption: "Around the hotel" },
    { src: "./images/image4.jpg", alt: "Relaxing area at Cheremshyna Mini-Hotel", caption: "A place to relax" }
];

let currentImage = 0;

function buildDots() {
    if (!galleryDots) return;
    galleryDots.innerHTML = "";
    galleryImages.forEach((_, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.setAttribute("aria-label", `Show photo ${index + 1}`);
        dot.addEventListener("click", () => showImage(index));
        galleryDots.appendChild(dot);
    });
}

function showImage(index) {
    currentImage = (index + galleryImages.length) % galleryImages.length;
    const current = galleryImages[currentImage];

    galleryImage.src = current.src;
    galleryImage.alt = current.alt;
    if (galleryCaption) galleryCaption.textContent = current.caption;

    if (galleryDots) {
        Array.from(galleryDots.children).forEach((dot, index) => {
            dot.classList.toggle("active", index === currentImage);
        });
    }
}

if (previousButton && nextButton) {
    previousButton.addEventListener("click", () => showImage(currentImage - 1));
    nextButton.addEventListener("click", () => showImage(currentImage + 1));
    buildDots();
    showImage(0);
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}