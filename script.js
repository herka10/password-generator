// Assignment Code
var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbericalChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_"]
var generateBtn = document.querySelector("#generate");
// var password = generatePassword()


function randomChars(min, max) {
    return Math.floor(Math.random() * (max-min) + min)

}

function generatePassword() {
    // get user info

        // check that user info meets parameters
    var numlength = prompt('Please enter a number between 8-128 for a length of your password.') 
    var passwordLength = parseInt(numlength)

        if (isNaN(passwordLength)) {
            alert("That is not a valid number!")
            return
        } 
        
        if (passwordLength < 8 || passwordLength > 128) {
            alert("The password must be 8-128 characters. Please choose another number.")
            return
        }
    

    var useLowerCase = confirm('Do you want to use lower case characters?');
    var useUppercase = confirm('Do you want to use uppercase characters?');
    var useSpecialChar = confirm('Do you want to include a special character?') 
    var useNumericalChar = confirm('Do you want to include a number?')

// what if they skip all the prompts? How do I make sure it loops around to make sure they select at least 1 of the options? 


    var allUserCharacters = [];
    // if statements to make a pw based on user info
    if (useLowerCase === true) {
        allUserCharacters.push(lowercaseChar)
    }
    if (useUppercase === true) {
        allUserCharacters.push(uppercaseChar)
    }
    if (useSpecialChar === true) {
        allUserCharacters.push(specialChar)
    }
    if (useNumericalChar === true) {
        allUserCharacters.push(numbericalChar)
    }

    // if (useLowerCase === False && useUppercase === False && useSpecialChar === False && useNumericalChar === False) {
    //     alert("Invalid. At least one character type must be selected. Please select one.")
    //     return
    // }

    for (var i = 0; i < passwordLength; i++) {
        var randomChars = allUserCharacters[i]
    }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button //
generateBtn.addEventListener("click", writePassword); 

// for loop through array to grab random character
//         push each random character to pw        


  
//     return pw;