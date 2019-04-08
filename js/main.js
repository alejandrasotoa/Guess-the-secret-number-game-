'use strict';

const inputContent = document.querySelector('.main__input');
const mainButton = document.querySelector('.main__number');
const feedback = document.querySelector('.main__feedback--text');
const counter = document.querySelector('.main__counter');

function randomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const randomNumberactual = randomNumber(100);
console.log(randomNumberactual);

let acc = 0; 

function getInput() {
    let number = inputContent.value;
    console.log(number);
    counter.innerHTML = acc++;

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

//actualizar el contador de intentos cada vez que el usuario pruebe
