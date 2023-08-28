var nick;
var avatar;
var items;
var object
var puntoMarcado = false;
var tocoRojo = false;
var tocoVerde = false;
var tamano;
var puntoColor;
var tamanoGrid;
function domLoaded() {
    nick = document.getElementById('usuario');
    avatar = document.getElementById('avatar');
    tamano = document.getElementById('juego');
    tamanoGrid = sessionStorage.getItem('tamano');
    items = pintarGrid(tamano, tamanoGrid);
    nick.value = sessionStorage.getItem('name');
    avatar.style.backgroundColor = sessionStorage.getItem('avatarColor');
    tamano.innerHTML = items;
    object = document.getElementsByClassName('item');
    console.log(avatar.style.backgroundColor);
    if(comprobarDatosUsuario()==false) 
    {
        console.log(comprobarDatosUsuario());
        location = "index.html";

    }
    programarEventoDelJuego();
}
document.addEventListener('DOMContentLoaded', domLoaded);
function pintarGrid(tamano, tamanoGrid) {
    let item  = "";
    let color = ["Rojo","Verde"];
    let randomColor=0;
    let intTamano = parseInt(tamanoGrid);
    tamano.style.gridTemplateColumns = ("repeat("+tamanoGrid+", 1fr)");
    tamano.style.gridTemplateRows = ("repeat("+tamanoGrid+", 1fr)");
    for (let index = 0; index < (intTamano*intTamano); index++) {
        if(index%2>0){
            randomColor = getRandomInt(2);
        }
        item += `<div id="containerItem"><div class="item ${color[randomColor]}"></div></div>`;
    }
    console.log(item);
    return item;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function programarEventoDelJuego() {

    for(let punto of object){
        console.log(punto);
        punto.addEventListener("mousedown", marcarPunto);
        punto.addEventListener("mouseover", marcarPuntoDeslizando);
        punto.addEventListener("mouseup", mouseFuera);
    }
}
function marcarPunto(event) {
    puntoMarcado = true;
    let item = event.target;
    let containerItem = event.target.parentElement;
    if(item.classList.contains('Rojo')){
        tocoRojo = true;
        containerItem.classList.add('Rojo');   
    }
    else if(item.classList.contains('Verde')){
        tocoVerde = true;
        containerItem.classList.add('Verde');
    }
    console.log("'tocado'");
}
function marcarPuntoDeslizando(event) {
    let item = event.target;
    let containerItem = event.target.parentElement;
    if (puntoMarcado){
        console.log("deslizando");
            if(tocoRojo){
                if(item.classList.contains('Rojo')) containerItem.classList.add('Rojo');
            }
            else if(tocoVerde){
                if (item.classList.contains('Verde'))containerItem.classList.add('Verde');
                
            }
    }
}
function mouseFuera(event) {
    tocoRojo = false;
    tocoVerde = false;
}






















































//codigo opcional
const showInfo = document.getElementById('Info');
const dropHistory = document.getElementById('borrarHistorico');
const infoBox = document.getElementById('location');
//geolocalizacion API funtion

function geolocalizacion (position){
    const latitud = position.coords.latitude;
    const longitud = position.coords.longitude;

    infoBox.textContent = `latitiud: ${(latitud)} , longitud: ${(longitud)}`;
}
navigator.geolocation.getCurrentPosition(geolocalizacion);
getDatosUsuario();

console.log(comprobarDatosUsuario());
if(localStorage.getItem('historico') == null){
    showInfo.innerText = "No hay historico";
}
else{
    showInfo.innerText = localStorage.getItem('historico');
}

dropHistory.addEventListener('click', ()=>{
    localStorage.removeItem('historico');
    location.reload();
});
//fin del codigo opcional




