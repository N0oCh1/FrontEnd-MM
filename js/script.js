var nameForm;
var form;
var gameInit;
var errorName;
var errorTamano;
var error;
var tamano;
var emailForm;
//elementari value
var backGround;
var button;
var nightMode = new Boolean(false); 
// avatar variable
var avatarItem;
var itemImg;
var avatarChoice;
// call function if all DOM is loaded
document.addEventListener('DOMContentLoaded', loadDom);
//get element from html document and execute all function with needed 
function loadDom(){
    nameForm =document.getElementById('name');
    form = document.getElementById("formularioJuego");
    gameInit = document.getElementById('Jugar');
    errorName = document.getElementById('errorName');
    errorTamano = document.getElementById('errorTamano');
    error = document.getElementById('error');
    tamano = document.getElementById('tamano');
    emailForm = document.getElementById('email');
    // optional getElement
    backGround = document.body;
    button = document.getElementById('nightMode');
    
    // check error form
    if(sessionStorage.getItem('error')!= null){
        error.innerText = sessionStorage.getItem('error');
        sessionStorage.removeItem('error');
    }
    //get avatar document 
    avatarItem = document.getElementsByClassName('avatarItem');
    avatarChoice = document.getElementById('avatar');
    // allway I click on email = erase 
    emailForm.addEventListener('click',() =>{
    if(emailForm.value == "ejemplo@ejemplo.com"){
        emailForm.value = "";    
    }
    });
    // night mode active and desactive
    button.onclick = () =>{
    if (nightMode){
        nightMode = false;
        backGround.style.backgroundColor='rgb(46, 46, 46)';
    }
    else{
        nightMode = true;
        backGround.style.backgroundColor='rgb(245, 245, 245)';
    }

};


//form validation
form.addEventListener('submit', formValidation);
function formValidation(event){
    var name = new Boolean(false);
    var choice = new Boolean(false);
    //name validation
    if(nameForm.value.length == 0){
        console.log("please put a nick name");
        errorName.innerHTML = 'porfavor introduzca un nick';
        event.preventDefault();
        return false;
    }
    else{
        errorName.innerHTML = '';
        name = true;
    }
    //choice the size
    if(tamano.value=="0"){
        console.log("poner un tamaño");
        errorTamano.innerHTML = "selecciona un tamaño";
        event.preventDefault();
        return false;
    }
    else{
        errorTamano.innerHTML = "";
        choice = true;
    }
    if(name == true && choice == true){
        datosUsuarios(nameForm);
        getDatosUsuario();
        guardarHistoricos(nameForm);
        avatarColor(avatarChoice.style.backgroundColor);
        return true;
    }
} 
    for (let item of avatarItem){
        item.addEventListener('dragstart', moviendoIMG);
        
    }
    function moviendoIMG(event) {
        itemImg = event.target.style.backgroundColor;
        console.log(itemImg);
    }
    avatarChoice.addEventListener('dragover', (event)=>{event.preventDefault()});
    avatarChoice.addEventListener('drop', ponerImg);
    function ponerImg() {
        avatarColor(itemImg);
        avatarChoice.style.backgroundColor = itemImg;
    }
}
