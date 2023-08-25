var nick;
var avatar

function domLoaded() {
    nick = document.getElementById('usuario');
    avatar = document.getElementById('avatar');
    nick.value = sessionStorage.getItem('name');
    avatar.style.backgroundColor = sessionStorage.getItem('avatarColor');
    console.log(avatar.style.backgroundColor);
    if(comprobarDatosUsuario()==false) 
    {
        console.log(comprobarDatosUsuario());
        location = "index.html";

    }
}
document.addEventListener('DOMContentLoaded', domLoaded);





















































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




