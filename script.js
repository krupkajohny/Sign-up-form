/****** STRICT mode ON *******/
'use strict';

/****** Selecting DOM elements *******/
const form = document.querySelector('.signUpForm');
const elButton = document.querySelector('.submitBtn');

//inputs
const inputFirstName = document.querySelector('.firstName');
const inputLastName = document.querySelector('.lastName');
const inputEmail = document.querySelector('.email');
const inputPhone = document.querySelector('.phoneNumber');
const inputFirstPassword = document.querySelector('.firstPassword');
const inputConfirmPassword = document.querySelector('.confirmPassword');

// text messages
const elFirstNameMsg = document.querySelector('.firstNameMsg');
const elLastNameMsg = document.querySelector('.lastNameMsg');
const elEmailMsg = document.querySelector('.emailMsg');
const elPhoneNumberMsg = document.querySelector('.phoneNumberMsg');
const elFirstPasswordMsg = document.querySelector('.firstPasswordMsg');
const elConfirmPasswordMsg = document.querySelector('.confirmPasswordMsg');

/****** Data *******/
// validSymbols (phone, email etc.)
const validSymbols = {
  email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  phone: /^[0-9]+$/,
};

/****** Functions *******/
// message displaying
const displayMsg = (input, message) => (input.innerText = message);

// empty input check & removing white spaces before/after => output:true/false
const emptyInputCheck = (input) => input.value.trim().length > 0;

// input validation including special symbols checking if necessary
const inputValidation = (symbols = false, input, msgEl, errMsgStartStr) => {
  // error message initial reset
  msgEl.innerText = '';

  // error message string for empty input
  const errRequiredStr = `${errMsgStartStr.slice(0, 1).toUpperCase() + errMsgStartStr.slice(1)} is required!`;

  // error message string for forbidden symbols
  const errFormatStr = `Incorrect ${errMsgStartStr} format!`;

  // if input is empty => display error
  if (!emptyInputCheck(input)) return displayMsg(msgEl, errRequiredStr);

  // cutting spaces before/after and checking if symbols mach => if not display error
  if (symbols && !input.value.trim().match(symbols)) return displayMsg(msgEl, errFormatStr);
};

// if password is too short => display error
const passLengthCheck = (input, msgEl, minPassLength) => {
  const arrMsgIs = msgEl.textContent.length > 0;
  const passLengthShort = input.value.length > minPassLength;
  const shortPassErrStr = `Password must be at least ${minPassLength} characters long`;

  // if there's no err message displayed(empty input) and pass is too short => display error
  if (!arrMsgIs && !passLengthShort) return displayMsg(msgEl, shortPassErrStr);
};

// if password !== password confirm => display error
const passConfirmCheck = (inputPass, msgEl, inputConfirm) => {
  const arrMsgIs = msgEl.textContent.length > 0;
  const confirmIsNotPass = inputPass.value !== inputConfirm.value;
  const passNotMatchErrStr = `Passwords don't match`;

  // if passwords don't match => display error
  if (!arrMsgIs && confirmIsNotPass) return displayMsg(msgEl, passNotMatchErrStr);
};

/****** Event listeners *******/

// form inputValidation on the button submit (Create Account)
elButton.addEventListener('click', (e) => {
  e.preventDefault();

  // inputFirstName inputValidation (empty input)
  inputValidation(undefined, inputFirstName, elFirstNameMsg, 'first name');

  // inputLastName inputValidation (empty input)
  inputValidation(undefined, inputLastName, elLastNameMsg, 'last name');

  // inputEmail inputValidation (empty input) incl. symbols checking
  inputValidation(validSymbols.email, inputEmail, elEmailMsg, 'email');

  // inputPhone inputValidation incl. (empty input) symbols checking
  inputValidation(validSymbols.phone, inputPhone, elPhoneNumberMsg, 'phone');

  // inputFirstPassword inputValidation
  // (empty input)
  inputValidation(undefined, inputFirstPassword, elFirstPasswordMsg, 'password');
  // short password
  passLengthCheck(inputFirstPassword, elFirstPasswordMsg, 6);

  // inputConfirmPassword inputValidation
  // (empty input)
  inputValidation(undefined, inputConfirmPassword, elConfirmPasswordMsg, 'password');
  // passwords don't match
  passConfirmCheck(inputFirstPassword, elConfirmPasswordMsg, inputConfirmPassword);
});
