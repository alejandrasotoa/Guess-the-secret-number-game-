'use strict';

const body = document.querySelector('body');
const inputContent = document.querySelector('.main__input');
const mainButton = document.querySelector('.main__number');
const feedback = document.querySelector('.main__feedback--text');
const counterItem = document.querySelector('.main__counter');
const fireItem = document.querySelector('.fire__item');
const iceItem = document.querySelector('.ice__item');
const defaultItem = document.querySelector('.default__item');

function randomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const randomNumberactual = randomNumber(100);
console.log(randomNumberactual);

let acc = 0;
const counter = () =>{
    acc++;
    counterItem.innerHTML = acc;
} 

function getInput() {
    let number = parseInt(inputContent.value);
    console.log(number);
    feedbackInfo(number);
}

function iceClass() {
    defaultItem.classList.add('hidden');
    body.classList.remove('fire');
    body.classList.add('ice');
    fireItem.classList.add('hidden');
    iceItem.classList.remove('hidden');
}

function fireClass() {
    defaultItem.classList.add('hidden');
    body.classList.remove('ice');
    body.classList.add('fire');
    fireItem.classList.remove('hidden');
    iceItem.classList.add('hidden');
}

function feedbackInfo(number) {
    if (Number.isNaN(number)) {
        feedback.innerHTML = 'Por favor introduce un número';
    } else if  (randomNumberactual === number) {
        feedback.innerHTML = '¡HAS GANADO CAMPEONA!';
    } else if (number <= (randomNumberactual + 10) && number >= (randomNumberactual - 10)) {
        feedback.innerHTML = 'Estás cerca, intenta otra vez';
        fireClass();
        counter();
    } else {
        feedback.innerHTML = 'Muy lejos, intenta otra vez';
        iceClass();
        counter();
    }
}

mainButton.addEventListener('click', getInput);