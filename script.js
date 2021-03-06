//Genero un color aleatorio
//Entro en modo facil
//Seteo botones dificultad
//Seteo evento para boton correcto
//Seteo evento para boton incorrecto
var wrapper = document.getElementsByClassName("wrapper")


function generarValorAleatorio(maximo){
    return (Math.floor(Math.random() * (maximo - 0)) + 0);
}


function mostrarSegunDificultad(dificultad){
    var stringColor = generarColorAleatorio();
    var wrapper = document.getElementsByClassName("wrapper")
    if(dificultad=="facil"){
        wrapper[0].children[0].style.visibility= "visible";
        wrapper[0].children[1].style.visibility = "visible";
        wrapper[0].children[2].style.visibility = "visible";
        wrapper[0].children[3].style.visibility= "hidden";
        wrapper[0].children[4].style.visibility = "hidden";
        wrapper[0].children[5].style.visibility = "hidden";
    }
    else{
        wrapper[0].children[0].style.visibility= "visible";
        wrapper[0].children[1].style.visibility = "visible";
        wrapper[0].children[2].style.visibility = "visible";
        wrapper[0].children[3].style.visibility = "visible";
        wrapper[0].children[4].style.visibility = "visible";
        wrapper[0].children[5].style.visibility = "visible";
    }

    setearColorTexto(stringColor);
    setearColoresCuadrados(dificultad,stringColor);
    
    
}

function setearEventoIncorrecto(posicion,dificultad){
    var wrapper = document.getElementsByClassName("wrapper")
    var maximo;
    if(dificultad=="facil"){
        maximo = 3;
    }
    else{
        maximo = 6;
    }

    for(var i = 0;i<maximo;i++){
            wrapper[0].children[i].addEventListener("click",function () {
                this.style.visibility = "hidden";
            })
    }

    wrapper[0].children[posicion].addEventListener("click",function (){
        alert("Ganaste!");
        window.location.reload(false);
    })
}


function setearColoresCuadrados(dificultad,stringColor){
    var wrapper = document.getElementsByClassName("wrapper")
    if(dificultad=="facil"){
        var valorFacil = generarValorAleatorio(3);
        if(valorFacil>=1){
            valorFacil=valorFacil-1;
        }
        wrapper[0].children[0].style.backgroundColor= generarColorAleatorio();
        wrapper[0].children[1].style.backgroundColor = generarColorAleatorio();
        wrapper[0].children[2].style.backgroundColor = generarColorAleatorio();
        console.log(valorFacil);
        wrapper[0].children[valorFacil].style.backgroundColor = stringColor;
       
        setearEventoIncorrecto(valorFacil,dificultad);
    }
    else{
        var valorDificil = generarValorAleatorio(6);
        if(valorDificil>=1){
            valorDificil=valorDificil-1;
        }
        wrapper[0].children[0].style.backgroundColor= generarColorAleatorio();
        wrapper[0].children[1].style.backgroundColor = generarColorAleatorio();
        wrapper[0].children[2].style.backgroundColor = generarColorAleatorio();
        wrapper[0].children[3].style.backgroundColor = generarColorAleatorio();
        wrapper[0].children[4].style.backgroundColor = generarColorAleatorio();
        wrapper[0].children[5].style.backgroundColor = generarColorAleatorio();
        console.log(valorDificil);
        wrapper[0].children[valorDificil].style.backgroundColor = stringColor;
        
        setearEventoIncorrecto(valorDificil,dificultad);
    }
}

function setearBotonesDificultad(){
    var facil = document.getElementById("facil");
    var dificil = document.getElementById("dificil");

    facil.addEventListener("click", function () {
        mostrarSegunDificultad("facil");
    })

    dificil.addEventListener("click", function () {
        mostrarSegunDificultad("dificil");
    })
}


function setearColorTexto(stringColor){
    var p = document.getElementById("color")
    p.textContent = stringColor.toLocaleUpperCase(); 
}

function generarColorAleatorio(){
    var vectorColores = []
    for(var i = 0;i<3;i++){
        vectorColores[i] = colorAleatorio()
    }
    var stringColor = "rgb( "+vectorColores[0]+" , "+vectorColores[1]+" , "+vectorColores[2]+" )"
    return stringColor
}

function colorAleatorio(){
    var color =  Math.floor(Math.random() * (255 - 0)) + 0;
    return color.toString();
}


//------------------------------



/*
var stringColor = generarColorAleatorio();
var condicionInicial = false;
function reiniciar(){
    window.location.reload(false);
}



function cargarColorTexto(){
    var stringColor = generarColorAleatorio()
        iniciarBotones(stringColor);
}




function chequearBotones(){
    var wrapper = document.getElementsByClassName("wrapper")
    var facil = document.getElementById("facil")
    var dificil = document.getElementById("dificil")
    if( (wrapper[0].children[3].style.visibility) == "hidden"){
        facil.style.backgroundColor = "black"
        facil.style.color = "white"
        dificil.style.backgroundColor = "plum"
        dificil.style.color = "white"
    }
    else{
        dificil.style.backgroundColor = "black"
        dificil.style.color = "white" 
        facil.style.backgroundColor = "plum"
        facil.style.color = "white"
    }

    setearColorTexto(color);
}






function iniciarBotones(stringColor){
    var facil = document.getElementById("facil")
    var dificil = document.getElementById("dificil")
    var newC = document.getElementById("newColor")

    facil.addEventListener("click",function (){
        document.getElementById("div1").style.backgroundColor="black"
        
        condicionInicial = true;
        mostrarFacil(stringColor);
    })
    dificil.addEventListener("click",function (){
        document.getElementById("div1").style.backgroundColor="black"
        
        condicionInicial = true;
        mostrarDificil(stringColor);
    })
}

function mostrarFacil(stringColor){
    var wrapper = document.getElementsByClassName("wrapper");
    wrapper[0].children[0].style.visibility= "visible";
    wrapper[0].children[1].style.visibility = "visible";
    wrapper[0].children[2].style.visibility = "visible";
    wrapper[0].children[3].style.visibility= "hidden";
    wrapper[0].children[4].style.visibility = "hidden";
    wrapper[0].children[5].style.visibility = "hidden";

   // chequearBotones();
     
     
    setearBotones(stringColor,"facil");
}

function mostrarDificil(stringColor){
    var wrapper = document.getElementsByClassName("wrapper");
    wrapper[0].children[0].style.visibility= "visible";
    wrapper[0].children[1].style.visibility = "visible";
    wrapper[0].children[2].style.visibility = "visible";
    wrapper[0].children[3].style.visibility = "visible";
    wrapper[0].children[4].style.visibility = "visible";
    wrapper[0].children[5].style.visibility = "visible";
   // chequearBotones();
   
    p.textContent = stringColor.toLocaleUpperCase(); 
    setearBotones(stringColor,"dificil");
}

function obtenerRandom(dificultad){
    if(dificultad == "facil"){
        return Math.floor(Math.random() * (2 - 0)) + 0;
    }
    else{
        return Math.floor(Math.random() * (5 - 0)) + 0; 
    }
}

function setearBotones(stringColor,dificultad){
    var wrapper = document.getElementsByClassName("wrapper");
    if(dificultad=="facil"){
        var posicion = obtenerRandom("facil")

        for(var i = 0;i<3;i++){
            wrapper[0].children[i].style.backgroundColor = generarColorAleatorio()
        }

        wrapper[0].children[posicion].style.backgroundColor = stringColor

    
      eventoEquivocado(3,posicion);
      eventoCorrecto(3,posicion,stringColor);
    
    }
    else{
        var posicion = obtenerRandom("dificil")

        for(var i = 0;i<6;i++){
            wrapper[0].children[i].style.backgroundColor = generarColorAleatorio()
        }

        wrapper[0].children[posicion].style.backgroundColor = stringColor

       eventoEquivocado(6,posicion);
       eventoCorrecto(6,posicion,stringColor);

    }

}

function eventoCorrecto(longitud,posicion,color){
    var wrapper = document.getElementsByClassName("wrapper");
    wrapper[0].children[posicion].addEventListener("click", function () {
     for(var i =0;i<longitud;i++){
        if(i!=posicion){
            wrapper[0].children[i].style.visibility = "visible";
            wrapper[0].children[i].style.backgroundColor = color;
        }
     }
     removerEvento(longitud,posicion);
     document.getElementById("div1").style.backgroundColor=color
     document.getElementById("win").style.visibility = "visible"
     document.getElementById("facil").addEventListener("click", function (e){
         
         reiniciar();
     })
     document.getElementById("dificil").addEventListener("click", function (e){
        reiniciar();
    })
    })

   
}


function removerEvento(longitud,posicion){
    var wrapper = document.getElementsByClassName("wrapper");
    for(var i = 0;i<longitud;i++){
        
            wrapper[0].children[i].addEventListener("click",function(){ this.style.visibility = "visible"})
        
    }
}


function eventoEquivocado(longitud,posicion){
    var wrapper = document.getElementsByClassName("wrapper");
    for(var i = 0;i<longitud;i++){
        if(i!=posicion){
            wrapper[0].children[i].addEventListener("click", function(){ this.style.visibility = "hidden"})
        }
    }
}

function ocultarBotones(){
    var wrapper = document.getElementsByClassName("wrapper");
    wrapper[0].children[0].style.visibility= "hidden";
    wrapper[0].children[1].style.visibility = "hidden";
    wrapper[0].children[2].style.visibility = "hidden";
    wrapper[0].children[3].style.visibility = "hidden";
    wrapper[0].children[4].style.visibility = "hidden";
    wrapper[0].children[5].style.visibility = "hidden";
}

*/
setearBotonesDificultad();