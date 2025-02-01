let currentIndex = 0;
const trophies = document.querySelectorAll('.trophy');
const totalTrophies = trophies.length;
const trophiesPerPage = 3; // Für Screens unter 600px nur 1 Trophy pro Seite

function updateTrophyDisplay() {
    const offset = currentIndex * trophiesPerPage;
    trophies.forEach((trophy, index) => {
        if (index >= offset && index < offset + trophiesPerPage) {
            trophy.style.display = 'block';
        } else {
            trophy.style.display = 'none';
        }
    });
}

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentIndex < totalTrophies / trophiesPerPage - 1) {
        currentIndex++;
        updateTrophyDisplay();
    }
});

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateTrophyDisplay();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    updateTrophyDisplay();
});

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.classList.toggle('active');
    });
    box.addEventListener('mouseleave', () => {
        box.classList.toggle('active');
    });
});
