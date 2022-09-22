var grid = document.getElementsByClassName("grid")[0];
var info = document.getElementsByClassName("info")[0];
var skroll = document.getElementsByClassName("roller")[0];

function infopg() {
    skroll.style.display = "none";
    grid.style.display = "none";
    info.style.display = "grid";
    info.style.animation = "fadein linear 1.2s";
}
function homepg() {
    info.style.display = "none";
    grid.style.display = "grid";
    grid.style.animation = "fadein linear 1.2s";
}

function rulla() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      }); 
}
