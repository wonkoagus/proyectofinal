



var personas = [];
personas.push(datosPersona);

/* VARIABLE DE DATOS PERSONALES**/
var datosPersona =
 {
    FechaNacimiento: "21/03/1990",
    edad:32,
    nacionalidad: "Argentino",

};


window.onload = () =>{

    document.getElementById("fechaNacimiento").innerHTML = datosPersona.FechaNacimiento;
    document.getElementById("edad").innerHTML = datosPersona.edad;
    document.getElementById("nacionalidad").innerHTML = datosPersona.nacionalidad;
  };
     
  function mostrarDatos(){
    var x = document.getElementById("datosPersona").hidden;
    document.getElementById("datosPersona").hidden = !x
  };









