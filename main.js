//////REPRODUCE
var canciones = document.querySelectorAll(".cover");

function reproducir(temp) {
    var audio = temp.getElementsByClassName("song")[0];
    var boton = temp.querySelector('.play-icon');
    if (audio.paused == false) {
        audio.pause();
        boton.style.backgroundImage = "url('./icons/play.svg')";
        temp.classList.add("cover");
        temp.classList.remove("playing");
    } else {
        audio.play();
        boton.style.backgroundImage = "url('./icons/pause.svg')";
        temp.classList.add("playing");
        temp.classList.remove("cover");
    }
}


canciones.forEach(e => {
    e.addEventListener('click', function () {
        reproducir(e);
    });
});





//SCROLL REVEAL
window.sr = ScrollReveal();
sr.reveal('#promo');
sr.reveal('#carac');
sr.reveal('.cover');
sr.reveal('#galery');
sr.reveal('#main-footer');