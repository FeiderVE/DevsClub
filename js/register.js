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


//-Register-//

const registro = document.querySelector('#registro'); //reg
const mail = document.querySelector('#mail-input'); //input mail
const password = document.querySelector('#password-input');  //input contra
const repit_password = document.querySelector('#password-repit-input'); 
const alert_password_match = document.querySelector('#alert-password-match'); 
const alert_success = document.querySelector('#alert-success');
const alert_password = document.querySelector("#alert-password")
const alert_email = document.querySelector('#email-alert');
const btn_show = document.querySelector('#btn-show');

//expresiones regulares para vlaidar mail y password
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const regexp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%_*?&])[A-Za-z\d$@$!%_*?&]{8,15}/;

let errores = [];

registro.addEventListener("submit", (e) => {
    e.preventDefault(); 
    alert_success.classList.add("d-none");
    errores  = [];
    const valor_mail = mail.value;
    const valor_password = password.value;
    const valor_repitpassword = repit_password.value;

//if para validar email
if (!regUserEmail.test(valor_mail) || !valor_mail.trim()) {
    // El email no es válido, agregamos el error correspondiente al arreglo de errores
    errores.push({
        tipo: alert_email,
        msg: "El email ingresado no es válido",
    }); 
    mostrarInvalidBootstrap(mail);
} else {
    mostrarValidBootstrap (mail);
    alert_email.classList.add("d-none");  
}

if (!regexp_password.test(valor_password) || !valor_password.trim()) {
    errores.push({
        tipo: alert_password,
        msg: "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial",
    });
} else {
    mostrarValidBootstrap (password);
    alert_password.classList.add("d-none");
}

      
//if para que contraseñas coincidan
if (valor_password !== valor_repitpassword || !valor_repitpassword.trim()) {
    errores.push({
        tipo: alert_password_match,
        msg: "Te quivocaste, las contraseñas no coinciden",
    });
    mostrarInvalidBootstrap(repit_password);
    mostrarInvalidBootstrap(password);
} else {
    mostrarValidBootstrap (repit_password);

    alert_password_match.classList.add("d-none");
}

//si hay errores ejecuta mensaje de error.
if (errores.length !== 0) {
    mensajeError(errores);
    return;
}
mensajeExito();
});


//funcion mensaje exito
const mensajeExito = () => {
    alert_success.classList.remove("d-none");
    alert_success.textContent = "Formulario enviado con éxito";
    alert_password.classList.add("d-none");
    alert_email.classList.add("d-none");
    alert_password_match.classList.add("d-none");
}

//funcion de mensaje error
const mensajeError = (errores) => {
    errores.forEach(item => { //recorremos objetos de arreglo de errores
        item.tipo.classList.remove("d-none"); //accedo a propiedad tipo
        item.tipo.textContent = item.msg; //le agregamos mensaje que se equivoco
    });
}

//funcion para mostrar clases de bootstrap
const mostrarValidBootstrap = (element) => {
    element.classList.add("is-valid"); //clase bootstrap
    element.classList.remove("is-invalid");
  
}

const mostrarInvalidBootstrap = (element) => {
    element.classList.add("is-invalid"); //clase bootstrap
}

//boton show password
btn_show.addEventListener("click", (e) => {
    if (password.type === "password") {
      password.type = "text";
      btn_show.textContent = "Ocultar";
      btn_show.style.backgroundColor = "#edc463";
    } else {
      password.type = "password";
      btn_show.textContent = "Mostrar";
    }
  });
  

