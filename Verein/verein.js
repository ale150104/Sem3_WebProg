let currentSlide = 0;
const slides = document.querySelectorAll(".inner_box");

function showSlide(index) {
    slides.forEach(slide => slide.style.display = "none");
    slides[index].style.display = "block";
}

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);
