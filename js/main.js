'use strict';

const inputContent = document.querySelector('.main__input');
const mainButton = document.querySelector('.main__number');
const feedback = document.querySelector('.main__feedback--text');

//generar un número random e imprimirlo en la consola.

const randomNumber =  (max) => {
    return Math.ceil(Math.random() * max);
}

console.log(randomNumber(100));

//al pulsar el botón de prueba, acceder al contenido del input y mostrarlo en la consola

function getInput() {
    let number = inputContent.value;
    console.log(number);

    if (number = randomNumber) {
        feedback.innerHTML = '¡HAS GANADO, CAMPEONA!';
    }
}

mainButton.addEventListener('click', getInput);


//comparar el número que el usuario ha escrito en el input con el número aleatorio, y pintar el feedback correspondiente en la pantalla ("demasiado alto", "demasiado bajo", "¡HAS GANADO, CAMPEONA!")



//actualizar el contador de intentos cada vez que el usuario pruebe
