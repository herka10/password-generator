// Assignment Code
var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbericalChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", ",", "/", ":", ";", "<", ">", "?", "[", "]", "~"]
var generateBtn = document.querySelector("#generate");


function getRandom(array) {
    var randomIndex = Math.floor(Math.random() * array.length)
    var randomElement = array[randomIndex]
        return randomElement
}

function generatePassword() {
    var passwordLength = parseInt(
        prompt('how many characters for your password')
    )

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

    if (useLowerCase === false && useUppercase === false && useSpecialChar === false && useNumericalChar === false) {
        alert("Invalid. At least one character type must be selected. Please select one.")
        return
    }

    var allUserCharacters = [];

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
    
    var generatedPassword = ""

    for (var i = 0; i < passwordLength; i++) {
        var randomList = getRandom(allUserCharacters)
        var randomChars = getRandom(randomList)
        generatedPassword += randomChars
    }

    return generatedPassword    
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword); 

