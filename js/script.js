
// const of the form  
const nameForm =document.getElementById('name');
const form = document.getElementById("formularioJuego");
const gameInit = document.getElementById('Jugar');
const errorName = document.getElementById('errorName');
const errorTamano = document.getElementById('errorTamano');
const tamano = document.getElementById('tamano');
var emailForm = document.getElementById('email');

//elementari value
const backGround = document.body;
const button = document.getElementById('nightMode');

var nightMode = new Boolean(false); 

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
// allway I click on email = erase 
emailForm.onclick = () => {
    if(emailForm.value == "ejemplo@ejemplo.com"){
        emailForm.value = "";    
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
        return true;
    }
}