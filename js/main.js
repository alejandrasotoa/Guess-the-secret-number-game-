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
    let number = parseInt(inputContent.value);
    console.log(number);

    if (Number.isNaN(number)) {
        feedback.innerHTML = 'Por favor introduce un número';
    } else if  (randomNumberactual === number) {
        feedback.innerHTML = '¡HAS GANADO CAMPEONA!';
    } else if (number > randomNumberactual) {
        feedback.innerHTML = 'Demasiado alto, intenta otra vez';
        acc++
        counter.innerHTML = acc;
    }
    else {
        feedback.innerHTML = 'Demasiado bajo, intenta otra vez';
        acc++
        counter.innerHTML = acc;
    }
}

mainButton.addEventListener('click', getInput);

