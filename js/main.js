'use strict';

const body = document.querySelector ('body');
const inputContent = document.querySelector ('.main__input');
const mainButton = document.querySelector ('.main__button');
const feedback = document.querySelector ('.main__description');
const counterItem = document.querySelector ('.main__counter');
const fireItem = document.querySelector ('.fire__item');
const iceItem = document.querySelector ('.ice__item');
const defaultItem = document.querySelector ('.default__item');
const resetButton = document.querySelector ('.reset__button');

let randomNumberactual = 0;
let acc = 0;
let onGame = false;

const randomNumber = max => {
  return Math.ceil (Math.random () * max);
};

const counter = () => {
  acc++;
  counterItem.innerHTML = acc;
};

const startGame = () => {
  let number = parseInt(inputContent.value);
  if (onGame === false) {
    randomNumberactual = randomNumber (100);
    acc = 0;
    counterItem.innerHTML = acc;
    onGame = true;
    feedbackInfo(number);
  } else {
    feedbackInfo(number);
  }
};

const pressEnter = event => {
  let number = parseInt (inputContent.value);
  if (event.keyCode === 13) {
    startGame ();
  }
};

function iceClass () {
  defaultItem.classList.add ('hidden');
  body.classList.remove ('fire');
  body.classList.add ('ice');
  fireItem.classList.add ('hidden');
  iceItem.classList.remove ('hidden');
}

function fireClass () {
  defaultItem.classList.add ('hidden');
  body.classList.remove ('ice');
  body.classList.add ('fire');
  fireItem.classList.remove ('hidden');
  iceItem.classList.add ('hidden');
}

function win () {
  body.classList.remove ('ice', 'fire');
  defaultItem.classList.remove ('hidden');
  iceItem.classList.add ('hidden');
  fireItem.classList.add ('hidden');
}

function feedbackInner (guess, text, close) {
  feedback.innerHTML = `El ${guess} está ${text}, intenta uno más ${close}`;
}

function feedbackInfo (number) {
  if (Number.isNaN (number)) {
    feedback.innerHTML = 'Por favor introduce un número';
  } else if (number <= 0 || number > 100) {
    feedback.innerHTML = 'Por favor introduce un número el 1 y el 100';
  } else if (randomNumberactual === number) {
    feedback.innerHTML = '¡YEEIIIII, HAS GANADO!';
    mainButton.disabled = true;
    inputContent.disabled = true;
    onGame = false;
    counter ();
    win ();
  } else if (number <= randomNumberactual + 10 && number > randomNumberactual) {
    feedbackInner (number, 'cerca', 'bajo');
    fireClass ();
    counter ();
  } else if (number >= randomNumberactual - 10 && number < randomNumberactual) {
    feedbackInner (number, 'cerca', 'alto');
    fireClass ();
    counter ();
  } else if (number >= randomNumberactual + 10) {
    feedbackInner (number, 'muy lejos', 'bajo');
    iceClass ();
    counter ();
  } else {
    feedbackInner (number, 'muy lejos', 'alto');
    iceClass ();
    counter ();
  }
}

const resetGame = () => {
  mainButton.disabled = false;
  inputContent.disabled = false;
  inputContent.value = '';
  win();
  startGame();
};

mainButton.addEventListener ('click', startGame);
resetButton.addEventListener ('click', resetGame);
body.addEventListener ('keyup', pressEnter);
