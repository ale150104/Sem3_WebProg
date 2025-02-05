

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slideshow");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 8000);
}

window.addEventListener("resize",function toggleDropdownResize(){
let dropdown  = document.getElementById("dropdownMenu");
let firstelement = document.getElementById("erstesElement");
if(window.innerWidth>=769) {
    if(dropdown.getAttribute("class")=="dropdown"){
        dropdown.classList.toggle("hidden");
        firstelement.setAttribute("style","margin-top:68px;");
    }
}

});
function toggleDropdown() {
    let dropdown = document.getElementById("dropdownMenu");
    let firstelement = document.getElementById("erstesElement");
    dropdown.classList.toggle("hidden");  // This will add or remove the "hidden" class
    if(dropdown.getAttribute("class")== "dropdown hidden"){
    firstelement.setAttribute("style","margin-top:68px;")
    }
    if(dropdown.getAttribute("class")=="dropdown"){
    firstelement.setAttribute("style","margin-top:238px;")
    }
}