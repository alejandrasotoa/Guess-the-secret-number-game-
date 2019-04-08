'use strict';

const inputContent = document.querySelector('.main__input');
const mainButton = document.querySelector('.main__number');
const feedback = document.querySelector('.main__feedback--text');

//generar un número random e imprimirlo en la consola.

function randomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const randomNumberactual = randomNumber(100);
console.log(randomNumberactual);
//al pulsar el botón de prueba, acceder al contenido del input y mostrarlo en la consola

function getInput() {
    let number = inputContent.value;
    console.log(number);

    if (number === '') {
        feedback.innerHTML = 'Por favor introduce un número';
    } else if (number > randomNumberactual) {
        feedback.innerHTML = 'Demasiado alto, intenta otra vez';
    } else if (number < randomNumberactual) {
        feedback.innerHTML = 'Demasiado bajo, intenta otra vez';
    } else {
        feedback.innerHTML = '¡HAS GANADO CAMPEONA!'
    }
}

mainButton.addEventListener('click', getInput);


//comparar el número que el usuario ha escrito en el input con el número aleatorio, y pintar el feedback correspondiente en la pantalla ("demasiado alto", "demasiado bajo", "¡HAS GANADO, CAMPEONA!")



//actualizar el contador de intentos cada vez que el usuario pruebe
