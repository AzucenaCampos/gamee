const preguntasArte= [
    {
        pregunta: '¿Quién escribió "La Metamorfosis"?',
        respuesta: {
            a: "Dante Alighieri",
            b: "Frank Kafka",
            c: "Fiódor Dostoyevski"
        },
        respuestacorrecta: "b"
    },
    {
        pregunta: "¿Quién pintó la Gioconda?",
        respuesta: {
            a: "Leonardo DaVinci",
            b: "Miguel Angel",
            c: "Pablo Picasso"
        },
        respuestacorrecta: "a"
    },
    {
        pregunta: "¿Qué nacionalidad tiene Frida Kalo?",
        respuesta: {
            a: "Mexicana",
            b: "Argentina",
            c: "Italiana"
        },
        respuestacorrecta: "a"
    },
    {
        pregunta: "¿Cuál es el séptimo arte?",
        respuesta: {
            a: "Teatro",
            b: "Danza",
            c: "Cine"
        },
        respuestacorrecta: "c"
    },
    {
        pregunta: "¿Cuál es el quinto libro de Harry Potter?",
        respuesta: {
            a: "La Piedra Filosofal",
            b: "La Orden del Fenix",
            c: "El Caliz de Fuego"
        },
        respuestacorrecta: "b"
    },
]

var i=0;
var vidas = 3;
var vivo = true;

window.onload = function(){
    document.getElementById("text").innerHTML = preguntasArte[i].pregunta;
    document.getElementById("respuestaA").innerHTML=preguntasArte[i].respuesta.a;
    document.getElementById("respuestaB").innerHTML=preguntasArte[i].respuesta.b;
    document.getElementById("respuestaC").innerHTML=preguntasArte[i].respuesta.c;
    mostrarVidas();
}

function mostrarVidas () {
    document.getElementById("vidasRestantes").innerHTML= "VIDAS: "+ vidas; 
}

function correcta (respuestaElegida){
    if (i<5){
        if (respuestaElegida==preguntasArte[i].respuestacorrecta){
            i=i+1;
            siguientePregunta (i);
        }
        else {
            vidas = vidas - 1;
            mostrarVidas();
            if (vidas == 0){
                vivo = false;
                alert ("Game Over!!");
                vidas= 3;
                i=0;
                siguientePregunta (i);
            }
            else{
                alert ("Te queda(n) " + vidas + " vida(s)")
            }
        }
    }
    else if (vivo = true){
        alert ("YOU WIN");
    }
}

function siguientePregunta(i){
    document.getElementById("text").innerHTML=preguntasArte[i].pregunta;
    document.getElementById("respuestaA").innerHTML=preguntasArte[i].respuesta.a;
    document.getElementById("respuestaB").innerHTML=preguntasArte[i].respuesta.b;
    document.getElementById("respuestaC").innerHTML=preguntasArte[i].respuesta.c;
    mostrarVidas();
}
