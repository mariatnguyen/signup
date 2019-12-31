//Form visuals

var isNameClicked = false;
function addName() {
  if(isNameClicked == false){
    document.getElementById('fullname').value = "";
    document.getElementById('fullname').style.color = "#252525";
      if (isEmailClicked == true){
      document.getElementById('rocket').style.animation = "secondlaunch 4s forwards";document.getElementById('submit').style.cssText = "background-color:#252525;pointer-events:auto;"}
      else {document.getElementById('rocket').style.animation = "firstlaunch 3s forwards";}
    document.body.removeEventListener('click', addName);
  }
  isNameClicked = true;
}

var isEmailClicked = false;
function addEmail() {
  if(isEmailClicked == false){
    document.getElementById('emailaddress').value = "";
    document.getElementById('emailaddress').style.color = "#252525";
      if (isNameClicked == true){
      document.getElementById('rocket').style.animation = "secondlaunch 4s forwards";
      document.getElementById('submit').style.cssText = "background-color:#252525;pointer-events:auto;";    }
      else {document.getElementById('rocket').style.animation = "firstlaunch 3s forwards";}
    document.body.removeEventListener('click', addEmail);
  }
  isEmailClicked = true;
}

function submitAnimation() {
  if (isNameClicked === true && isEmailClicked === true) {
  document.getElementById('rocket').style.animation = "thirdlaunch 2s forwards";
  }
}

//Form validations
var isNameCorrect = false;
document.getElementById('fullname').addEventListener('change', function() {
  var hasWords = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  if (hasWords.test(document.getElementById('fullname').value)) { 
    document.getElementById('errorname').style.cssText = "visibility:hidden;";  isNameCorrect = true;}
  else {
    document.getElementById('errorname').style.cssText = "visibility:visible;";
    isNameCorrect = false;
  };
});

var isEmailCorrect = false;
document.getElementById('emailaddress').addEventListener('change', function() {
  var hasEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (hasEmail.test(document.getElementById('emailaddress').value)) { 
    document.getElementById('erroremail').style.cssText = "visibility:hidden;";
    isEmailCorrect = true;}
  else {
    document.getElementById('erroremail').style.cssText = "visibility:visible;";
    isEmailCorrect = false;
  };
});

function submit() {
  if (isNameClicked == true && isEmailClicked == true && isNameCorrect == true && isEmailCorrect == true) {
    window.open("thanks.html");
  }
}

