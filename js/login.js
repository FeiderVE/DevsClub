let listMenu = document.querySelectorAll('.list_button_options');

listMenu.forEach(foodElement => {
    foodElement.addEventListener('click' , () => {
        
        foodElement.classList.toggle('arrow');

        let height = 0;
        let menu = foodElement.nextElementSibling;

        if(menu.clientHeight == "0") {
            height=menu.scrollHeight;
        }

        menu.style.height =`${height}px`
    })
}
    )
    
//-FORMULARIOS-//

const form = document.getElementById('form')
const campoEmail = document.getElementById('email')
const campoPassword = document.getElementById('password')
const alertEmail = document.getElementById('alert-email')
const alertPassword = document.getElementById('alert-password')



const regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,20})+$/
const regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%]{8,12}$/


form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(!regexEmail.test(campoEmail.value) ){
        alert('formato no valido para email');
        campoEmail.style.border="3px solid red";
        return
    } else {
        campoEmail.style.border="3px solid green"
    }

    if(!regexPass.test(campoPassword.value) ){
        alert('formato no valido de password, minimo 8 a 12 caracteres y al menos un numero');
        campoPassword.style.border="3px solid red"
        return 
    } else {
        campoPassword.style.border="3px solid green"
    }

    console.log('mensaje enviado');
})