// Assignment Code
var generateBtn = document.querySelector("#generate");

var number, upperCase, lowerCase, character

var choice

//All possible characters
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
characters = ['!', '@', '#', '$', '%',
    '^', '&', '*', '(', ')', '_', '-', '=',
    '+', '~', '`', '{', '}', '[', ']', '|',
    '\\', ':', ';', '"', "'", ',', '<', '>', '/', '?'];
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var toUpper = function(x){
    return x.toUpperCase();
};

var letters2 = letters(toUpper);
// Write password to the #password input
function writePassword() {
    //Asks User Input
    var passwordlength = prompt('Enter the desired length of your password:');
    //Error if criteria doesn't fit
    if (passwordlength === null || isNaN(passwordlength) || passwordlength < 8 || passwordlength > 128) {
        alert('Error. Password length must be at least 8 characters and no more than 128.');
        return;
    } else {
        number = confirm('Would you like your password to contain numbers?');
        upperCase = confirm('Would you like your password to contain UPPERCASE letters?');
        lowerCase = confirm('Would you like your password to contain lowercase letters?');
        character = confirm('Would you like your password to include special characters?')
    };
    //Asking Next Criteria
    if (!number && !upperCase && !lowerCase && !character) {
        choice = alert("Error. You must choose at least one criteria.")
    }
    //For if all criteria gets chosen
    else if (number && upperCase && lowerCase && character) {
        choice = numbers.concat(characters, letters, letters2)
    }
    //For if only 3 criteria get chosen
    else if (number && upperCase && lowerCase) {
        choice = numbers.concat(letters2, letters);
    }

    else if (number && upperCase && character) {
        choice = numbers.concat(letters2, characters);
    }

    else if (upperCase && lowerCase && character) {
        choice = letters2.concat(letters, characters);
    }

    else if (number && lowercase && character) {
        choice = numbers.concat(letters, characters);
    }
    //For if only 2 criteria get chosen
    else if (number && upperCase) {
        choice = numbers.concat(letters2);
    }

    else if (number && lowerCase) {
        choice = numbers.concat(letters);
    }

    else if (number && character) {
        choice = numbers.concat(characters);
    }

    else if (upperCase && lowerCase) {
        choice = letters2.concat(letters)
    }

    else if (upperCase && character) {
        choice = letters2.concat(characters);
    }

    else if (character && lowerCase) {
        choice = characters.concat(letters)
    }
    //For if only 1 criteria get chosen
    else if (number) {
        choice = numbers
    }

    else if (upperCase) {
        choice = letters2
    }

    else if (lowerCase) {
        choice = letters
    }

    else if (character) {
        choice = characters
    }





    var password = generatePassword(passwordlength);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
