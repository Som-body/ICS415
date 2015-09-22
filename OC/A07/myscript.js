/**
 * Created by Standard on 9/20/2015.
 */


function getClasses(elem) {
  var classes = elem.className.split(' ');
  return classes;
}

function addClasses(elem, className) {
  var classes = elem.className.split(' ');
  classes.push(className);
  var newClasses = '';
  for (var i = 0; i < classes.length; i++) {
    newClasses += classes[i];
    if (i !== (classes.length - 1)){
      newClasses += " ";
    }
  }
  elem.className = newClasses;
}

function validateForm() {
  var valid = true;
  var errorMessage = "";
  var username = document.forms["myForm"]["name"];
  var password = document.forms["myForm"]["password"];
  var confirmPassword = document.forms["myForm"]["confirm"];
  var email = document.forms["myForm"]["email"];

  if (username.value === "") {
    valid = false;
    username.style.backgroundColor = "red";
    errorMessage += "You must fill in the username field. <br>"
  }
  else {
    username.style.backgroundColor = "white";
  }

  if (email.value === "") {
    valid = false;
    email.style.backgroundColor = "red";
    errorMessage += "You must fill in the email field. <br>";
  }
  else {
    email.style.backgroundColor = "white";
  }

  if (password.value === "") {
    valid = false;
    password.style.backgroundColor = "red";
    errorMessage += "You must fill in the password field. <br>";
  }
  else {
    password.value.backgroundColor = "white";
  }

  if (confirmPassword.value === "") {
    valid = false;
    confirmPassword.style.backgroundColor = "red";
    errorMessage += "You must fill in the password field. <br>";
  }
  else {
    confirmPassword.style.backgroundColor = "white";
  }

  if (confirmPassword.value !== password.value || password.value === "") {
    valid = false;
    password.style.backgroundColor = "red";
    confirmPassword.style.backgroundColor = "red";
    errorMessage += "Your passwords must match.";
  }
  else {
    password.style.backgroundColor = "white";
    confirmPassword.style.backgroundColor = "white";
  }

  document.getElementById("error").innerHTML = errorMessage;
  return valid;
}