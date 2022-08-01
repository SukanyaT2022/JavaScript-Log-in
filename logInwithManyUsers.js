function logIn() {
  let user = document.getElementById('UserName').value;
  let password = document.getElementById('password').value;
  let recheckPassword = document.getElementById('passwordConfirm').value;
  //check if user name and pasword correct by comparing variable
  //&& we use in confirm password to see if it match correctly
  if (user == 'Yoon' && password == '12345' && password == recheckPassword) {
    alert('log in succesfully');
  }
  //use else if for many users
  /*else if (user=="kim"&& password=="123"){
    alert("log in succesfully Kim")
}
    else if (user=="Jane"&& password=="321"){
        alert("log in succesfully Jane")
    }
    */
  else {
    alert('username or password is not correct');
  }
}
// show passward in letterr or number
function showPassword() {
  var showp = document.getElementById('password');
  if (showp.type == 'password') {
    showp.type = 'text';
  } else {
    showp.type = 'password';
  }
}

//show password in confirm box
function showConfirmPassword() {
  var show2 = document.getElementById('passwordConfirm');
  if (show2.type == 'password') {
    show2.type = 'text';
  } else {
    show2.type = 'password';
  }
}
