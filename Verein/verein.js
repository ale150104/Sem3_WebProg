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

document.querySelectorAll(".inner_box").forEach(box => {
    box.addEventListener("click", () => {
        const confettiSettings = { target: 'confetti-canvas' };
        const confetti = new ConfettiGenerator(confettiSettings);
        
        confetti.render(); // Startet das Konfetti

        setTimeout(() => confetti.clear(), 10000); // Stoppt das Konfetti nach 5 Sekunden
    });
});
