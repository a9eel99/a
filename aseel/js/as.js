const form = document.getElementById('form');
const username = document.getElementById('users');
const emailInput = document.getElementById('email');
const numberInput = document.getElementById('phone');
const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
document.forms[1].onsubmit = function (e) {
  let userValid = false;
  let emailValid = false;
  let numberValid = false;
  
  if(username.value !== '' && username.value.length <=10){
    userValid = true;
  }
  if(numberInput.value !== '' && numberInput.value.length == 10){
    numberValid = true;
  }
  const email = "user@example.com"
  if(isValidEmail(email)){
    emailValid = true;
  }

  if(userValid === false || emailValid === false || numberValid === false) {
    e.preventDefault();
  }
};


// ********************** Validation


const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const invalidMessage = document.getElementById("email"); // Get the first element with class "invalid"

const Message = document.getElementsByClassName("invalid")[0];
emailInput.addEventListener("input", function () {
    const email = emailInput.value;
    if (emailRegex.test(email)) {
        invalidMessage.style.borderColor = "green" ;
        invalidMessage.style.borderWidth = "3px";
        Message.style.display = "none";
    } else {
        invalidMessage.style.borderColor = "red";
        invalidMessage.style.borderWidth = "3px";
        Message.style.display = "block";
    }
});

const phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

const wrong = document.getElementById('phone');
const Messag = document.getElementsByClassName("invalid")[1];

numberInput.addEventListener("input", function(){
  const phone = numberInput.value;
  if(phoneRegex.test(phone)){
    wrong.style.borderColor = "green";
    wrong.style.borderWidth = "3px";
    Messag.style.display = "none";
  }else{
    wrong.style.borderColor = "red";
    wrong.style.borderWidth = "3px";
    Messag.style.display = "block";
  }
});

