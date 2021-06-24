'use strict'

console.log("Aqui estoy");

//Programa que calcule el ahorro mensual
//Entradas: ingreso diario promedio despues de 5 ingresos(ing)
//Salida: ahorro total del mes

let ingreso= [];

function promedio(listaNumeros){
	let total=0;
	for (let i=0; i<listaNumeros.length; i++){
		total=total+Number(listaNumeros[i]);
	}
	total=total/5;
	return total;
}

function ingresoCincoDias(){
	for(let i=0; i<5;i++){
		let ing= prompt("Ingresa dia "+(i+1));
		ingreso.push(ing);
	}

	alert(promedio(ingreso));
}

function ahorroMensual(){
	let valorDia= Number(ingresoCincoDias());
	let valorMes= valorDia*30;
	alert( valorMes);
}
