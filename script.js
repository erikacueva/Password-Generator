//  click generates series of prompts for password criteria (array)
//  select password criteria
// if user does not select appropriate characters, then computer prompts them to try again
// prompt for password lentgh
// if user choice === 8 characters with < 128 characters 
// array of lowercase, uppercase, numeric, and/or special characters
//  

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const randomFunctions = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

writePassword = 

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) +97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) +65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) +48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>?,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}





