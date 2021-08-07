// Assignment code here

// random lowercase function
var genLowercase = function() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// random uppercase function
var genUppercase = function() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// random numeric function
var genNumber = function() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// random symbols function
var genSymbol = function() {
  const symbols = '!@#$%^&*()_+<>?/.,{}[]'
  return symbols[Math.floor(Math.random() * symbols.length)];
}

//  generate password function that will select appropriate character functions to include based on prompts
var generatePassword = function() {
  var generatedPassword = '';

  // receive length of password prompt
  var passwordLength = window.prompt("How many characters should your password include? Please enter between '8' and '128'");

  passwordLength = parseInt(passwordLength);

  if (passwordLength >= 8 && passwordLength <= 128) {
    // confirm lowercase
    var includeLowercase = window.confirm("Include lowercase letters?");
    
    // confirm uppercase
    var includeUppercase = window.confirm("Include uppercase letters?");

    // confirm numbers
    var includeNumber = window.confirm("Include numbers?");

    // confirm symbols
    var includeSymbol = window.confirm("Include symbols?");

    // lowercase
    if (includeLowercase && includeUppercase === false && includeNumber === false && includeSymbol === false) {
      for (var i = 0; i < passwordLength; i ++) {
        generatedPassword += genLowercase();
      }
    }

    // lowercase and uppercase
    if (includeLowercase && includeUppercase && includeNumber === false && includeSymbol === false) {
      for (var i = 0; i < passwordLength; i = i + 2)
      generatedPassword += genLowercase() + genUppercase();
    }

    // lowercase, uppercase and numbers
    if (includeLowercase && includeUppercase && includeNumber && includeSymbol === false) {
      for (var i = 0; i <= passwordLength; i = i + 3)
      generatedPassword += genLowercase() + genUppercase() + genNumber();
    }

    // lowercase, uppercase, numbers and symbols
    if (includeLowercase && includeUppercase && includeNumber && includeSymbol) {
      for (var i = 0; i < passwordLength; i = i + 3)
      generatedPassword += genLowercase() + genUppercase() + genNumber() + genSymbol();
    }

    // lowercase and numbers
    if (includeLowercase && includeUppercase === false && includeNumber && includeSymbol === false) {
      for (var i = 0; i < passwordLength; i = i + 2)
      generatedPassword += genLowercase() + genNumber();
    }

    // lowercase, numbers and symbols
    if (includeLowercase && includeUppercase === false && includeNumber && includeSymbol) {
      for (var i = 0; i < passwordLength; i = i + 3)
      generatedPassword += genLowercase() + genNumber() + genSymbol();
    }

    // lowercase and symbols
    if (includeLowercase && includeUppercase === false && includeNumber === false && includeSymbol) {
      for (var i = 0; i < passwordLength; i = i + 2)
      generatedPassword += genLowercase() + genSymbol();
    }

    //  lowercase, uppercase and symbols
    if (includeLowercase && includeUppercase && includeNumber === false && includeSymbol) {
      for (var i = 0; i < passwordLength; i = i + 3)
      generatedPassword += genLowercase() + genUppercase() + genSymbol();
    }

    // uppercase
    if (includeLowercase === false && includeUppercase && includeNumber === false && includeSymbol === false) {
      for (var i = 0; i < passwordLength; i ++) {
        generatedPassword += genUppercase();
      }
    }

    // uppercase and numbers
    if (includeLowercase === false && includeUppercase && includeNumber && includeSymbol === false) {
      for (var i = 0; i < passwordLength; i = i + 2) {
        generatedPassword += genUppercase() + genNumber();
      }
    }

    // uppercase and symbols
    if (includeLowercase === false && includeUppercase && includeNumber === false && includeSymbol) {
      for (var i = 0; i < passwordLength; i = i + 2) {
        generatedPassword += genUppercase() + genSymbol();
      }
    }

    // uppercase, numbers, symbols
    if (includeLowercase === false && includeUppercase && includeNumber && includeSymbol) {
      for (var i = 0; i < passwordLength; i = i + 3)
      generatedPassword += genUppercase() + genNumber() + genSymbol();
    }

    // numbers
    if (includeLowercase === false && includeUppercase === false && includeNumber && includeSymbol === false) {
      for (var i = 0; i < passwordLength; i ++) {
        generatedPassword += genNumber();
      }
    }

    // numbers and symbols
    if (includeLowercase === false && includeUppercase === false && includeNumber && includeSymbol) {
      for (var i = 0; i < passwordLength; i = i + 2) {
        generatedPassword += genNumber() + genSymbol();
      }
    }

    // symbols
    if (includeLowercase === false && includeUppercase === false && includeNumber === false && includeSymbol) {
      for (var i = 0; i < passwordLength; i ++) {
        generatedPassword += genSymbol();
      }
    }
  } else {
    window.alert("Please enter a password length ranging from 8-128.")
    generatePassword();
  }

  const finalPassword = generatedPassword.slice(0, passwordLength);

  return finalPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
