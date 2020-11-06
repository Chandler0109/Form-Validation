console.log('curry')

var errorMessage = document.getElementById("error_email");
var letters = /^[A-Za-z]+$/;
var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var firstName = document.getElementById("fNameInput");
var lastName = document.getElementById("lNameInput");
var input = document.getElementById("emailInput");
var pw = document.getElementById("passwordInput");
var errorPw1 = document.getElementById("error_pw1");
var errorPw = document.getElementById("error_pw");
var errorFirstName = document.getElementById("error_fName");
var errorLastName = document.getElementById("error_lName");
var welcomeMessage = document.getElementById("welcome");
function ValidateEmail() {
    if (firstName.value === ''|| firstName.value  !== (letters)){
        firstName.style.border="1px solid hsl(354, 100%, 66%)";
        errorFirstName.style.display="block";
    }
    if (firstName.value.match(letters)){
      errorFirstName.style.display="none";
      firstName.style.border="1px solid hsl(223, 100%, 88%)";
    }
    
    if (lastName.value === ''|| lastName.value !== (letters)){
      lastName.style.border="1px solid hsl(354, 100%, 66%)";
      errorLastName.style.display="block";
    }
    if (lastName.value.match(letters)){
      errorLastName.style.display="none";
      lastName.style.border="1px solid hsl(223, 100%, 88%)";
    }

    if (pw.value.length <= 6){
      pw.style.border="1px solid hsl(354, 100%, 66%)";
      errorPw1.style.display="block";
      errorPw.style.display="none";
    }
    if (pw.value === ''|| pw.value === null){
      pw.style.border="1px solid hsl(354, 100%, 66%)";
      errorPw.style.display="block";
      errorPw1.style.display="none";
    }
    if (pw.value.length > 6){
      errorPw1.style.display="none"; 
      errorPw.style.display="none";
      pw.style.border="1px solid hsl(223, 100%, 88%)";
    }

    if (input.value === ''|| input.value !== (mailFormat)){
        input.style.border="1px solid hsl(354, 100%, 66%)";
        errorMessage.style.display="block";
    }
    if (input.value.match(mailFormat)){
      errorMessage.style.display="none";
      input.style.border="1px solid hsl(223, 100%, 88%)";
    } 
    if (input.value.match(mailFormat) && pw.value.length > 6 && firstName.value.match(letters) && lastName.value.match(letters)){
      welcomeMessage.style.display="block";
    }
}
