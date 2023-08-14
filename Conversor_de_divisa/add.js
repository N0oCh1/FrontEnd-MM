//form
const form = document.getElementById('conversor');
//input form 
const inputQuantity = document.getElementById('putQuantity');
//select
const badge = document.getElementById('divisa');
//show result 
const result = document.getElementById('result');
//show error
const errorBadge = document.getElementById('errorBadge');



//star code

form.addEventListener('submit', logic);

function logic(event){
    var input = parseInt(inputQuantity.value);
    var output = 0; 
    var defaultInput = new Boolean(false);
    switch (badge.value){
        case 'defaut':
            console.log('you swit defut');
            defaultInput = true;
            break;
        case 'euro':
            output = input * 0.92;
            console.log('you switch euro'+output);
            break;
        case 'yuan':
            output = input * 7.26;
            console.log('you switch yuan'+output);
            break;            
        case 'mxn':
            output = input * 17.05;
            console.log('you switch mxn'+output);
            break;    
        }
    if(defaultInput == true){
        errorBadge.innerHTML ="porfavor eliga la divisa que quieras convertir";
        event.preventDefault();
        return false;
    }
    else{
        errorBadge.innerHTML = "";
        result.innerHTML = output;
        event.preventDefault();
        return true
    }
    
}