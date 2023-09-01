var nick;
var avatar;
var items;
var object
var puntoMarcado = false;
var tocoRojo = false;
var tocoVerde = false;
var tamano;
var adyace = [];
var guardarMarcado =[];
var puntoColor;
var tamanoReferencia;
var tamanoGrid;
var tablaDePuntos;
var timer;
var idInterval;
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
    tamanoReferencia = parseInt(tamanoGrid);
    tablaDePuntos = document.getElementById('puntuacion');
    timer = document.getElementById('time');
    console.log(tamanoReferencia);
    if(comprobarDatosUsuario()==false) 
    {
        console.log(comprobarDatosUsuario());
        location = "index.html";

    }
    programarEventoDelJuego();
}
//obtener elemnetos del html cuando los DOM se hallan cargado
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
        item += `<div id="containerItem"><div id ="${index}" class="item ${color[randomColor]}"></div></div>`;
    }
    return item;
}
//asignar color de forma aleatoria
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
//calcular adyacentes
function CAdyacentes(coorpunto) {
    console.log(`"punto central: ${coorpunto}"`);
    adyace = [];
    // punto norte
    if((coorpunto - tamanoReferencia)>=0){
        adyace.push(coorpunto-tamanoReferencia);
    }
    // punto sur
    if((coorpunto+tamanoReferencia)<(tamanoReferencia*tamanoReferencia)){
        adyace.push(coorpunto+tamanoReferencia);
    }
    //punto este
    if(((coorpunto+1)%tamanoReferencia)>0){
    adyace.push(coorpunto+1);
    }
    // punto oeste
    if((coorpunto%tamanoReferencia)>0){
        adyace.push(coorpunto-1);
    }
  
    for (let index = 0; index < adyace.length; index++) {
        console.log(adyace[index]);
        
    }
}
//añadir evento de acciones del mouse
function programarEventoDelJuego() {

    for(let punto of object){
        console.log(punto);
        punto.addEventListener("mousedown", marcarPunto);
        punto.addEventListener("mouseover", marcarPuntoDeslizando);
    }
    document.addEventListener("mouseup", mouseFuera);
    idInterval = setInterval(cuentaAtras, 1000);
}
//temporizador 
function cuentaAtras() {
    let tiempoActual = parseInt(timer.value)-1;
    timer.value = tiempoActual;
    if (tiempoActual == 0){
        for(let punto of object){
            console.log(punto);
            punto.removeEventListener("mousedown", marcarPunto);
            punto.removeEventListener("mouseover", marcarPuntoDeslizando);
        }
        document.removeEventListener("mouseup", mouseFuera);
        clearInterval(idInterval);
    }
}


// marcar punto cuando hago click en un punto
function marcarPunto(event) {
    puntoMarcado = true;
    let item = event.target;
    let containerItem = event.target.parentElement;
    CAdyacentes(parseInt(item.id));
    guardarMarcado.push(parseInt(item.id));
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
// marcar punto cuando deslizo el mpuse por los puntos 
function marcarPuntoDeslizando(event) {
    let item = event.target;
    let nuevoId = parseInt(item.id);
    if(adyace.includes(nuevoId)){
        let containerItem = event.target.parentElement;
        if (puntoMarcado){
            console.log(`rojo = ${tocoRojo}`);
            console.log(`verde = ${tocoVerde}`);
            console.log("deslizando");
            if(tocoRojo){
                if(item.classList.contains('Rojo')){
                    containerItem.classList.add('Rojo');
                    CAdyacentes(parseInt(item.id));
                    guardarMarcado.push(parseInt(item.id));
                } 
            }
            if(tocoVerde){
                if (item.classList.contains('Verde')){
                    containerItem.classList.add('Verde');
                    CAdyacentes(parseInt(item.id));
                    guardarMarcado.push(parseInt(item.id));
                }
            }
        }
        else{
            return false;
        }
    }
    else{
        console.log("fuera de rango");
    }
}
// acciones cuand suelto el mouse
function mouseFuera(event) {
    console.log("soltado");
    cambio();
    tocoRojo = false;
    tocoVerde = false;
    puntoMarcado = false;
}

function cambio() {
    let puntosActual = parseInt(tablaDePuntos.value);
    let puntosConseguido = 0;
    for (let index = 0; index < guardarMarcado.length; index++) {
        let hacerCambio = document.getElementById(guardarMarcado[index]);
        let color = ["Rojo","Verde"];
        let colorRNG = getRandomInt(2);
        if(tocoRojo){
            hacerCambio.parentElement.classList.remove('Rojo');
            puntosConseguido++; // añadir puntuacion
            hacerCambio.classList.remove('Rojo');
        }
        else if(tocoVerde){
            hacerCambio.parentElement.classList.remove('Verde');
            puntosConseguido++;// añadir puntuacion
            hacerCambio.classList.remove('Verde');
        }
        hacerCambio.classList.add(color[colorRNG]);
    }
    // añadir puntuacion
    puntosActual += puntosConseguido;
    tablaDePuntos.value = `${puntosActual}`;
    guardarMarcado = [];
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




