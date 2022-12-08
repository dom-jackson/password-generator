// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var failPassword = document.querySelector("#password")


  var confirmLength =  prompt("How many characters would you like your password to contain? between 8 - 128 characters", "");
  if (isNaN(confirmLength)) {
  confirmLength = prompt("Please enter a number within the range 8 - 128")
  } else if (confirmLength > 128) {
  confirmLength = prompt("Please enter number within the range 8 - 128")
  } else if (confirmLength < 8) {
  confirmLength = prompt("Please enter number within the range 8 - 128");
  }
console.log(confirmLength);
  var characters = [""];
  var password = [""];

  var confirmLowercase = confirm ("click okay to confirm including lower case characters");
  const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  if (confirmLowercase === true) {
  var availableCharacters = characters.concat(lowerCase);
  };

  var confirmUppercase = confirm ("click okay to confirm including upper case characters");
  const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  if (confirmUppercase === true){
  var availableCharacters = characters.concat(lowerCase, upperCase)
  };

  var confirmNumbers = confirm ("click okay to confirm including numeric characters");
  const numbers = [1,2,4,5,6,7,8,9,0];
  if (confirmLowercase, confirmUppercase, confirmNumbers === true) {
  var availableCharacters = characters.concat(lowerCase, upperCase, numbers);
  };

  var confirmSymbols = confirm ("click okay to confirm including special characters");
  const symbols = ["!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","~"];
  if (confirmSymbols === true) {
  var availableCharacters = characters.concat(lowerCase, upperCase, numbers, symbols);
  };

  if (availableCharacters = []) {
    failPassword = "Unable to Generate Password";
  }

  for (var i=0; i < confirmLength; i++){
  Math.floor(Math.random() * availableCharacters.length);
  var passwordText = confirmLength[i];
  };

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
};