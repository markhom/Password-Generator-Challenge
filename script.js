// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    //Numbers

    var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    //Uppercase letters

    var upperAlph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    //Lowercase letters

    var lowerAlph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    //Special Characters
    
    var specialCharacters = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/',
        ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|',
        '}', '~',];

    //Possible Characters

    var space = [];

    //First prompt after button clicked    

    numberOfCharacters = prompt('How many characters do you want your password to be?')
        if (numberOfCharacters < 8 || numberOfCharacters > 128){
            return alert("Your password must be more than 8 characters and less than 128 characters. Please select a valid input.")
        } else if (isNaN(numberOfCharacters)) {
            return alert('Error! You must select a number.')
        };

    //First Criteria

    let includeNumbers = confirm('Include numbers?');
    let includeLowerAlph = confirm('Include lowercase characters?');
    let includeUpperAlph = confirm('Include uppercase characters?');
    let includeSpecialCharacters = confirm('Include special characters?');

    //Alert to include at least one character type if none selected

    if (!includeLowerAlph, !includeNumbers, !includeSpecialCharacters, !includeUpperAlph){
        alert('Please select at least one character type.')
        return;
    }
        

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


