
function switchToInfos() {
    let e = document.getElementsByTagName("main");
    let kader = document.getElementsByTagName("h3");
    let info = document.getElementsByTagName("h4");
    let text = document.getElementById("hiddenText");

    e[0].style.display = "none";
    kader[0].style.color = "white";
    info[0].style.color = "#53defd";
    text.style.display = "block";





}

function switchToKader() {
    let e = document.getElementsByTagName("main");
    let kader = document.getElementsByTagName("h3");
    let info = document.getElementsByTagName("h4");
    let text = document.getElementById("hiddenText");

    e[0].style.display = "block";
    kader[0].style.color = "#53defd";
    info[0].style.color = "white";
    text.style.display = "none";

}

 window.addEventListener("resize",function toggleDropdownResize(){
        let dropdown  = document.getElementById("dropdownMenu");
        let firstelement = document.getElementById("erstesElement");
        if(window.innerWidth>=769) {
            if(dropdown.getAttribute("class")=="dropdown"){
                dropdown.classList.toggle("hidden");
                firstelement.setAttribute("style","margin-top:60px;");
            }
        }
       
    });

       
