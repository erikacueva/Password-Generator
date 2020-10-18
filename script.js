//  click generates series of prompts for password criteria (array)
//  select password criteria
// if user does not select appropriate characters, then computer prompts them to try again
// prompt for password lentgh
// if user choice === 8 characters with < 128 characters 
// array of lowercase, uppercase, numeric, and/or special characters
//  

// var passWordLength = prompt ("Please select a password length between 8 and 128 characters.");
//  while (passWordLength < 8 || passWordLength > 128) {
//    alert ("Select a password length more than 8 characters long and less than 128 characters long.");
//    prompt ("Please select a password length between 8 and 128 characters.");
//  }

var passWordLength = prompt ("Please select a password length between 8 and 128 characters.");
 while (passWordLength < 8 || passWordLength > 128) {
   alert ("Select a password length more than 8 characters long and less than 128 characters long.");
   passWordLength = prompt ("Please select a password length between 8 and 128 characters.");
 }
console.log(passWordLength)
// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  passwordText.value = password;
}

let password = passWordLength;
password ++; console.log(password)

// // Add event listener to generate button
var generateBtn = document.getElementById
generateBtn.addEventListener("click", writePassword);

// object of all the functions listed below
const randomFunctions = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};



function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) +97);
}
console.log(getRandomLower());

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) +65);
}
console.log(getRandomUpper());

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) +48);
}
console.log(getRandomNumber());

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>?,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(getRandomSymbol());




