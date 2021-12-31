//Nuevo con jQuery
/*function validacion (parametro1, parametro2, parametro3){
    var parametro1 = $("#" + parametro1);
    var parametro2 = $("#" + parametro2);
    var parametro3 = $("#" + parametro3);

    if (parametro3 == "ok"){

    } else {
        
    }
}*/
//Muestra información de que input text esta en focus
//Show the information of input text on focus
function handlingText(e){
    console.log(e);
}
const textboxes = document.querySelectorAll('input');
textboxes.forEach(textbox => textbox.addEventListener('focus', handlingText));


function enviarDatos () {
    //nombre= document.getElementById("nombre").value;
    let nombre = $('#nombre').val();
    let messageName = $('#messageName');
        if (nombre.length < 3 || nombre.length == 0) {
            let alertName = `<div class="alert alert-danger p-1 small mt-2" role="alert" id="messageName">* Ingresa tu nombre.</div>`;
            messageName.html(alertName);
            //nombre.focus();
            return false; //Detiene la validación
        } else {
            messageName.html(`<p class="text-success">Datos validos.</p>`);
        }
    //apellido = document.getElementById("apellido").value;
    let apellido = $('#apellido').val();
    let messageLast = $('#messageLast');
        if (apellido.length < 3 || apellido.length == 0) {
            let alertLast = `<div class="alert alert-danger p-1 small mt-2" role="alert" id="messageLast">* Ingresa tu apellido.</div>`;
            messageLast.html(alertLast);
            //apellido.focus();
            return false; //Detiene la validación
        } else {
            messageLast.html(`<p class="text-success">Datos validos.</p>`);
        }
    //email = document.getElementById("email").value;
    let email = $('#email').val();
    let messageEmail = $('#messageEmail');
        if (email.length < 3 || email.length == 0) {
            let alertEmail = `<div class="alert alert-danger p-1 small mt-2" role="alert" id="messageEmail">* Ingresa un email valido.</div>`;
            messageEmail.html(alertEmail);
            //email.focus();
            return false; //Detiene la validación
        } else {
            messageEmail.html(`<p class="text-success">Datos validos.</p>`);
        }
    //password = document.getElementById("password").value;
    let password = $('#password').val();
    let messagePassword = $('#messagePassword');
        if (password.length < 8 || password.length == "") {
            let alertPassword = `<div class="alert alert-danger p-1 small mt-2" role="alert" id="messagePassword">* Ingresa una contraseña de 8 caracteres.</div>`;
            messagePassword.html(alertPassword);
            //password.focus();
            return false; //Detiene la validación
        } else {
            messagePassword.html(`<p class="text-success">Datos validos.</p>`);
        }
    //telefono = document.getElementById("telefono").value;
    let telefono = $('#telefono').val();
    let messagePhone = $('#messagePhone');
        if (telefono.length < 10 || telefono.length == "") {
            let alertPhone = `<div class="alert alert-danger p-1 small mt-2" role="alert" id="messagePhone">* Ingresa un número de teléfono valido.</div>`;
            messagePhone.html(alertPhone);
            //telefono.focus();
            return false; //Detiene la validación
        } else {
            messagePhone.html(`<p class="text-success">Datos validos.</p>`);
        }

    let alertMessage = $('#registrationForm');
    alertMessage.html(`<div class="alert alert-warning alert-dismissible fade<div class="alert alert-success" role="alert">
    <h4 class="alert-heading">Formulario enviado</h4>
    <p>Uno de nuestros ejecutivos se comunicara contigo en breve. Ya puedes ingresar con tus datos registrados.</p>
    <hr>
    <p class="mb-0">¿Cuál es el tiempo de respuesta para aprobar mi solicitud?</p>
    <p>Una vez completada tu solicitud te daremos respuesta en 5 minutos si tu crédito esta pre aprobado y después de que nos envíes tu documentación, en 1 día hábil más te enviaremos una propuesta de crédito (tasa, plazo y pago mensual).</p>
‍    <p>Si estás de acuerdo con las condiciones que te ofrecemos publicaremos tu perfil para que sea fondeado por la comunidad de prestamistas. El periodo de fondeo puede tardar desde 1 hasta 25 días.</p>
  </div>`);
    
 
}

//let enviar = document.getElementById("enviar"); *Antes con javascript

$('#enviar').click(function() {
    enviarDatos();
}); 


