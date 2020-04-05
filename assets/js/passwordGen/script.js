//Define Variables 
var chars = ''     //Create empty string for add parameters
var upChars = "ABCDEFGHIJKLMNOPQURSTUVWXYZ"
var lowChars = "abcdefghijklmnopqrstuvwxyz"
var numChars = "0123456789"
var speChars = "!@#$%^&*?/"
//

var passLength = prompt("Choose password length between 8-128 characters.");
if (passLength >= 8 && passLength <= 128) {
        var uppCase = confirm("Include uppercase characters?");
        var lowCase = confirm("Include lowercase characters?");
        var numCase = confirm("Include numerical characters?");
        var speCase = confirm("Include special characters:'!,@,#,$,%,^,&,*,?,/'?");
        }

else {
    alert("Insufficient Value.");
    window.location.reload();
}

 
// Change variables to strings
if (uppCase) {
    chars+= upChars
}

if (lowCase) {
    chars += lowChars
}

if (numCase) {
    chars += numChars
}

if (speCase) {
    chars += speChars
}

// Create Password Function 
function createPass() {
    var result = '';                                        //Created password string
    // For loop to create password
    for (var i = 0; i < Number(passLength); i++) {          //Change passLength string to numbers to let for loop function
        result += chars.charAt(                             //Add new random digits to result variable 
            Math.floor(Math.random() * chars.length)        //Define char string length so loop can use it 
        );
    }
    console.log(result)                                    // Log results to console

    return result;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {                                      //Call writePassword function
    var password = createPass();                                //Define password variable as the result of writePassword function
    var passwordText = document.querySelector("#password");     //Pas

    passwordText.value = password;                              //Password text is displayed in read-only section 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
