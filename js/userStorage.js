
var nick;
var localizacion;



function datosUsuarios (name){
    sessionStorage.setItem('name', name.value);
    getDatosUsuario();
}
function getDatosUsuario(){
    nick = sessionStorage.getItem('name');
    
}
function avatarColor(color) {
    sessionStorage.setItem('avatarColor', color);
}
function comprobarDatosUsuario(){
    console.log(nick);
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

function guardarHistoricos(nick) {
    let historicoStorage = localStorage.getItem('historico');
    let historico;
    
    if(historicoStorage==null){
        historico = [];
    }
    else{
        historico = JSON.parse(historicoStorage);
    }
    let registro = {
        userName : nick.value,
        date : Date.now()
    }
    historico.push(registro);
    localStorage.setItem('historico', JSON.stringify(historico));
}