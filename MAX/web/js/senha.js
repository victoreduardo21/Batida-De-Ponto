const password = document.getElementById('password');
const icon = document.getElementById ('icon');

function mostraesconder(){
    if(password.type ==='password'){
        password.setAttribute('type','text');
        icon.classList.add('esconder')
    }
    else{
        password.setAttribute('type','password');
        icon.classList.remove('esconder');
    }
}