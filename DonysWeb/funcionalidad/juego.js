'use strict'

console.log("Hey ya estoy cargado");

let parrafo= document.querySelector(".hola");
let botonAction= document.querySelector(".botonAccion");

botonAction.addEventListener("click", ()=>{
	
	parrafo.innerHTML="Hey acabas de dar click, ¡¡ERES LOCO O QUE!!";
});