
let errMessage = document.getElementById("errMessage");
function check(e) {
  e.preventDefault();
  let username = e.target.form.username.value; 
    let password = e.target.form.password.value;

    if (username == "Sara" && password == "qwe123") {
     
      localStorage.setItem("uname", username); 
      localStorage.setItem("pass", password); 
      localStorage.setItem("code", "secret"); 
      window.location.href = "main.html"; 
      errMessage.innerHTML = "User Logged in Successfully";
      errMessage.style.color = "white";
      errMessage.style.backgroundColor = "green";
    }
    else {
        errMessage.innerHTML = "Ivalid Username/Password!";
        errMessage.style.color = "white";
        errMessage.style.backgroundColor = "red";
  }
};




