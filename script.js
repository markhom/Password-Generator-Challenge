// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    //Numbers

    var Numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    //Uppercase letters

    var UpperAlph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    //Lowercase letters

    var LowerAlph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    //Special Characters
    
    var Special = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/',
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
    let includeSpecial = confirm('Include special characters?');

    //Alert to include at least one character type if none selected

    if (!(includeLowerAlph || includeNumbers || includeSpecial || includeUpperAlph)){
        alert('Please select at least one character type.')
        return;
    }


    // Setting Criteria for characters

    if (includeLowerAlph) space = space.concat(LowerAlph);
    if (includeUpperAlph) space = space.concat(UpperAlph);
    if (includeNumbers) space = space.concat(Numbers);
    if (includeSpecial) space = space.concat(Special);

    // Function to generate random password

    function generatePassword(length, characterSpace) {
        var password = '';
        for (let i = 0; i < length; i++) {
            let randomIndex = Math.floor(Math.random() * characterSpace.length);
            password += characterSpace[randomIndex];
        }
        return password;
    }

    var password = generatePassword(numberOfCharacters, space);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


