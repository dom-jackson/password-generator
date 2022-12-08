// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(chosenLength, chosenLowercase, chosenUppercase, chosenNumbers, chosenSymbols) {
// 1. prompt the user for the password criteria
//  a.  Password length 8 - 128
//  b.  Lowercase, Uppercase, numbers, special characters

const confirmLength =  prompt("How many characters would you like your password to contain? between 8 - 128 characters", "");
const confirmLowercase = confirm ("click okay to confirm including lower case characters");
const confirmUppercase = confirm ("click okay to confirm including upper case characters");
const confirmNumbers = confirm ("click okay to confirm including numeric characters");
const confirmSymbols = confirm ("click okay to confirm including special characters");

  function chosenLength(){
  var passwordLength = Number(window.prompt);
  confirmLength = passwordLength.value;
  console.log(passwordLength.value);
  // for (var i=0; i < length; i++){
  //   Math.floor(math.random() * passwordLength.length)};
  } 
  // else {(!passwordLength)} 
  // return "No Password Generated";}


function randomLowercase() {
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  if (confirmLowercase === true);
 return lowerCase[Math.floor(Math.random() * lowerCase.length)];
 chosenLowercase = randomLowercase.value
}

function randomUppercase(){
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (confirmUppercase === true);
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function randomNumbers(){
  const numbers = [1,2,4,5,6,7,8,9,0];
  if (confirmNumbers === true);
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function randomSymbols(){
  const symbols = '!#$%&()*+,-./:;<=>?@[]^_`~';
  if (confirmSymbols === true);
  return symbols[Math.floor(Math.random() * symbols.length)];
}
}


// 2. Validate the input
// 3. generate password based on criteria
// 4. Display the generated password on the page


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);