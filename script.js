// Assignment Code
var generateBtn = document.querySelector("#generate");

let number
let upperCase
let lowerCase
let character
let choice

//All possible characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
character = ['!', '@', '#', '$', '%',
    '^', '&', '*', '(', ')', '_', '-', '=',
    '+', '~', '`', '{', '}', '[', ']', '|',
    '\\', ':', ';', '"', "'", ',', '<', '>', '/', '?'];
letters['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Write password to the #password input
function writePassword() {
    //Asks User Input
    let passwordlength = prompt('Enter the desired length of your password:');
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
        choice
    }
    //For if only 3 criteria get chosen
    else if (number && upperCase && lowerCase) {
        choice
    }

    else if (number && upperCase && character) {
        choice
    }

    else if (upperCase && lowerCase && character) {
        choice
    }

    else if (number && lowercase && character) {
        choice
    }
    //For if only 2 criteria get chosen
    else if (number && upperCase) {
        choice
    }

    else if (number && lowerCase) {
        choice
    }

    else if (number && character) {
        choice
    }

    else if (upperCase && lowerCase) {
        choice
    }

    else if (upperCase && character) {
        choice
    }

    else if (character && lowerCase) {
        choice
    }
    //For if only 1 criteria get chosen
    else if (number) {
        choice
    }

    else if (upperCase) {
        choice
    }

    else if (lowerCase) {
        choice
    }

    else if (character) {
        choice
    }





    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
