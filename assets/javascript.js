//Welcome Alert
alert("Welcome to Password Generator!");
alert("Please click 'Generate Password' for Password Criteria");


// Left the global variables with null to hold their info but could probably put them all in a function
var passLength = null;
var passLower = null;
var passUpper = null;
var passNumber = null;
var passSpecial = null;

//Gathers the inidividual variable's info


function generatePassword() {
  
  // created passArray to hold values as they pass through the prompts
  var passArray = [];


  var promptLength = prompt("Please enter a password length between 8 and 128 characters");
  if (promptLength === "" || promptLength === null || promptLength < 8 || promptLength > 128 || promptLength % 1 != 0 || Number(promptLength) === NaN) {
  window.alert("You need to provide a valid entry! Please try again.");
  return generatePassword();
  }
  else{
    passLength = promptLength;
  } 

    // Used confirm method for the boolean prompts
var promptLower = confirm("Will the password include Lowercase characters? Please press OK for Yes or Cancel for No");
  if (promptLower == true) {
    passLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    console.log(passLower);
    passArray = passArray.concat(passLower);
    
  }

var promptUpper = confirm("Will the password include Uppercase characters? Please press OK for Yes or Cancel for No");
  if (promptUpper == true) {
    passUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    passArray = passArray.concat(passUpper);
    
  }

var promptNumber = confirm("Will the password include Numbers? Please press OK for Yes or Cancel for No");
  if (promptNumber == true) {
    passNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    passArray = passArray.concat(passNumber);
    
  } 


var promptSpecial = confirm("Will the password include Special characters (i.e. !@#$%)? Please press OK for Yes or Cancel for No");
  if (promptSpecial == true) {
    passSpecial = ["!", "$", "#","@", "%", "^", "&", "*", "(", ")", "-", "_", '"', "'", "=", "+" ];
    passArray = passArray.concat(passSpecial);
   
  } else {
  }
  
  //Created for loop to randomize the captured data per the user's length entry
  var passwordRandom = [];
  for (var i =0; i < passLength; i++) {
    passwordRandom += passArray[(Math.floor(Math.random() * passArray.length))];
    }

    return passwordRandom;

    //Upon clicking the button again, the password will reset

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