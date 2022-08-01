function logIn(){
    let user = document.getElementById("UserName").value;
    let password = document.getElementById("password").value;
//check if user name and pasword correct
    if(user=="Yoon"&& password=="12345"){
    alert("log in succesfully")
}
else{
alert("username or password is not correct")
}
}