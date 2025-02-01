fetch("../navbar.html")
.then(response => response.text())
.then(data => {
    document.getElementById("navbarbody").innerHTML = data;
})
.catch(error => console.error("Fehler beim Laden von Navbar und Footer!", error));