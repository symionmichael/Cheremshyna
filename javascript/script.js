// Navigation scrolling
const buttons = document.querySelectorAll("nav ul li button");

buttons.forEach(button => {
    button.addEventListener("click", () =>{
        const targetId = button.dataset.target;
        const target = document.getElementById(targetId);

        target.scrollIntoView({ 
            behavior: "smooth",
            block: "start"
        });
    });
});

const galleryImage = document.getElementById("gallery-image");
const previousButton = document.querySelector(".gallery-button.previous");
const nextButton = document.querySelector(".gallery-button.next");

const galleryImages = [
    { src: "./images/image1.jpg", alt: "Cheremshyna Mini-Hotel" },
    { src: "./images/image2.jpg", alt: "Room at Cheremshyna Mini-Hotel" },
    { src: "./images/image3.jpg", alt: "Hotel surroundings in Velyatyno" },
    { src: "./images/image4.jpg", alt: "Relaxing area at Cheremshyna Mini-Hotel" }
];

let currentImage = 0;

function showImage(index) {
    currentImage = (index + galleryImages.length) % galleryImages.length;
    galleryImage.src = galleryImages[currentImage].src;
    galleryImage.alt = galleryImages[currentImage].alt;
}

previousButton.addEventListener("click", () => {
    showImage(currentImage - 1);
});

nextButton.addEventListener("click", () => {
    showImage(currentImage + 1);
});