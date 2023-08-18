
var nick;

function datosUsuarios (name){
    sessionStorage.setItem('name', name.value);
}
function getDatosUsuario(){
    nick = sessionStorage.getItem('name');
    console.log(nick);
}

function comprobarDatosUsuario(){
    if(nick == null)
    {
        sessionStorage.setItem('error', "rellene el formulario");
        return false;
    }
    else
    {
        return true;
    }
}
    