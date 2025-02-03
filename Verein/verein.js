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

document.querySelectorAll(".Meisterschale, .DFB-Pokal, .DFL-Ligapokal, .UEFA-Pokal, .DFL-Supercup").forEach(box => {
    box.addEventListener("click", () => {
        const confettiSettings = { target: 'confetti-canvas' };
        const confetti = new ConfettiGenerator(confettiSettings);
        
        confetti.render(); // Startet das Konfetti

        setTimeout(() => confetti.clear(), 3000); // Stoppt das Konfetti nach 5 Sekunden
    });
});

document.addEventListener("DOMContentLoaded", () => {
    fetchWeather();
});

async function fetchWeather() {
    const apiKey = "b53293a9480a78a2c8a2a0495f9e6869"; // Niemals öffentlich lassen!
    const lat = "51.5548";
    const lon = "7.0676";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=de&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP-Fehler! Status: ${response.status}`);

        const data = await response.json();
        console.log("Wetterdaten:", data); // Debugging

        if (!data.main || !data.weather || !data.wind) throw new Error("Ungültige Wetterdaten erhalten");

        updateWeatherUI(data);

    } catch (error) {
        console.error("Fehler beim Abrufen der Wetterdaten:", error);
        showError("Fehler beim Laden der Wetterdaten");
    }
}

function updateWeatherUI(data) {
    setTextContent("temperature", `${data.main.temp}°C`);
    setTextContent("weather", data.weather[0].description);
    setTextContent("rain", data.rain?.["1h"] ? `${data.rain["1h"]} mm` : "Kein Regen");
    setTextContent("wind", data.wind?.speed ? `${data.wind.speed} m/s` : "Keine Angabe");
}

function showError(message) {
    setTextContent("temperature", message);
    setTextContent("weather", message);
    setTextContent("rain", message);
    setTextContent("wind", message);
}

function setTextContent(id, text) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = text;
    } else {
        console.warn(`Element mit ID '${id}' nicht gefunden`);
    }
}



