//////REPRODUCE
var canciones = document.querySelectorAll(".cover");

function reproducir(temp) {
    var audio = temp.getElementsByClassName("song")[0];
    var boton = temp.querySelector('.play-icon');
    if (audio.paused == false) {
        audio.pause();
        boton.style.backgroundImage = "url('./icons/play.svg')";
    } else {
        audio.play();
        
        boton.style.backgroundImage = "url('./icons/pause.svg')";
    }
}


canciones.forEach(element => {
    element.addEventListener('click', function () {
        reproducir(element);
        
    });
});





//SCROLL REVEAL
window.sr = ScrollReveal();
sr.reveal('#promo');
sr.reveal('#carac');
sr.reveal('.cover');
sr.reveal('#galery');
sr.reveal('#main-footer');