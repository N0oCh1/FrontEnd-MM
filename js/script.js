const idInput=document.getElementById('name');
const backGround = document.body;
const button = document.getElementById('nightMode');
var nightMode = new Boolean(false); 

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

idInput.value = 'nombre';
console.log(idInput.value);

function night(){
    
}