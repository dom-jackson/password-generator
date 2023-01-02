// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var confirmLength = prompt(
    "How many characters would you like your password to contain? between 8 - 128 characters",
    ""
  );
  if (isNaN(confirmLength)) {
    confirmLength = prompt("Please enter a number within the range 8 - 128");
  } else if (confirmLength > 128) {
    confirmLength = prompt("Please enter number within the range 8 - 128");
  } else if (confirmLength < 8) {
    confirmLength = prompt("Please enter number within the range 8 - 128");
  }
  console.log(confirmLength);
  var characters = [];
  var password = [];

  var confirmLowercase = confirm(
    "click okay to confirm including lower case characters"
  );
  const lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  if (confirmLowercase) {
    var characters = characters.concat(lowerCase);
  }

  var confirmUppercase = confirm(
    "click okay to confirm including upper case characters"
  );
  const upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  if (confirmUppercase) {
    var characters = characters.concat(upperCase);
  }

  var confirmNumbers = confirm(
    "click okay to confirm including numeric characters"
  );
  const numbers = [1, 2, 4, 5, 6, 7, 8, 9, 0];
  if (confirmNumbers) {
    var characters = characters.concat(numbers);
  }

  var confirmSymbols = confirm(
    "click okay to confirm including special characters"
  );
  const symbols = [
    "!",
    "#",
    "$",
    "%",
    "&",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "]",
    "^",
    "_",
    "`",
    "~",
  ];
  if (confirmSymbols) {
    var characters = characters.concat(symbols);
  }

  if (characters.length === 0) {
    document.querySelector("#password").innerHTML = "Unable to Generate Password";
  } else {
    for (var i = 0; i < confirmLength; i++) {
      var passwordText = characters[Math.floor(Math.random() * characters.length)];
      password.push(passwordText);
    }
    return password.join("");
  }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.innerHTML = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
{
}
