var stringColor = generarColorAleatorio()
var booleano = false

function cargarColorTexto(){
    if(!booleano){
        stringColor = generarColorAleatorio()
    }
    
    var p = document.getElementById("color")
    p.textContent = stringColor.toLocaleUpperCase(); 
    mostrarFacil();
}

function chequearBotones(){
    var wrapper = document.getElementsByClassName("wrapper")
    var facil = document.getElementById("facil")
    var dificil = document.getElementById("dificil")
    if(  wrapper[0].children[3].style.visibility == "hidden"){
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

function iniciarBotones(){
    var facil = document.getElementById("facil")
    var dificil = document.getElementById("dificil")
    facil.addEventListener("click",mostrarFacil)
    dificil.addEventListener("click",mostrarDificil)
}

function mostrarFacil(){
    var wrapper = document.getElementsByClassName("wrapper");
    wrapper[0].children[3].style.visibility= "hidden";
    wrapper[0].children[4].style.visibility = "hidden";
    wrapper[0].children[5].style.visibility = "hidden";

    chequearBotones();
    setearBotones(stringColor,"facil");
}

function mostrarDificil(){
    var wrapper = document.getElementsByClassName("wrapper");
    wrapper[0].children[3].style.visibility = "visible";
    wrapper[0].children[4].style.visibility = "visible";
    wrapper[0].children[5].style.visibility = "visible";
    chequearBotones();
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

function setearBotones(color,dificultad){
    var wrapper = document.getElementsByClassName("wrapper");
    if(dificultad=="facil"){
        var posicion = obtenerRandom("facil")

        for(var i = 0;i<3;i++){
            wrapper[0].children[i].style.backgroundColor = generarColorAleatorio()
        }

        wrapper[0].children[posicion].style.backgroundColor = color

        //seteo eventos para todos los botones
        setearEventos(3,posicion)
    }
    else{
        var posicion = obtenerRandom("dificil")

        for(var i = 0;i<6;i++){
            wrapper[0].children[i].style.backgroundColor = generarColorAleatorio()
        }

        wrapper[0].children[posicion].style.backgroundColor = color

        //seteo eventos para todos los botones
        setearEventos(6,posicion)

    }

}

function setearEventos(longitud,posicion){
    var wrapper = document.getElementsByClassName("wrapper");
    for(var i = 0;i<longitud;i++){
        if(i != posicion){
            wrapper[0].children[i].addEventListener("click", function () {
                this.style.visibility = "hidden"
            })
        }
        else{
            wrapper[0].children[posicion].addEventListener("click", reiniciarJuego)
        }
    }
}

function reiniciarJuego(){
    
}

reiniciarJuego();

cargarColorTexto();
chequearBotones();
iniciarBotones();