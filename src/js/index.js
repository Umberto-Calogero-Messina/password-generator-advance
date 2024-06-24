import '../scss/styles.scss';

/*
## Normas del ejercicio



- En la parte de STRENGTH tenemos 4 valores posibles:

  - TOO SHORT: Este valor aparecerá siempre que el password tenga 5 o menos caracteres.
  - WEAK:Este valor aparecerá si el range es superior a 5 y menor de 10.
  - MEDIUM: Este valor aparecerá si el range es superior a 10 y menor a 15.
  - STRENGTH: Este valor aparecerá si el range es superior a 15.

- El botón SÓLO se podrá pulsar cuando la longitud sea mayor de 5

## Pistas y pasos a seguir

- Crear las 2 cajas iniciales
- Poner los textos
- Sincronizar el length del nuevo password con el input range
- Conseguir que se genere un string de esa longitud al pulsar el botón y se escriba en el primer input.

## Principios Importantes para la creación de aplicaciones.

- Las funciones deben tener UNA ÚNICA responsabilidad, Es mejor tener 5 funciones con 2 líneas cada una que tener una sola función que se encargue de 5 tareas distintas.
*/

const textLengthElement = document.getElementById('text-length');
const buttonElement = document.getElementById('generate__password');
const rangeElement = document.getElementById('range');
const passwordElement = document.getElementById('password');
const optionsElement = document.getElementById('options');

let allowedChar = '';

const passwordSettings = {
  lowercase: 'abcdefghijklmnñopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ',
  numbers: '1234567890',
  symbols: '+-.,!"·$%&/()=?{}'
};

let passwordLength = 16;

const setLengthPassword = ev => {
  passwordLength = ev.target.value;
  textLengthElement.textContent = passwordLength;
};

const setInputValue = event => {
  if (event.target.type !== 'checkbox') {
    return;
  }
  calcPasswordOptions();
};

const calcPasswordOptions = () => {
  allowedCharacters = '';
  const setCheckbox = document.querySelectorAll('input:checked');
  setCheckbox.forEach(checkbox => {
    allowedCharacters += passwordSettings[checkbox.id];
  });
};

const generateRandomNumber = () => {
  return Math.floor(Math.random() * allowedChar.length);
};

const generatePassword = () => {
  let finalPassword = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = generateRandomNumber();
    const randomCharacter = allowedChar.charAt(randomNumber);
    finalPassword += randomCharacter;
  }
  return finalPassword;
};

rangeElement.addEventListener('input', setLengthPassword);
optionsElement.addEventListener('click', setInputValue);
buttonElement.addEventListener('click', generatePassword);
