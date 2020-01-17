const
     only_text = /[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]/gm,
     only_numeric = /^([0-9]{0,})$/,
     chk_email = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i,
     campoComuna = document.querySelector('select[name=region]'),
     campoRut = document.querySelector('input[name=rut]'),
     campoMailDos = document.querySelector('input[name=maildos]');

// VALIDADORES
let counter = 0;
let validado = false;
// VALIDADORES CAMPOS
let validCampos = [
     {
          "id": "nombre",
          "value": false
     },
     {
          "id": "apellidoP",
          "value": false
     },
     {
          "id": "apellidoM",
          "value": false
     },
     {
          "id": "rut",
          "value": false
     },
     {
          "id": "localidad",
          "value": false
     },
     {
          "id": "telefono",
          "value": false
     },
     {
          "id": "campomail",
          "value": false
     },
     {
          "id": "emailChk",
          "value": false
     },
     {
          "id": "acept",
          "value": false
     }
];

//NOMBRE
$('input[name="nombre"]').on('change', function () {
     var nombre = this.value;
     var campoNombre = "nombre";
     //console.log(nombre);

     if (nombre == "") {
          $("label[for=nombre]").replaceWith("<label class='label-form denegate' for='nombre'>Porfavor Ingrese su <b>Nombre</b></label>");
          validado = false;


     } else if (nombre.length > 50) {
          $("label[for=nombre]").replaceWith("<label class='label-form denegate' for='nombre'>su nombre tiene mayor cantidad de los caracteres permitidos</label>");
          validado = false;


     } else if (!only_text.test(nombre)) {
          $("label[for=nombre]").replaceWith("<label class='label-form denegate' for='nombre'>Porfavor Ingrese solo <b>Letras</b></label>");
          validado = false;

     } else {
          $("label[for=nombre]").replaceWith("<label class='label-form correct' for='nombre'><b>Nombre</b> Correcto</label>");
          
          let trueValue = validCampos.map(function (dato) {
               if (dato.id == campoNombre) {
                    dato.value = true;
               }
               return dato;
          });
          //console.log(validCampos);
     }

});

//APELLIDOP
$('input[name="apellidop"]').on('change', function () {
     var apellidoP = this.value;
     var campoApellidoP = "apellidoP";
     //console.log(apellidoP);

     if (apellidoP == "") {
          $("label[for=apellidop]").replaceWith("<label class='label-form denegate' for='apellidop'>Porfavor Ingrese su <b>Apellido Paterno</b></label>");
          validado = false;
          //counter -= 1;

     } else if (apellidoP.length > 50) {
          $("label[for=apellidop]").replaceWith("<label class='label-form denegate' for='apellidop'>su <b>Apellido</b> tiene mayor cantidad de los caracteres permitidos</label>");
          validado = false;
          //counter -= 1;

     } else if (!only_text.test(apellidoP)) {
          $("label[for=apellidop]").replaceWith("<label class='label-form denegate' for='apellidop'>Porfavor Ingrese solo <b>letras</b></label>");
          validado = false;
          //counter -= 1;

     } else {
          $("label[for=apellidop]").replaceWith("<label class='label-form correct' for='apellidop'><b>Apellido Paterno</b> Correcto</label>");
          
          let trueValue = validCampos.map(function (dato) {
               if (dato.id == campoApellidoP) {
                    dato.value = true;
               }
               return dato;
          });

          //console.log(validCampos);
     }

});

//APELLIDOM
$('input[name="apellidom"]').on('change', function () {
     var apellidoM = this.value;
     var campoApellidoM = "apellidoM";

     if (apellidoM == "") {
          $("label[for=apellidom]").replaceWith("<label class='label-form denegate' for='apellidom'>Porfavor Ingrese su <b>Apellido Materno</b></label>");
          validado = false;
          //counter -= 1;

     } else if (apellidoM.length > 50) {
          $("label[for=apellidom]").replaceWith("<label class='label-form denegate' for='apellidom'>Su <b>Apellido</b> tiene mayor cantidad de los caracteres permitidos</label>");
          validado = false;
          //counter -= 1;

     } else if (!only_text.test(apellidoM)) {
          $("label[for=apellidom]").replaceWith("<label class='label-form denegate' for='apellidom'>Porfavor Ingrese solo <b>letras</b></label>");
          validado = false;
          //counter -= 1;

     } else {
          $("label[for=apellidom]").replaceWith("<label class='label-form correct' for='apellidom'><b>Apellido Materno</b> Correcto</label>");

          let trueValue = validCampos.map(function (dato) {
               if (dato.id == campoApellidoM) {
                    dato.value = true;
               }
               return dato;
          });
          //console.log(validCampos);
     }
});

//RUT
$("input[name=rut]").on("change", function () {
     //var rut = this.value;
     //llamado a funcion de verificacion
     let rut = "rut";
     let validaRut = Rut(form1.rut.value);

     if (validaRut == false) {
          $("label[for=rut]").replaceWith("<label class='label-form denegate' for='rut'>Ingresa un formato válido porfavor</label>");
          validado = false;

     } else {
          $("label[for=rut]").replaceWith("<label class='label-form correct' for='rut'><b>Rut</b> correcto</label>");

          let trueValue = validCampos.map(function (dato) {
               if (dato.id == rut) {
                    dato.value = true;
               }
               return dato;
          });
          console.log(validCampos);
          
          //validado = true;
          //counter += 1

     }
});

//COMUNA
$("select[name=region]").on("change", function () {
     var comuna = campoComuna.value;
     var localidad = "localidad";
     console.log(comuna);

     if (comuna == 0) {
          $("label[for=region]").replaceWith("<label class='label-form denegate' for='region'>Porfavor Ingrese una <b>comuna</b></label>");
          validado = false;
          //counter -= 1;
     } else {
          $("label[for=region]").replaceWith("<label class='label-form correct' for='region'><b>Comuna</b> correcta</label>");

          let trueValue = validCampos.map(function (dato) {
               if (dato.id == localidad) {
                    dato.value = true;
               }
               return dato;
          });
          console.log(validCampos);
     }
});

//TELEFONO
$("input[name=telefono]").on("change", function () {
     var tel = $("input[name=telefono]").val();
     var campoTelefono = "telefono";

     if (tel == "") {
          $("label[for=telefono]").replaceWith("<label class='label-form denegate' for='telefono'>Ingresa un telefono porfavor</label>");
          validado = false;
          //counter -= 1;

     } else if (!only_numeric.test(tel)) {
          $("label[for=telefono]").replaceWith("<label class='label-form denegate' for='telefono'>Ingresa solo numeros porfavor</label>");
          validado = false;
          //counter -= 1;

     } else if (tel.length < 8) {
          $("label[for=telefono]").replaceWith("<label class='label-form denegate' for='telefono'><b>Teléfono incorrecto</b>, faltan digitos</label>");
          validado = false;
          //counter -= 1;

     } else if (tel.length > 8) {
          $("label[for=telefono]").replaceWith("<label class='label-form denegate' for='telefono'><b>Teléfono</b> incorrecto, tiene muchos digitos</label>");
          validado = false;
          //counter -= 1;

     } else {
          $("label[for=telefono]").replaceWith("<label class='label-form correct' for='telefono'><b>Teléfono</b> correcto</label>");

          let trueValue = validCampos.map(function (dato) {
               if (dato.id == campoTelefono) {
                    dato.value = true;
               }
               return dato;
          });
          //console.log(validCampos);
     }
});

//MAIL
$("input[name=mail]").on("change", function() {
     var email = $("input[name=mail]").val();
     var emailDos = $("input[name=maildos]").val();
     var campoMail = "campomail";

     if (email == "") {
          $("label[for=email]").replaceWith("<label class='label-form denegate' for='email'>Ingresa un mail porfavor</label>");
          validado = false;
          //counter -= 1;

      } else if (!chk_email.test(email)) {
          $("label[for=email]").replaceWith("<label class='label-form denegate' for='email'>Ingresa su mail correctamente porfavor</label>");
          validado = false;
          //counter -= 1;
      }
      // else if ( email !== emailDos ) {
      //     $("label[for=maildos]").replaceWith("<label class='label-form denegate' for='maildos'>ingrese el mismo <b>mail</b> porfavor</label>");
      //     validado = false;
      //     counter -= 1;
      //  }
      else {
          $("label[for=email]").replaceWith("<label class='label-form correct' for='correcto'><b>Email</b> correcto</label>");
          
          let trueValue = validCampos.map(function(dato) {
              if (dato.id == campoMail) {
                  dato.value = true;
              }
              return dato;
          });
          //console.log(validCampos);
      }
});

// MAILDOS
$("input[name=maildos]").on("change", function() {
     var emailDos = campoMailDos.value;
     var email = $("input[name=mail]").val();
     var emailChk = "emailChk";
     //console.log(emailDos);
 
     if (emailDos !== email) {
         $("label[for=maildos]").replaceWith("<label class='label-form denegate' for='maildos'>ingrese el mismo <b>mail</b> porfavor</label>");
         validado = false;
         //counter -= 1;
 
     } else {
         $("label[for=maildos]").replaceWith("<label class='label-form correct' for='maildos'><b>Email</b> correcto</label>");
         let trueValue = validCampos.map(function(dato) {
             if (dato.id == emailChk) {
                 dato.value = true;
             }
             return dato;
         });
         //console.log(validCampos);
 
     };
 });

 // ACEPTACION
let check = null;
let acept = "acept";
$('input[type="checkbox"]').on('change', function(e) {
    if (this.checked) {
        $("div.check").hide();
        //getCampos();
        check = true;

        let trueValue = validCampos.map(function(dato) {
            if (dato.id == acept) {
                dato.value = true;
            }
            return dato;
        });
        console.log(validCampos); 

    } else {
        $("div.check").html(
            "<p class='denegado'>Acepte terminos porfavor</p>");
        check = false;
    }
});

$('form').on('change click', function(e) {
     
     var count = validCampos.filter(function(s) {
         return s.value;
     }).length;
     console.log(count);
     //&& $('input[type="checkbox"]').is(':checked')
 
     if (count == 9 && check == true) {
         $("button.submit").attr("disabled", false);
         $("button.submit").removeClass('dissabled');
         $("button.submit").addClass('enabled');
         $("div.revisa").hide();
         console.log(validCampos);
 
     } else if (count != 9) {
         $("button.submit").attr("disabled", true);
         $("button.submit").removeClass('enabled');
         $("div.revisa").html("<p class='denegate'>Puedes tener un campo inválido, porfavor revisa y aprieta nuevamente en aceptar</p>");
         //validado = false;
 
     } else {
         $("button.submit").attr("disabled", true);
         $("button.submit").removeClass('enabled');
         $("div.revisa").html("<p class='denegate'>Puedes tener un campo inválido, porfavor revisa y aprieta nuevamente en aceptar</p>");
         //validado = false;   
     }
 });