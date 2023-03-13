let listElements = document.querySelectorAll(".list__boton--click")

listElements.forEach(listElement => {
        listElement.addEventListener("click", ()=>{
        

            listElement.classList.toggle("arrow");




           

            let height = 0;
            let menu = listElement.nextElementSibling;
            
            if(menu.clientHeight == "0"){
                height=menu.scrollHeight
                console.log(menu.scrollHeight);
                console.log(menu.clientHeight);
                
          }
            menu.style.height = height+"px";
            
                            
        })





});



function mostrarMenu(){
    if (document.getElementById("mostrarMenu").style="click arrow"){
        document.getElementById("navbar").style.display = "hidden";
        
    }else{
        document.getElementById("navbar");
        obj.style.removeProperty("display");
    }

   
    
};






function mostrarDatosPersonales(){

    document.getElementById("datosPersonales").style.display = "";
    document.getElementById("bio").style.display = "none";
    document.getElementById("galeria").style.display ="none";
    document.getElementById("obras").style.display = "none";
    document.getElementById("trabajos").style.display = "none";
    document.getElementById("contacto").style.display = "none";

}


function mostrarBio(){

    document.getElementById("datosPersonales").style.display = "none";
    document.getElementById("bio").style.display = "";
    document.getElementById("galeria").style.display ="none";
    document.getElementById("obras").style.display = "none";
    document.getElementById("trabajos").style.display = "none";
    document.getElementById("contacto").style.display = "none";
}



function mostrarGaleria(){
    
    
    document.getElementById("datosPersonales").style.display = "none";
    document.getElementById("bio").style.display = "none";
    document.getElementById("galeria").style.display ='';
    document.getElementById("obras").style.display = "none";
    document.getElementById("trabajos").style.display = "none";
    document.getElementById("contacto").style.display = "none";
}


function mostrarObras(){

document.getElementById("datosPersonales").style.display = "none";
document.getElementById("bio").style.display = "none";
document.getElementById("galeria").style.display ='none';
document.getElementById("obras").style.display = "";
document.getElementById("trabajos").style.display = "none";
document.getElementById("contacto").style.display = "none";

}

function mostrarTrabajos(){

    document.getElementById("datosPersonales").style.display = "none";
    document.getElementById("bio").style.display = "none";
    document.getElementById("galeria").style.display ='none';
    document.getElementById("obras").style.display = "none";
    document.getElementById("trabajos").style.display = "";
    document.getElementById("contacto").style.display = "none";
     }



   function mostrarContacto(){
    document.getElementById("datosPersonales").style.display = "none";
    document.getElementById("bio").style.display = "none";
    document.getElementById("galeria").style.display ='none';
    document.getElementById("obras").style.display = "none";
    document.getElementById("trabajos").style.display = "none";
    document.getElementById("contacto").style.display = "";
        };



          

//             var datosPersonalesDatos =
//  {
//     FechaDeNacimiento: "21/03/1990",
//     edad:32,
//     nacionalidad: "Argentino",
    
// }

// var personas = [];

// personas.push(datosPersonalesDatos)