'use strict';

const inputContent = document.querySelector('.main__input');
const mainButton = document.querySelector('.main__number');

//generar un número random e imprimirlo en la consola.

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

console.log('> ' + getRandomNumber(100));

//al pulsar el botón de prueba, acceder al contenido del input y mostrarlo en la consola

function getInput() {
    console.log(inputContent.value);
}

mainButton.addEventListener('click', getInput);


//comparar el número que el usuario ha escrito en el input con el número aleatorio, y pintar el feedback correspondiente en la pantalla ("demasiado alto", "demasiado bajo", "¡HAS GANADO, CAMPEONA!")
//actualizar el contador de intentos cada vez que el usuario pruebe
