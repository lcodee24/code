document.querySelector("form").addEventListener("submit", validation);

function validation(e) {
  let success = true;

  let ph_id_err = document.getElementsByClassName("ph_id_err")[0];
  let pass_err = document.getElementsByClassName("pass_err")[0];
  let pass_err2 = document.getElementsByClassName("pass_err2")[0];

  let ph_id_inp = document.getElementsByClassName("ph_id")[0];
  let password_inp = document.getElementsByClassName("pass")[0];
  let password_inp2 = document.getElementsByClassName("pass2")[0];

  let ph_id = ph_id_inp.value;
  let password = password_inp.value;
  let password2 = password_inp2.value;
  console.log(ph_id, ":", password);

  let phonePattern = /^[6-9]\d{9}$/;

  if (ph_id === "") {
    ph_id_err.innerHTML = "Input ph or userID is empty!";
    ph_id_inp.style.border = "2px solid red";
    success = false;
  } else if (!phonePattern.test(ph_id)) {
    ph_id_err.innerHTML =
      "Invalid phone number! Must be 10 digits starting with 6, 7, 8, or 9.";
    ph_id_inp.style.border = "2px solid red";
    success = false;
  } else {
    ph_id_err.innerHTML = "";
    ph_id_inp.style.border = "2px solid green";
  }

  if (password !== password2) {
    pass_err2.innerHTML = "Passwords do not match";
    password_inp.style.border = "2px solid red";
    password_inp2.style.border = "2px solid red";
    success = false;
  }

  if (password === "") {
    pass_err.innerHTML = "Password is empty!";
    password_inp.style.border = "2px solid red";
    success = false;
  } else if (password.length > 8) {
    pass_err.innerHTML = "Password should not exceed length 8!";
    password_inp.style.border = "2px solid red";
    success = false;
  } else if (password.length < 8) {
    pass_err.innerHTML = "Password should not be less than length 8!";
    password_inp.style.border = "2px solid red";
    success = false;
  } else{
    password_inp.style.border = "2px solid green";
    pass_err.innerHTML = "";
  }
  
  if (password2 === "") {
    pass_err2.innerHTML = "Password is empty!";
    password_inp2.style.border = "2px solid red";
    success = false;
  } else if (password2.length > 8) {
    pass_err2.innerHTML = "Password should not exceed length 8!";
    password_inp2.style.border = "2px solid red";
    success = false;
  } else if (password2.length < 8) {
    pass_err2.innerHTML = "Password should not be less than length 8!";
    password_inp2.style.border = "2px solid red";
    success = false;
  } else {
    password_inp2.style.border = "2px solid green";
    pass_err2.innerHTML = "";
  }
  
  if (password !="" && password2==""){
    pass_err2.innerHTML = "Password is empty";
    pass_err.innerHTML = "Re-Password is empty"
    password_inp.style.border = "2px solid red";
    password_inp2.style.border = "2px solid red";
    success = false;
  }
  else if(password =="" && password2!=""){
    pass_err.innerHTML = "Password is empty";
    password_inp.style.border = "2px solid red";
    password_inp2.style.border = "2px solid red";
    success = false;
  }
  else if(password != password2){
    pass_err2.innerHTML = "Password does't match";
    password_inp.style.border = "2px solid red";
    password_inp2.style.border = "2px solid red";
  }
  else if(password !="" && password2 != "" ){
      password_inp.style.border = "2px solid green";
      password_inp2.style.border = "2px solid green";
    }

  if (!success) {
    e.preventDefault();
  }
}
