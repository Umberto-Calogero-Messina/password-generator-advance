import '../scss/styles.scss';

const textLengthElement = document.getElementById('text-length');
const buttonElement = document.getElementById('generate__password');
const rangeElement = document.getElementById('range');
const passwordElement = document.getElementById('password');
const optionsElement = document.getElementById('options');
const strengthElement = document.getElementById('strength__password');

let allowedChar = '';
let passwordLength = rangeElement.value;

const passwordSettings = {
  lowercase: 'abcdefghijklmnñopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ',
  numbers: '1234567890',
  symbols: '+-.,!"·$%&/()=?{}'
};

const setLengthPassword = ev => {
  if (ev) {
    passwordLength = ev.target.value;
    textLengthElement.textContent = passwordLength;
  }

  if (passwordLength <= 5) {
    strengthElement.textContent = `TOO SHORT`;
  } else if (passwordLength > 5 && passwordLength < 10) {
    strengthElement.textContent = `WEAK`;
  } else if (passwordLength >= 10 && passwordLength < 15) {
    strengthElement.textContent = `MEDIUM`;
  } else if (passwordLength >= 15) {
    strengthElement.textContent = `STRENGTH`;
  }
};

setLengthPassword();

const calcPasswordOptions = () => {
  allowedChar = '';
  const setCheckbox = document.querySelectorAll('input:checked');

  if (setCheckbox.length != 0) {
    buttonElement.disabled = allowedChar.length;
    return;
  } else {
    buttonElement.disabled = !allowedChar.length;
  }

  if (setCheckbox)
    setCheckbox.forEach(cb => {
      allowedChar += passwordSettings[cb.id];
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

const printPasswordValue = () => {
  passwordElement.value = generatePassword();
};

rangeElement.addEventListener('input', setLengthPassword);
optionsElement.addEventListener('click', calcPasswordOptions);
buttonElement.addEventListener('click', printPasswordValue);
